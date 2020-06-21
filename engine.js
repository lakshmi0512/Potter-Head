var routes = ["spells", "characters"];
const { KEY, BASE_URL } = require("./config");

class MakeRequests {
  constructor(key, url, type) {
    this.key = key;
    this.url = url;
    this.type = type;
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    this.requests = new XMLHttpRequest();
    this.requests.responseType = "json";
  }

  processRequest() {
    if (this.requests.readyState === 4 && this.requests.status === 200) {
      var response = JSON.parse(this.requests.responseText);
      console.log("Complete!");
      console.log(typeof this.requests.responseText);
      //console.log(response)
    } else if (this.requests.readyState === 3) {
      console.log("Loading... ");
    } else {
      console.log("Failed:: " + this.requests.status);
    }
  }

  makeRequest(url, route, key) {
    this.requests.open("GET", url + route + "?key=" + key, this.requests);
    this.requests.send();
    this.processRequest()
  }
}

console.log(KEY);
console.log(BASE_URL);

const query = new MakeRequests(KEY, BASE_URL, "GET");
query.makeRequest(BASE_URL, routes[0], KEY);
