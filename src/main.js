import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'jquery';
import 'jquery/src/jquery.js';
import './sass/styles.scss';
import { DocSearch } from './logic.js'

$(document).ready(function(){
  const key = process.env.exports.apiKey;
  $('.nameSearch').click(function(){
    const name = $('.name').val();
    const nameSearchURL = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.5202%2C-122.6742%2C10&fields=practices(name%2Caccepts_new_patients%2Cphones%2Cvisit_address(city%2Cstate%2Cstreet%2Czip)website)&skip=0&limit=10&user_key=${key}`;
    displayResults(nameSearchURL, name);
  });
  $('.keywordSearch').click(function(){
    const keyword = $('.keyword').val();
    const keywordSearchURL = `https://api.betterdoctor.com/2016-03-01/doctors?query=${keyword}&location=45.5202%2C-122.6742%2C10&fields=practices(name%2Caccepts_new_patients%2Cphones%2Cvisit_address(city%2Cstate%2Cstreet%2Czip)website)&skip=0&limit=10&user_key=${key}`;
    displayResults(keywordSearchURL, keyword);
  });
  function displayResults(url, query){
    const instance = new DocSearch();
    const promise = instance.getList(url);
    promise.then(function(response) {
      $('.result').text("");
      const body = JSON.parse(response);
      if (body.data.length === 0) {
        $('.result').text(`No results for "${query}"`)
      } else {
        body.data.forEach(list);
        function list(input){
          $('.result').append(`${input.practices[0].name}` + '<br>');
          if (input.practices[0].accepts_new_patients == true) {
            $('.result').append('Currently accepting patients' + '<br>');
          } else {
            $('.result').append('Not currently accepting patients' + '<br>');
          }
          $('.result').append(`${input.practices[0].visit_address.state}` + '<br>');
          $('.result').append(`${input.practices[0].visit_address.city}` + '<br>');
          $('.result').append(`${input.practices[0].visit_address.street}` + '<br>');
          $('.result').append(`${input.practices[0].visit_address.zip}` + '<br>');
          $('.result').append(`${input.practices[0].phones[0].number}` + '<br>');
          if (input.practices[0].website == undefined) {
            $('.result').append('No website found' + '<br>');
          } else {
            $('.result').append(`${input.practices[0].website}` + '<br>');
          }
          $('.result').append('<hr>');
        }
      }
    }, function(error) {
      $('.result').text(`There was an error processing your request: ${error.message}`);
    });
  }
});
