import { DoctorQuery } from "./functions.js";
import $ from 'jquery';

$(document).ready(function() {

  $('#doctorList').click(function() {
    let doctorQuery = new DoctorQuery();  // create instance of DoctorQuery class
    let promise = doctorQuery.getDoctors();  // call the instance method
    promise.then(function(response) {
      let body = JSON.parse(response);
        (body.data).forEach(doctor => {
          $('.showDoctors').append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name}</li>`);
        })
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

  $('#byAilmentShow').click(function() {
    let input = $('#ailment').val();
    $('#ailment').val("");
    let doctorQuery = new DoctorQuery();  // create instance of DoctorQuery class
    let promise = doctorQuery.byAilment(input);  // call the instance method
    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
        (body.data).forEach(doctor => {
          $('.showDoctorsAilment').append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name} ${doctor.profile.specialty_uid}</li>`);
        })
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
