// const route = (event) => {
//     event = event || window.Event
//     event.preventDefault();
//     window.history.pushState({},"",event.target.href);

// };
//   const routes = {
//         404:"/pages/404.html",
//         "/":"/pages/index.html"
    


//   };


// const handleLocation = async()=>{
//    const path = window.location.pathname;
//    const route  = routes[path]||routes[404];
//    const html = await fetch(route).then((data)=>data.text());
//    document.getElementById("main-page").innerHtml = html;


// };



// window.onpopstate = handleLocation;
// window.route = route;

// handleLocation();