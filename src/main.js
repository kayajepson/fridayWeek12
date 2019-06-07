import { DoctorQuery } from "./functions.js";
import $ from 'jquery';

$(document).ready(function() {
  $('#doctorList').click(function() {
    let doctorQuery = new DoctorQuery();  // create instance of DoctorQuery class
    let promise = doctorQuery.getDoctors();  // call the instance method

    promise.then(function(response) {
      body = JSON.parse(response);
      $('.showDoctors').text(`The doctors that match your search are ${body.main.doctors}%`);

      $('.showDoctors').append(`<li>${body.main.doctors}</li>`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
