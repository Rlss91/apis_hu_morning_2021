// function sendXHRGET(url) {
//   //create ajax request
//   const xhttp = new XMLHttpRequest();
//   //capture ready state
//   xhttp.onreadystatechange = function () {
//     // console.log("this.readyState", this.readyState);
//     // console.log("this.status", this.status);
//     // console.log("this.responseText", this.responseText);
//     //when the response was successful then it will display the response in the console
//     if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
//       console.log(this.responseText);
//     }
//   };
//   xhttp.onerror = function (errorEvent) {
//     console.log("ERRO", errorEvent);
//   };
//   //set the method and the url of the ajax request
//   xhttp.open("GET", url, true);
//   //send the actual request
//   xhttp.send();
// }

// //this function ask for url and callback function
// function sendXHRGETCallBack(url, cb) {
//   //create ajax request
//   const xhttp = new XMLHttpRequest();
//   //capture ready state
//   xhttp.onreadystatechange = function () {
//     // console.log("this.readyState", this.readyState);
//     // console.log("this.status", this.status);
//     // console.log("this.responseText", this.responseText);
//     //when the response was successful then it will display the response in the console
//     if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
//       // console.log(this.responseText);
//       //call for the callback function
//       cb(this.responseText);
//     }
//   };
//   xhttp.onerror = function (errorEvent) {
//     console.log("ERRO", errorEvent);
//   };
//   //set the method and the url of the ajax request
//   xhttp.open("GET", url, true);
//   //send the actual request
//   xhttp.send();
// }

//this function ask for url and callback function
function sendXHRCallBack(url, cb, method = "GET", data = undefined) {
  //create ajax request
  const xhttp = new XMLHttpRequest();
  //capture ready state
  xhttp.onreadystatechange = function () {
    //when the response was successful then it will display the response in the console
    if (
      this.readyState == XMLHttpRequest.DONE &&
      (this.status == 200 || this.status == 201)
    ) {
      //call for the callback function
      cb(this.responseText);
    }
  };
  xhttp.onerror = function (errorEvent) {
    console.log("ERRO", errorEvent);
  };
  //set the method and the url of the ajax request
  xhttp.open(method, url, true);

  //set headers
  xhttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");

  //send the actual request
  if (data) {
    xhttp.send(JSON.stringify(data));
  } else {
    xhttp.send();
  }
}
