import '../css/common.css';
import '../css/mso.css';
import '../css/yahoo.css';

//import all images
var req = require.context("../images", true, /\.(png|svg|jpg|gif|jpeg|ico)$/);
req.keys().forEach(function(key){
    req(key);
});