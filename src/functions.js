export class DoctorQuery {
  getDoctors() {
     return new Promise(function(resolve, reject) {
       let request = new XMLHttpRequest();
       let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&skip=2&limit=100&user_key=${process.env.API_KEY}`;
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
   // byAilment(input) {
   //    return new Promise(function(resolve, reject) {
   //      let userInput = input;
   //      let request = new XMLHttpRequest();
   //      let url = `https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=${userInput}&location=or-portland&skip=2&limit=100&user_key=${process.env.API_KEY}`;
   //      request.onload = function() {
   //        if (this.status === 200) {
   //          resolve(request.response);
   //        } else {
   //          reject(Error(request.statusText));
   //        }
   //      }
   //      request.open("GET", url, true);
   //      request.send();
   //    });
   //  }

    byConditionQuery(input) {
       return new Promise(function(resolve, reject) {
         let userInput = input;
         let request = new XMLHttpRequest();
         let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${userInput}&location=or-portland&skip=2&limit=100&user_key=${process.env.API_KEY}`;
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
         let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${userInput}?&location=or-portland&skip=2&limit=100&user_key=${process.env.API_KEY}`;
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
