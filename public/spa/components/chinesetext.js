import{SvelteComponent,append,children,claim_element,claim_space,claim_text,detach,element,empty,init,insert,listen,noop,run_all,safe_not_equal,set_data,space,text as text_1}from"../web_modules/svelte/internal/index.mjs";function create_if_block(e){let t,s,n;return{c(){t=element("p"),s=text_1("Show is set to "),n=text_1(e[1])},l(o){t=claim_element(o,"P",{});var i=children(t);s=claim_text(i,"Show is set to "),n=claim_text(i,e[1]),i.forEach(detach)},m(e,o){insert(e,t,o),append(t,s),append(t,n)},p(e,t){t&2&&set_data(n,e[1])},d(e){e&&detach(t)}}}function create_fragment(e){let n,o,i,s,a,r,t=e[1]&&create_if_block(e);return{c(){n=element("div"),o=text_1(e[0]),i=space(),t&&t.c(),s=empty()},l(a){n=claim_element(a,"DIV",{});var r=children(n);o=claim_text(r,e[0]),r.forEach(detach),i=claim_space(a),t&&t.l(a),s=empty()},m(c,l){insert(c,n,l),append(n,o),insert(c,i,l),t&&t.m(c,l),insert(c,s,l),a||(r=[listen(n,"mouseenter",e[2]),listen(n,"mouseleave",e[2])],a=!0)},p(e,[n]){n&1&&set_data(o,e[0]),e[1]?t?t.p(e,n):(t=create_if_block(e),t.c(),t.m(s.parentNode,s)):t&&(t.d(1),t=null)},i:noop,o:noop,d(e){e&&detach(n),e&&detach(i),t&&t.d(e),e&&detach(s),a=!1,run_all(r)}}}function instance(e,t,n){let{text:i}=t,{translation:s}=t,o=!1,a=()=>{n(1,o=!o),console.log(s)};return e.$$set=e=>{"text"in e&&n(0,i=e.text),"translation"in e&&n(3,s=e.translation)},[i,o,a,s]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{text:0,translation:3})}}export default Component