export class DocSearch {
  getList(query) {
    return new Promise(function(resolve, reject) {
      const key = process.env.exports.apiKey;
      const request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=45.5202%2C-122.6742%2C10&fields=practices(name%2Caccepts_new_patients%2Cphones%2Cvisit_address(city%2Cstate%2Cstreet%2Czip)website)&skip=0&limit=10&user_key=${key}`;
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
