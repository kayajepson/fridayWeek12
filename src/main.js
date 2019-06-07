import { DoctorQuery } from "./functions.js";
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  $('.showDoctorsConditionQuery').empty();
  $('#byConditionQueryShow').click(function() {
    $('#toggleCondition').show();
    let input = $('#condition').val();
    $('#condition').val("");
    let doctorQuery = new DoctorQuery();
    let promise = doctorQuery.byConditionQuery(input);
    promise.then(function(response) {
      let body = JSON.parse(response);
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

  $('#toggleCondition').on('click', function() {
    $('.showDoctorsConditionQuery').toggle();
    $('#headConditionQuery').toggle();
  });

  $('#byNameShow').click(function() {
    $('#toggleDoctors').show();
    $('.showDoctorsName').empty();
    let input = $('#nameSearch').val();
    $('#nameSearch').val("");
    let doctorQuery = new DoctorQuery();
    let promise = doctorQuery.byName(input);
    promise.then(function(response) {
      let body = JSON.parse(response);
      let data = body.data;
      if ((data).length > 0){
        $('.showDoctorsName').html(`<h4>Here are some doctors with a name similar to "${input}"</h4>`);
        for (let i=0; i < data.length; i++){
          $('.showDoctorsName').append(`<li>${data[i].profile.first_name} ${data[i].profile.last_name}<ul><li>${data[i].practices[0].visit_address.street} ${data[i].practices[0].visit_address.city} ${data[i].practices[0].visit_address.state}</li> <li>${data[i].practices[0].phones[0].number}</li> <li>Accepts New Patients? ${data[i].practices[0].accepts_new_patients}</li></li>`);
        }
      } else {
        $('#headByName').html(`<h4>Sorry, there are no doctors with a name similar to "${input}"</h4>`);
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

  $('#toggleDoctors').on('click', function() {
    $('.showDoctorsName').toggle();
  });

  $('#byCity').click(function() {
    $('.byCityShow').empty();
    $('#toggleCity').show();
    let input = $('#allDoc').val();
    $('#allDoc').val("");
    console.log(input);
    let doctorQuery = new DoctorQuery();
    let promise = doctorQuery.byCity(input);
    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);

      if ((body.data).length > 0){
        $('#headByCity').html(`<h4>Here are some doctors in "${input}"</h4>`);
        (body.data).forEach(doctor => {
          $('.byCityShow').append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name}</li>`);
        })
      } else {
        $('#headByName').html(`<h4>Sorry, there are no doctors in "${input}"</h4>`);
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

  $('#toggleCity').on('click', function() {
    $('.byCityShow').toggle();
    $('#headByCity').toggle();
  });


  $('.showDoctorsName').empty();
  let input = $('#allDoc').val();
  $('#allDoc').val("");
  let doctorQuery = new DoctorQuery();
  let promise = doctorQuery.allSpecialties();
  promise.then(function(response) {
    let body = JSON.parse(response);
    let data = body.data;
    console.log("here", data);
    console.log(data[0].name);
    let dropdown = $('#specialty-dropdown');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>Choose a Specialty</option>');
    dropdown.prop('selectedIndex', 0);
    for (let i=0; i < data.length; i++){
      dropdown.append($('<option></option>').attr('value', data[i].name).text(data[i].name))
    }
  });

  $('#bySpecialty').click(function() {
    $('.showDoctorsName').empty();
    let input = $('#specialty-dropdown').val().toLowerCase();
    $('#specialty-dropdown').val("");
    let splitInput = input.replace(" ", "%20");
    console.log("input", input);
    let doctorQuery = new DoctorQuery();
    let promise = doctorQuery.bySpecialty(splitInput);
    promise.then(function(response) {
      let body = JSON.parse(response);
      let data = body.data;
      console.log("data", data);
      if ((data).length > 0){
        $('#headSpecialtyQuery').html(`<h4>Here are some doctors that specialize in ${input}</h4>`);
        for (let i=0; i < data.length; i++){
          $('.showSpecialtyQuery').append(`<li>${data[i].profile.first_name} ${data[i].profile.last_name}<ul><li>${data[i].practices[0].visit_address.street} ${data[i].practices[0].visit_address.city} ${data[i].practices[0].visit_address.state}</li> <li>${data[i].practices[0].phones[0].number}</li> <li>Accepts New Patients? ${data[i].practices[0].accepts_new_patients}</li></li>`);
        }
      } else {
        $('#headSpecialty').html(`<h4>Sorry, there are no doctors that specialize in ${input}</h4>`);
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });




});
