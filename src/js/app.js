import '../scss/app.scss';
import $ from 'jquery';
import 'bootstrap';

//import all images
var req = require.context("../images", true, /\.(png|svg|jpg|gif|jpeg|ico)$/);
req.keys().forEach(function(key){
    req(key);
});

$(function () {
    $('[data-toggle="popover"]').popover()
});