import Router from './router.js';
import Route from './route.js';

let router =  new Router([
    new Route('main', 'main.html', true),
    new Route('ivanpage', 'ivanpage.html'),
    new Route('allapage', 'allapage.html')
]);