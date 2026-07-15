package org.imaginetomorrow.imatter;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/**
 * I Matter — offline Android wrapper.
 *
 * The entire web app (HTML/CSS/JS and all content) is bundled inside the APK
 * under assets/www/ and loaded from file:///android_asset/www/index.html.
 * Nothing is fetched from the network, so the app works fully offline with no
 * connection required at any point. Phone numbers, emails, and web links are
 * handed off to the system apps (dialer / mail / browser).
 */
public class MainActivity extends Activity {

    private WebView web;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        web = new WebView(this);
        setContentView(web);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);            // localStorage (My Space, settings)
        s.setAllowFileAccess(true);
        s.setAllowContentAccess(true);
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        s.setMediaPlaybackRequiresUserGesture(true);

        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return handleExternal(request.getUrl().toString());
            }

            @SuppressWarnings("deprecation")
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return handleExternal(url);
            }
        });

        if (savedInstanceState != null) {
            web.restoreState(savedInstanceState);
        } else {
            web.loadUrl("file:///android_asset/www/index.html");
        }
    }

    /**
     * Keep the app itself (file:// and in-page # routes) inside the WebView;
     * open real-world links (tel:, mailto:, sms:, http(s):, whatsapp:) in the
     * appropriate system app.
     */
    private boolean handleExternal(String url) {
        if (url == null) return false;
        if (url.startsWith("file://") || url.startsWith("javascript:") || url.startsWith("about:")) {
            return false;
        }
        if (url.startsWith("tel:") || url.startsWith("mailto:") || url.startsWith("sms:")
                || url.startsWith("http://") || url.startsWith("https://")
                || url.startsWith("whatsapp:") || url.startsWith("intent:")) {
            try {
                startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url)));
            } catch (Exception ignored) {
                // No app to handle it — silently ignore rather than crash.
            }
            return true;
        }
        return false;
    }

    @Override
    public void onBackPressed() {
        if (web != null && web.canGoBack()) {
            web.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        if (web != null) web.saveState(outState);
    }
}
