/**
 * Inline blocking script that reads locale/theme cookies
 * and sets html attributes before first paint — no flash.
 */
export function ThemeHydrator() {
  const script = `
(function(){
  var c=document.cookie;
  function g(n){var m=c.match(new RegExp('(?:^|; )'+n+'=([^;]*)'));return m?m[1]:null}
  var l=g('locale');
  if(l==='en'||l==='pl')document.documentElement.lang=l;
  else document.documentElement.lang='en';
  var t=g('theme');
  if(t==='dark'||t==='contrast')document.documentElement.setAttribute('data-theme',t);
  else document.documentElement.setAttribute('data-theme','dark');
})();
`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
