import '../scss/app.scss';
import "./revealjs/head.min";
import * as Reveal from "./revealjs/reveal";

//import all images
var req = require.context("../images", true, /\.(png|svg|jpg|gif|jpeg|ico)$/);
req.keys().forEach(function(key){
    req(key);
});

//JS
Reveal.initialize({
    history: true
});