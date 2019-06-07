import { DoctorQuery } from "./functions.js";
import $ from 'jquery';

$(document).ready(function() {

  $('#doctorList').click(function() {
    let doctorQuery = new DoctorQuery();
    let promise = doctorQuery.getDoctors();
    promise.then(function(response) {
      let body = JSON.parse(response);
        (body.data).forEach(doctor => {
          $('.showDoctors').append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name}</li>`);
        })
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

  // $('#byAilmentShow').click(function() {
  //   let input = $('#ailment').val();
  //   $('#ailment').val("");
  //   let doctorQuery = new DoctorQuery();
  //   let promise = doctorQuery.byAilment(input);
  //   promise.then(function(response) {
  //     let body = JSON.parse(response);
  //     console.log("body", body);
  //     console.log("body data" , body.data);
  //     if((body.data).length > 0) {
  //       $('#headAilment').html(`<h4>Here are some doctors that specialize in ${input}</h4>`);
  //       let data = body.data;
  //       console.log("data", data);
  //       for (let i=0; i < data.length; i++){
  //         $('.showDoctorsAilment').append(`<li>${data[i].profile.first_name} ${data[i].profile.last_name}<ul><li>${data[i].practices[0].visit_address.street} ${data[i].practices[0].visit_address.city} ${data[i].practices[0].visit_address.state}</li> <li>${data[i].practices[0].phones[0].number}</li> <li>Accepts New Patients? ${data[i].practices[0].accepts_new_patients}</li></li>`);
  //       }
  //     } else {
  //       $('#headAilment').html(`<h4>Sorry, there are no doctors that specialize in ${input}</h4>`);
  //     }
  //   }, function(error) {
  //     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  //   });
  // });

  $('#byConditionQueryShow').click(function() {
    let input = $('#condition').val();
    $('#condition').val("");
    let doctorQuery = new DoctorQuery();
    let promise = doctorQuery.byConditionQuery(input);
    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);

      let data = body.data;
      if (data.length > 0) {
        $('#headConditionQuery').html(`<h4>Here are some doctors that can help with ${input}</h4>`);
        for (let i=0; i < data.length; i++){
          $('.showDoctorsConditionQuery').append(`<li>${data[i].profile.first_name} ${data[i].profile.last_name}<ul><li>${data[i].practices[0].visit_address.street} ${data[i].practices[0].visit_address.city} ${data[i].practices[0].visit_address.state}</li> <li>${data[i].practices[0].phones[0].number}</li> <li>Accepts New Patients? ${data[i].practices[0].accepts_new_patients}</li></li>`);
        }
      } else {
          $('#headConditionQuery').html(`<h4>Sorry, there are no doctors that can help with ${input}</h4>`);
      }

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

      if ((body.data).length > 0){
        $('#headByName').html(`<h4>Here are some doctors with a name similar to "${input}"</h4>`);
        (body.data).forEach(doctor => {
          $('.showDoctorsName').append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name}</li>`);
        })
      } else {
        $('#headByName').html(`<h4>Sorry, there are no doctors with a name similar to "${input}"</h4>`);
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
