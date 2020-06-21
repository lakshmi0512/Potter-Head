const { POTTERAPI_KEY, BASE_URL } = require("./config");
const axios = require("axios").default;
const readline = require("readline-sync");

const KEY = "?key=" + POTTERAPI_KEY;
var routes = ["sortingHat", "characters", "houses", "spells"];
console.log(POTTERAPI_KEY);
class API {
  getinput() {
    routes.forEach((element) => {
      console.log(routes.indexOf(element) + 1 + ": " + element);
    });

    var option = readline.questionInt("Enter option: ") - 1;
    console.log("You Choose: " + routes[option]);
    return routes[option];
  }

  getOutput(route) {
    if (route === "sortingHat") {
      axios
        .get(BASE_URL + route, { params: { key: POTTERAPI_KEY } })
        .then(function (response) {
          if (response.status === 200) {
            console.log(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (route === "characters") {
      console.log("This output is extremely large so avoid using it.");
    } else if (route === "houses") {
      console.log("This output is large so avoid using it.");
      axios
        .get(BASE_URL + route, { params: { key: POTTERAPI_KEY } })
        .then(function (response) {
          if (response.status === 200) {
            console.log(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (route === "spells") {
      axios
        .get(BASE_URL + route, { params: { key: POTTERAPI_KEY } })
        .then(function (response) {
          if (response.status === 200) {
            console.log(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
          console.log(response.url);
        });
    } else {
      console.log("Enter Valid choice!");
    }
  }
}

const api = new API();
var option = api.getinput();
api.getOutput(option);
