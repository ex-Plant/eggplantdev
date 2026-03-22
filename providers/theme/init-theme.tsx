import Script from "next/script.js";

export function InitTheme() {
  return (
    <Script
      dangerouslySetInnerHTML={{
        __html: `
  (function () {
    var themeToSet = 'dark'
    var themeStorage = window.localStorage.getItem('theme-storage')
    if (themeStorage) {
      try {
        var parsed = JSON.parse(themeStorage)
        var theme = parsed.state && parsed.state.theme
        if (theme === 'dark' || theme === 'contrast') {
          themeToSet = theme
        }
      } catch(e) {}
    }
    document.documentElement.setAttribute('data-theme', themeToSet)
  })();
  `,
      }}
      id="theme-script"
      strategy="beforeInteractive"
    />
  );
}
