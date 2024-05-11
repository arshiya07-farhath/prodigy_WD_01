document.getElementById('home-link').addEventListener('click', function (event) {
    event.preventDefault();
    history.pushState(null, '', event.target.href);
    document.getElementById('content').innerHTML = 'Home - Welcome to our SPA';
});

document.getElementById('about-link').addEventListener('click', function (event) {
    event.preventDefault();
    history.pushState(null, '', event.target.href);
    document.getElementById('content').innerHTML = 'About - Here is some information about us';
});