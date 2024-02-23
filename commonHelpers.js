import{a as E,S as M,i as a}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();async function p(r,t){const l="https://pixabay.com/",i="/api",e="/?key=42290205-24e5613e72929844af62d686c",s=`&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${t}`,o=l+i+e+s;return(await E.get(o)).data}const f=document.querySelector(".gallery");function h(r){const t=r.hits.map(({webformatURL:i,largeImageURL:e,targs:s,views:o,comments:g,downloads:b})=>`<li class="gallery-item">
    <a class="gallery-link" href="${e}">
      <img
        class="gallery-image"
        src="${i}"
        alt="${tags}"
      />
      <div class="desc-container">
       <div class="img-desc">
      <p class="img-desc-title">Likes</p>
      <p class="img-desc-content">${likes}</p>
    </div>
    <div class="img-desc">
      <p class="img-desc-title">Views</p>
      <p class="img-desc-content">${o}</p>
    </div>
    <div class="img-desc">
      <p class="img-desc-title">Comments</p>
      <p class="img-desc-content">${g}</p>
    </div>
    <div class="img-desc">
      <p class="img-desc-title">Downloads</p>
      <p class="img-desc-content">${b}</p>
    </div>
    </div>
    </a>
  </li>`).join("");f.insertAdjacentHTML("beforeend",t),new M(".gallery a",{caption:!0,captionDelay:250,captionData:"alt"}).refresh()}const P=document.querySelector(".form"),$=document.querySelector(".gallery"),y=document.querySelector(".loader-container"),m=document.querySelector(".load-more-btn");let n,L,d;const c={backgroundcolor:"yellow",messageColor:"white",messageSize:"14",position:"topRight",timeout:3e3};P.addEventListener("submit",q);m.addEventListener("click",O);async function q(r){if(r.preventDefault(),w(),f.innerHTML="",d=r.target.elements.input.value.trim(),n=1,d===""){a.show({...c,message:"Fill out the search form!"});return}try{v();const t=await p(d,n);if(L=Math.ceil(t.totalHits/15),t.totalHits===0){u(),a.show({...c,message:"Sorry, there are no images matching your search query. Please try again!"});return}else h(t),u()}catch(t){a.error({...c,title:"Error",message:t})}S(),r.target.reset()}async function O(){n+=1,v();try{const t=await p(d,n);h(t)}catch(t){a.error({...c,title:"Error",message:t})}u(),S();const r=$.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:r*2})}function v(){y.classList.remove("is-hidden")}function u(){y.classList.add("is-hidden")}function B(){m.classList.remove("hidden")}function w(){m.classList.add("hidden")}function S(){n>=L?(w(),a.show({...c,message:"We're sorry, but you've reached the end of search results."})):B()}
//# sourceMappingURL=commonHelpers.js.map
