/**
 * Inline blocking script that reads locale/theme from localStorage
 * and sets html attributes before first paint — no flash.
 *
 * Returns raw HTML string to be used with dangerouslySetInnerHTML
 * on a <script> tag directly in the layout.
 */
export const themeHydratorScript = `(function(){
  try{
    var s=localStorage;
    var l=s.getItem('locale');
    if(l==='en'||l==='pl')document.documentElement.lang=l;
    else document.documentElement.lang='en';
    var t=s.getItem('theme');
    if(t==='dark'||t==='contrast')document.documentElement.setAttribute('data-theme',t);
    else document.documentElement.setAttribute('data-theme','dark');
  }catch(e){}
})();`;
