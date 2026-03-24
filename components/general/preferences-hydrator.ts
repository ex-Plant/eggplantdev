/**
 * Inline blocking script that reads unified preferences from localStorage
 * and sets html attributes + CSS custom properties before first paint.
 *
 * Runs before React hydrates — prevents flash of wrong theme/locale/font-size.
 * Falls back to legacy keys for one-time migration.
 *
 * Returns raw HTML string for use with dangerouslySetInnerHTML on a <script> tag.
 */
export const preferencesHydratorScript = `(function(){
  try{
    var s=localStorage;
    var raw=s.getItem('preferences');
    var p=raw?JSON.parse(raw):null;
    if(!p){
      var t=s.getItem('theme');
      var l=s.getItem('locale');
      var f=s.getItem('font-scale');
      if(t||l||f){
        p={};
        if(t==='dark'||t==='contrast')p.theme=t;
        if(l==='en'||l==='pl')p.locale=l;
        if(f){var n=Number(f);if(n>=1&&n<=1.5)p.scale=n;}
      }
    }
    var d=document.documentElement;
    d.setAttribute('data-theme',p&&(p.theme==='dark'||p.theme==='contrast')?p.theme:'dark');
    var loc=p&&(p.locale==='en'||p.locale==='pl')?p.locale:'en';
    d.lang=loc;
    if(loc==='pl')d.style.setProperty('--font-share-tech-mono','var(--font-jetbrains-mono)');
    if(p&&p.scale&&p.scale>=1&&p.scale<=1.5)d.style.setProperty('--font-scale',String(p.scale));
  }catch(e){}
})();`;
