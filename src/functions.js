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

}
