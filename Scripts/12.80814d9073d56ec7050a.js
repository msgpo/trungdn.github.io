!function(){document&&document.currentScript&&document.currentScript.src;(window.webpackJsonpruntime=window.webpackJsonpruntime||[]).push([[12],{"09uc":function(t,n,e){"use strict";e.r(n),e.d(n,"init",(function(){return l})),e.d(n,"openPopupWithEvent",(function(){return u})),e.d(n,"closePopup",(function(){return h}));var o=e("yXPU"),a=e.n(o),i=e("foIZ"),r=e("C+iK"),c=e("NO3N"),s=e("J66h");class d{constructor({container:t}){this.container=t,this.navigationMonths=0,this._bindMethods(),t.addEventListener("click",this._navigationDispatch),this._loadCurrentMonth()}_bindMethods(){this._loadNewMonth=this._loadNewMonth.bind(this),this._loadCurrentMonth=this._loadCurrentMonth.bind(this),this._buildDataString=this._buildDataString.bind(this),this._fetchAndLoadNewMonth=this._fetchAndLoadNewMonth.bind(this),this._navigationDispatch=this._navigationDispatch.bind(this)}_navigationDispatch(t){const n=t.target.closest("[class*=arrow-container]"),e=t.target.closest(".today-btn-container");n?this._loadNewMonth(n):e&&this._loadCurrentMonth()}_buildDataString(){const t={commandID:"d1_loadNewGoogleCalendar"};return t["data-public-calendar-id"]=this.container.getAttribute("data-public-calendar-id"),t["data-navigation-months"]="0",t.device=r.getCurrentLayoutDevice(),t["data-week-start-on"]=this.container.getAttribute("data-week-start-on"),t}_loadCurrentMonth(){var t=this;return a()((function*(){const n=t._buildDataString();yield t._fetchAndLoadNewMonth(n,0)}))()}_loadNewMonth(t){var n=this;return a()((function*(){const e=n._buildDataString(),o="rtl"===getComputedStyle(n.container.querySelector(".calendar-container")).getPropertyValue("direction")?-1:1,a=t.classList.contains("left-arrow-container")?-1:1,i=n.navigationMonths+o*a,r=i.toString(10);e["data-navigation-months"]=r,yield n._fetchAndLoadNewMonth(e,i)}))()}_fetchAndLoadNewMonth(t,n){var e=this;return a()((function*(){const o="/_dm/s/rt/api/public/wpl/site/"+r.getSiteAlias(),a=yield fetch(o,{method:"POST",credentials:"include",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});if(a.ok){const o=yield a.json();if(o.googleCalendarMarkup){const n=document.createElement("div");n.innerHTML=o.googleCalendarMarkup.toString(),e.container.innerHTML=n.querySelector(".dm-google-calendar").innerHTML,e.container.setAttribute("data-navigation-months",t["data-navigation-months"])}e.navigationMonths=n}}))()}}function l(){const t=[];Array.from(document.querySelectorAll(".dm-google-calendar")).forEach(n=>{t[n.id]=new d({container:n})}),function(t){t.length?document.addEventListener("click",p):document.removeEventListener("click",p)}(t)}function u(t){const n=document.createElement("div"),e=t.description?`<div class='event-description dmNewParagraph'>${t.description.replace(/\n/g,"<br>")}</div>`:"",o=`<span>\n                        ${"true"===t.isAllDayEvent?t.date:`${t.start} - ${t.end}`}\n                        </span>`;n.innerHTML=`\n        <div class='event-full-container'>\n          <p>\n              <span class="event-full-container-title">${t.summary}</span>\n              <br/>\n              ${o}\n              <br/>\n          </p> \n          ${e}     \n        </div>    \n`,n.querySelectorAll(".event-description a").forEach((function(t){t.setAttribute("target","_blank")}));const a=r.getCurrentLayoutDevice()===c.b.MOBILE?230:270,s=r.getCurrentLayoutDevice()===c.b.MOBILE?300:390;i.e.openPopup(n,"google-calendar-popup-content-container",s,a,{dontOverlay:!0,animation:"opened-calendar-popup"})}function h(){i.e.hidePopup()}function p(t){const n=t.target.closest(".event-container"),e=t.target.closest(".x-more-container"),o=t.target.closest(".monthly-day-card.mobile");n?function(t){const n=JSON.parse(s.Base64.decode(t.dataset.calendarEvent));if(!n)return;u(n)}(n):e?g(e):o&&g(o,!0)}function g(t,n=!1){const e=t.closest(".monthly-day-card");if(!e.querySelector(".events-container").querySelectorAll(".event-container").length)return;const o=e.cloneNode(!0),a=o.querySelector(".x-more-container");a&&a.remove(),n&&(o.querySelector(".events-container").style.display="block");const d=JSON.parse(s.Base64.decode(e.dataset.dayEvents));let l="";for(const t of d){const n=JSON.parse(s.Base64.decode(t.eventB64));let e="";"false"===n.isAllDayEvent&&(e=`<span class="start"> ${t.start}</span>`),l+=`\n            <p class="event-container clickable" data-calendar-event=${s.Base64.encode(JSON.stringify(n))}>\n              ${e}\n              <span>${n.summary}</span>\n              <br/>\n            </p>\n`}o.querySelector(".events-container").innerHTML=l;const u=o,h=r.getCurrentLayoutDevice()===c.b.MOBILE?230:270,p=r.getCurrentLayoutDevice()===c.b.MOBILE?300:390;i.e.openPopup(u,"google-calendar-popup-content-container",p,h,{dontOverlay:!0,animation:"opened-calendar-popup"})}d.displayName="GoogleCalendar"}}])}();