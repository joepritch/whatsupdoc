import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'jquery';
import 'jquery/src/jquery.js';
import './sass/styles.scss';

$(document).ready(function(){
  $('.submit').click(function(){
    const input = $('.search').val();
    console.log(input);
  });
});
