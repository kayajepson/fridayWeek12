# _Doctor Finder_

#### By _**Kaya Jepson**_

## Description

_A program that will allow a user to look up a doctor based on various search terms._


A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)


| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| The program should allow a user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query. | 01/01/1990 | 29 |
| The program should allow a user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query. | 29 | 120 |
| The program should return first name, last name, address, phone number, website and whether or not the doctor is accepting new patients if the query response includes any doctors |29 | 46 |
| If the API call results in an error, the program should return a notification that states what the error is. | 29 | 15 |
| If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. | 29 | 2 |

## Setup/Installation Requirements

* _Clone project from github_
* _view code in text editor if necessary_
* _any text inside quotations ("") should be performed inside your terminal._
* _install packages with "npm install"_
* _"npm run start"_

## Known Bugs

_None_

## Support and contact details

_No support offered_

## Technologies Used

_C#_

### License

Copyright <2019> <Kaya Jepson>
