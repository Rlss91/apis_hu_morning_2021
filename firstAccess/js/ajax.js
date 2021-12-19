window.addEventListener("load", () => {});

function handleBtnClick() {
  let num = document.getElementById("idtxt").value;
  //"https://jsonplaceholder.typicode.com/posts/1
  // sendXHRGET("https://jsonplaceholder.typicode.com/posts/" + num);
  sendXHRGETCallBack(
    "https://jsonplaceholder.typicode.com/posts/" + num,
    function (res) {
      resObj = JSON.parse(res);
      document.getElementById("postsDiv").innerHTML += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${resObj.title}</h5>
        <p class="card-text">${resObj.body}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
    `;
    }
  );
}

function sendXHRGET(url) {
  //create ajax request
  const xhttp = new XMLHttpRequest();
  //capture ready state
  xhttp.onreadystatechange = function () {
    // console.log("this.readyState", this.readyState);
    // console.log("this.status", this.status);
    // console.log("this.responseText", this.responseText);
    //when the response was successful then it will display the response in the console
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      console.log(this.responseText);
    }
  };
  xhttp.onerror = function (errorEvent) {
    console.log("ERRO", errorEvent);
  };
  //set the method and the url of the ajax request
  xhttp.open("GET", url, true);
  //send the actual request
  xhttp.send();
}

//this function ask for url and callback function
function sendXHRGETCallBack(url, cb) {
  //create ajax request
  const xhttp = new XMLHttpRequest();
  //capture ready state
  xhttp.onreadystatechange = function () {
    // console.log("this.readyState", this.readyState);
    // console.log("this.status", this.status);
    // console.log("this.responseText", this.responseText);
    //when the response was successful then it will display the response in the console
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      // console.log(this.responseText);
      //call for the callback function
      cb(this.responseText);
    }
  };
  xhttp.onerror = function (errorEvent) {
    console.log("ERRO", errorEvent);
  };
  //set the method and the url of the ajax request
  xhttp.open("GET", url, true);
  //send the actual request
  xhttp.send();
}
