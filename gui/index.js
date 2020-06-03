window.addEventListener("DOMContentLoaded", ready);

function ready() {
  const searchBtn = document.getElementById("btnS");
  let query = document.getElementById("q");
  searchBtn.onclick = function () {
    searchBtnClicked(query.value);
  };

  function search(message) {
    //Perform search
  }

  function searchBtnClicked() {
    document.location.href = "result.html";
    console.log(query);
  }
}
