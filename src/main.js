import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'jquery';
import 'jquery/src/jquery.js';
import './sass/styles.scss';
// import { DocSearch } from './logic.js'

$(document).ready(function(){
  const key = process.env.exports.apiKey;

  $('.submit').click(function(){
    const query = $('.search').val();
    console.log(query);

    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=45.5202%2C-122.6742%2C10&fields=practices(name%2Caccepts_new_patients%2Cphones%2Cvisit_address(city%2Cstate%2Cstreet%2Czip))&skip=0&limit=10&user_key=${key}`;
    console.log(url);

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response);
        console.log(response.data[0].practices[0].name);
        console.log(response.data[0].practices[0].accepts_new_patients);
        console.log(response.data[0].practices[0].visit_address.city);
        console.log(response.data[0].practices[0].visit_address.state);
        console.log(response.data[0].practices[0].visit_address.street);
        console.log(response.data[0].practices[0].visit_address.zip);
        console.log(response.data[0].practices[0].phones[0].type);
        console.log(response.data[0].practices[0].phones[0].number);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
      const iteration = 0;
      response.data[].forEach()
      $('.name').text(`${response.data[0].practices[0].name}`);
      $('.patients').text(`${response.data[0].practices[0].accepts_new_patients}`);
    }
  });
});
