export class DoctorQuery {
    byConditionQuery(input) {
       return new Promise(function(resolve, reject) {
         let userInput = input;
         let request = new XMLHttpRequest();
         let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${userInput}&location=or-portland&skip=2&limit=100&user_key=${process.env.apiKey}`;
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

     byCity(input) {
        return new Promise(function(resolve, reject) {
          let userInput = input.split(" ");
          let city = userInput[0];
          let state = userInput[1];
          console.log(city);
          console.log(state);
          let request = new XMLHttpRequest();
          let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=${state}-${city}&skip=2&limit=100&user_key=${process.env.apiKey}`;
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

      allSpecialties() {
         return new Promise(function(resolve, reject) {
           let request = new XMLHttpRequest();
           let url = `https://api.betterdoctor.com/2016-03-01/specialties?user_key=${process.env.apiKey}`;
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


    byName(input) {
       return new Promise(function(resolve, reject) {
         let userInput = input;
         let request = new XMLHttpRequest();
         let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${userInput}?&location=or-portland&skip=2&limit=100&user_key=${process.env.apiKey}`;
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

     bySpecialty(input) {
        return new Promise(function(resolve, reject) {
          let userInput = input;
          console.log("UI", userInput);
          let request = new XMLHttpRequest();
          let url = `https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=${userInput}&location=or-portland&skip=2&limit=100&user_key=${process.env.apiKey}`;
          console.log("url", url);
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

}
