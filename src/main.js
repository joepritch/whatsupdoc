import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'jquery';
import 'jquery/src/jquery.js';
import './sass/styles.scss';
import { DocSearch } from './logic.js'

$(document).ready(function(){
  const key = process.env.exports.apiKey;

  $('.submit').click(function(){
    const query = $('.search').val();
    const instance = new DocSearch();
    const promise = instance.getList(query);
    promise.then(function(response) {
      const body = JSON.parse(response);
      if (body.data.length === 0) {
        $('.result').text(`No results for "${query}"`)
      } else {
        console.log(body.data[0].practices);
        $('.name').text(`${body.data[0].practices[0].name}`);
        $('.patients').text(`${body.data[0].practices[0].accepts_new_patients}`);
        $('.state').text(`${body.data[0].practices[0].visit_address.state}`);
        $('.city').text(`${body.data[0].practices[0].visit_address.city}`);
        $('.street').text(`${body.data[0].practices[0].visit_address.street}`);
        $('.zip').text(`${body.data[0].practices[0].visit_address.zip}`);
        $('.phone').text(`${body.data[0].practices[0].phones[0].number}`);
        $('.website').text(`${body.data[0].practices[0].website}`)
      }
      }, function(error) {
        $('.result').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
