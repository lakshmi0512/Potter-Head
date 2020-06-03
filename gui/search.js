window.addEventListener("DOMContentLoaded", ready);

function ready() {
  const searchBtn = document.getElementById("btnS");
  let query = document.getElementById("q");
  searchBtn.onclick = function () {
    searchBtnClicked(query.value);
  };

  function searchBtnClicked(query) {
    document.location.href = "result.html";
    console.log(query);
  }
}
