const { POTTERAPI_KEY, BASE_URL } = require("./config");
const axios = require("axios").default;
const readline = require("readline-sync");

const KEY = "?key=" + POTTERAPI_KEY;
var routes = ["spells", "characters", "sortingHat"];

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
    axios
      .get(BASE_URL + route, { params: { key: POTTERAPI_KEY } })
      .then(function (response) {
        if (response.status == 200) {
          console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log("Error::" + error);
      });
  }
}

api = new API();
var option = api.getinput();
api.getOutput(option);
