(this["webpackJsonp5.exercise-movie"]=this["webpackJsonp5.exercise-movie"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(9),a=c.n(s),o=c(3),l=c(5),r=(c(14),c(0));var j=function(){var e=0,t=Object(n.useState)(!0),c=Object(o.a)(t,2),i=c[0],s=c[1],a=Object(n.useState)(!0),j=Object(o.a)(a,2),m=j[0],d=j[1],b=Object(n.useState)([]),u=Object(o.a)(b,2),h=u[0],O=u[1],v=Object(n.useState)(),x=Object(o.a)(v,2),g=x[0],f=x[1],N=Object(n.useState)(),p=Object(o.a)(N,2),S=p[0],w=p[1],y=function(e){window.innerWidth<426?document.querySelector(".mainShowcase").style.transform="translate(".concat(-100*e,"vw)"):window.innerWidth<769?document.querySelector(".mainShowcase").style.transform="translate(".concat(-33*e,"vw)"):document.querySelector(".mainShowcase").style.transform="translate(".concat(-25*e,"vw)")};return Object(n.useEffect)((function(){fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&limit=15").then((function(e){return e.json()})).then((function(e){w(e.data.movies),s(!1)}))}),[]),Object(r.jsxs)("div",{className:"body",children:[Object(r.jsx)("h1",{className:"sectionOneTitle",children:"Hall of fame"}),Object(r.jsx)("div",{className:"mainShowcase",children:i?null:S.map((function(e){return Object(r.jsx)("div",{className:"movieBox",children:Object(r.jsxs)(l.b,{to:"/movie/".concat(e.id),className:"movieLink",children:[Object(r.jsx)("img",{className:"movieImage",src:e.medium_cover_image,alt:"movieImage"}),Object(r.jsx)("h1",{className:"movieTitle",children:e.title})]},e.id)})}))}),Object(r.jsxs)("div",{className:"arrowMove",children:[Object(r.jsx)("button",{onClick:function(t){t.preventDefault(),window.innerWidth<426?e<1?e=14:e-=1:window.innerWidth<769?e<1?e=12:e-=1:e<1?e=11:e-=1,y(e)},className:"moveLeft",children:"\u25c0"}),Object(r.jsx)("button",{onClick:function(t){t.preventDefault(),window.innerWidth<426?e>13?e=0:e+=1:window.innerWidth<769?e>11?e=0:e+=1:e>10?e=0:e+=1,y(e)},className:"moveRight",children:"\u25b6"})]}),Object(r.jsx)("h1",{className:"sectionTwoTitle",children:"Movies by genres"}),Object(r.jsxs)("div",{className:"movieByGenres",children:[Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),fetch("https://yts.mx/api/v2/list_movies.json?genre=".concat(g,"&limit=50")).then((function(e){return e.json()})).then((function(e){O(e.data.movies)})),document.querySelector(".searchGenre").value="",d(!1)},children:Object(r.jsx)("input",{className:"searchGenre",onChange:function(e){e.preventDefault(),f(e.target.value)},type:"text",placeholder:"write genre"})}),m?Object(r.jsx)("div",{className:"genresEmpty",children:Object(r.jsx)("p",{children:"We will show lots of movies by genres :)"})}):Object(r.jsx)("div",{className:"genreContainer",children:h.map((function(e){return Object(r.jsx)("div",{className:"movieGenreBox",children:Object(r.jsxs)(l.b,{to:"/movie/".concat(e.id),className:"movieLink",children:[Object(r.jsx)("img",{className:"movieGenreImage",src:e.medium_cover_image,alt:"movieImage"}),Object(r.jsx)("h1",{className:"movieGenreTitle",children:e.title})]},e.id)})}))})]})]})},m=c(2);c(16);var d=function(){var e=Object(m.h)().id,t=Object(n.useState)(!0),c=Object(o.a)(t,2),i=c[0],s=c[1],a=Object(n.useState)(),j=Object(o.a)(a,2),d=j[0],b=j[1],u=Object(n.useState)(),h=Object(o.a)(u,2),O=h[0],v=h[1];return Object(n.useEffect)((function(){fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e)).then((function(e){return e.json()})).then((function(t){b(t.data.movie),fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=".concat(e)).then((function(e){return e.json()})).then((function(e){v(e.data.movies),s(!1)}))}))}),[]),Object(r.jsx)("div",{className:"detail",children:i?Object(r.jsx)("h1",{className:"loading",children:"Loading..."}):Object(r.jsxs)("div",{className:"movie",children:[Object(r.jsxs)("div",{className:"movieInfo",children:[Object(r.jsx)("img",{src:d.large_cover_image,alt:""}),Object(r.jsxs)("div",{className:"movieSummary",children:[Object(r.jsx)("h1",{className:"movieTitle",children:d.title}),Object(r.jsxs)("h3",{className:"movieYear",children:["Year: ",d.year]}),Object(r.jsxs)("h3",{className:"movieRuntime",children:["Runtime: ",d.runtime]}),Object(r.jsxs)("ul",{className:"movieGenre",children:["Genre:",d.genres.map((function(e){return Object(r.jsx)("li",{children:e})}))]})]})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"movieContainer",children:[Object(r.jsx)("h1",{className:"suggestTitle",children:"Suggested movies"}),Object(r.jsx)("div",{className:"movieSuggest",children:O.map((function(e){return Object(r.jsx)("div",{className:"movieSuggestdata",children:Object(r.jsxs)(l.b,{to:"/ic/".concat(e.id),className:"movieSuggestLink",children:[Object(r.jsx)("img",{src:e.medium_cover_image,alt:"suggest movie"}),Object(r.jsx)("h1",{className:"suggestMovieTitle",children:e.title})]},e.id)})}))})]})]})})};var b=function(){var e=Object(m.h)().id;return Object(r.jsx)("div",{children:0===e?Object(r.jsx)(m.a,{to:"/"}):Object(r.jsx)(m.a,{to:"/movie/".concat(e)})})},u=c(8);c(17);var h=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(),a=Object(o.a)(s,2),l=a[0],j=a[1],m="275954372154-2ml6calnsl3ie8u5e1am27jtlc9q5r3j.apps.googleusercontent.com",d=function(){i(!c)};return Object(r.jsx)("div",{className:"logContainer",children:c?Object(r.jsx)("button",{onClick:d,className:"loginOut",children:Object(r.jsx)(u.GoogleLogin,{clientId:m,buttonText:"Sign in with Google",onSuccess:function(e){console.log("[Login Success] currentUser",e.profileObj),j(e.profileObj.givenName)},onFailure:function(e){console.log("[Login failed] res:",e)},cookiePolicy:"single_host_origin",isSignedIn:!0})}):Object(r.jsxs)("div",{children:[Object(r.jsxs)("h2",{children:["Hello ",l,"!"]}),Object(r.jsx)("button",{onClick:d,className:"loginOut",children:Object(r.jsx)(u.GoogleLogout,{clientId:m,buttonText:"Logout",onLogoutSuccess:function(){alert("Logout made successfully")}})})]})})};c(18);function O(){return Object(r.jsxs)(l.a,{children:[Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)("h1",{children:Object(r.jsx)(l.b,{to:"/",className:"homeTitle",children:"Nexflex"})}),Object(r.jsx)("h1",{children:Object(r.jsx)(l.b,{to:"/sign",className:"signTitle",children:"Sign in"})})]}),Object(r.jsx)("div",{className:"info",children:Object(r.jsxs)(m.d,{children:[Object(r.jsx)(m.b,{exact:!0,path:"/",element:Object(r.jsx)(j,{})}),Object(r.jsx)(m.b,{path:"/movie/:id",element:Object(r.jsx)(d,{})}),Object(r.jsx)(m.b,{path:"/ic/:id",element:Object(r.jsx)(b,{})}),Object(r.jsx)(m.b,{path:"/sign",element:Object(r.jsx)(h,{})})]})})]})}a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f9e078bd.chunk.js.map