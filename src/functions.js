export class DoctorQuery {

  queryToApi(input){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = input;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  byConditionQuery(input) {
    let userInput = input;
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${userInput}&location=or-portland&skip=2&limit=100&user_key=${process.env.apiKey}`;
    return this.queryToApi(url);
  }


  byCity(input) {
    let userInput = input.split(" ");
    let city = userInput[0];
    let state = userInput[1];
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=${state}-${city}&skip=2&limit=100&user_key=${process.env.apiKey}`;
    return this.queryToApi(url);
  }

  allSpecialties() {
    let url = `https://api.betterdoctor.com/2016-03-01/specialties?user_key=${process.env.apiKey}`;
    return this.queryToApi(url);
  }


  byName(input) {
    let userInput = input;
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${userInput}?&location=or-portland&skip=2&limit=100&user_key=${process.env.apiKey}`;
    return this.queryToApi(url);
  }

  bySpecialty(input) {
      let userInput = input;
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=${userInput}&location=or-portland&skip=2&limit=100&user_key=${process.env.apiKey}`;
      return this.queryToApi(url);
  }

}
