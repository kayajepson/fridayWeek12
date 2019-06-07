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
      $('#headAilment').html(`<h4>Here are some doctors that specialize in ${input}</h4>`);
      let data = body.data;
      for (let i=0; i < data.length; i++){
        $('.showDoctorsAilment').append(`<li>${data[i].profile.first_name} ${data[i].profile.last_name}<ul><li>${data[i].practices[-0].visit_address.city}</li></li>`);
      }
        // (body.data).forEach(doctor => {
        //   $('.showDoctorsAilment').append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name}</li>`);
        // })
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

  $('#byNameShow').click(function() {
    let input = $('#nameSearch').val();
    $('#nameSearch').val("");
    let doctorQuery = new DoctorQuery();
    let promise = doctorQuery.byName(input);
    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      $('#headByName').html(`<h4>Here are some doctors with a name similar to "${input}"</h4>`);
        (body.data).forEach(doctor => {
          $('.showDoctorsName').append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name}</li>`);
        })
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
