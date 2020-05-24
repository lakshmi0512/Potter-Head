
routes = ["spells", "characters"];

class MakeRequests{
    constructor(key, url, type) {
        this.key = key;
        this.url = url;
        this.type = type;
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        this.requests = new XMLHttpRequest();
        this.requests.responseType = 'json';
    }
 
    processRequest() {
        if(requests.readyState == 4 && requests.status == 200){
            var response = JSON.parse(requests.responseText);
            console.log("Complete!")
            console.log(typeof requests.responseText)
            //console.log(response)
        }
        else if(requests.readyState == 3){
            console.log("Loading... ")
        }
        else{
           // console.log(requests.responseText);
            console.log("Failed!"+ requests.status);
        }
    }

    makeRequest(url, route ,key){
        requests.open('GET', url+route+'?key='+key, requests); 
        requests.send();
    }

 
}

/*
const url = require('./config').BASE_URL;
this.makeRequest(url, route, key);
requests.addEventListener("readystatechange", this.processRequest, false);
*/