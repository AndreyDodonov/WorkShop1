!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./dist",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=()=>{const e=document.querySelector("#movies");console.dir((void 0).dataset.type);let t="";"movie"===(void 0).dataset.type?t="https://api.themoviedb.org/3/movie/"+(void 0).dataset.id+"?api_key=537a6d92902c73e213db4ccffd38483b&language=ru-RU":"tv"===(void 0).dataset.type?t="https://api.themoviedb.org/3/tv/"+(void 0).dataset.id+"?api_key=537a6d92902c73e213db4ccffd38483b&language=ru-RU":e.innerHTML="ошибка",fetch(t).then(e=>200!==e.status?Promise.reject(new Error(e.status)):e.json()).then(t=>{let r="";t.genres.forEach(e=>{r+=e.name+" "}),e.innerHTML=`\n            <h4 class="col-12 text-center text-info">${t.name||t.title}</h4>\n            <div class="col-4">\n                <img src='${"https://image.tmdb.org/t/p/w500"+t.poster_path}' alt='${t.name||t.title}'>\n                ${t.homepage?`<p class='text-center'>\n                <a href="${t.homepage}" target="_blank">Официальная страница</a> </p>`:""}\n                ${t.imdb_id?`<p class='text-center'>\n                <a href="https://imdb.com/title/${t.imdb_id}" target="_blank">страница IMDB.com</a> </p>`:""} \n            </div>\n            <div class="col-8">\n                <p> Рейтинг: ${t.vote_average}</p>\n                <p> Статус: ${t.status}</p>\n                <p> Премьера: ${t.first_air_date||t.release_date}</p>\n                ${t.last_episode_to_air?`<p>${t.number_of_seasons} сезон \n                     ${t.last_episode_to_air.episode_number} серий вышло </p>`:""}\n                <div>Жанры: ${r}</div>\n                <br>\n                <div class='youtube'></div>\n            </div> \n            `})};var a=()=>{document.querySelector("#movies").querySelectorAll("img[data-id]").forEach(e=>{e.style.cursor="pointer",e.addEventListener("click",n)})};var o=()=>{const e=document.querySelector("#movies");fetch("https://api.themoviedb.org/3/trending/all/week?api_key=537a6d92902c73e213db4ccffd38483b&language=ru-RU").then(e=>200!==e.status?Promise.reject(e):e.json()).then(t=>{let r='<h4 class="col-12 text-center text-warning">Популярное за неделю</h4>';0!==t.results.length?(t.results.forEach(e=>{let t=e.name||e.title,n=e.title?"movie":"tv",a=e.release_date,o=e.poster_path?"https://image.tmdb.org/t/p/w500"+e.poster_path:"img/image_alt.png",i=`data-id="${e.id}" data-type="${n}"`;r+=`\n                    <div class="col-12-col-md-4 col-x1-3 item">\n                    <img src="${o}" class="img_poster" alt="Изображение недоступно(" ${i}> <br>\n                    <b> ${t}<br>\n                    Дата выхода: ${a}</b></div>\n                `}),e.innerHTML=r,a()):e.innerHTML='<h2 class="col-12 text-center text-warning">По вашему запросу ничего не найдено</h2>'}).catch(t=>{e.innerHTML="Упс, что-то пошло не так!",console.error("error: "+t.status)})};var i=e=>{const t=document.querySelector("#movies");e.preventDefault();const r=document.querySelector(".form-control").value;if(0===r.trim().length)return void(t.innerHTML='<h2 class="col-12 text-center text-danger">Введён пустой запрос</h2> ');const n="https://api.themoviedb.org/3/search/multi?api_key=537a6d92902c73e213db4ccffd38483b&language=ru-RU&query="+r;t.innerHTML='<div class="spinner"></div>',fetch(n).then(e=>200!==e.status?Promise.reject(e):e.json()).then(e=>{let r='<h2 class="col-12 text-center text-warning">Результаты поиска</h2>';0!==e.results.length?(e.results.forEach(e=>{let t=e.name||e.title,n=e.release_date,a=e.poster_path?"https://image.tmdb.org/t/p/w500"+e.poster_path:"img/image_alt.png",o="";"person"!==e.media_type&&(o=`data-id="${e.id}" data-type="${e.media_type}"`,r+=`\n                    <div class="col-12-col-md-4 col-x1-3 item">\n                    <img src="${a}" class="img_poster" alt="Изображение недоступно(" ${o}> <br>\n                    <b> ${t}<br>\n                    Дата выхода: ${n}</b></div>\n                `)}),t.innerHTML=r,a()):t.innerHTML='<h2 class="col-12 text-center text-warning">По вашему запросу ничего не найдено</h2>'}).catch(e=>{t.innerHTML="Упс, что-то пошло не так!",console.error("error: "+e.status)})};const s=document.querySelector("#search-form");document.addEventListener("DOMContentLoaded",o()),s.addEventListener("submit",i)}]);