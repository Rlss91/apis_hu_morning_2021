window.addEventListener("load", () => {
  sendXHRCallBack(
    "https://jsonplaceholder.typicode.com/posts",
    function (res) {
      console.log("response from server using post request", res);
    },
    "POST",
    {
      title: "foo",
      body: "bar",
      userId: 1,
    }
  );
});

function handleBtnClick() {
  let num = document.getElementById("idtxt").value;
  //"https://jsonplaceholder.typicode.com/posts/1
  // sendXHRGET("https://jsonplaceholder.typicode.com/posts/" + num);
  // sendXHRGETCallBack(
  //   "https://jsonplaceholder.typicode.com/posts/" + num,
  //   function (res) {
  //     let resObj = JSON.parse(res);
  //     document.getElementById("postsDiv").innerHTML += `
  //   <div class="card" style="width: 18rem;">
  //     <div class="card-body">
  //       <h5 class="card-title">${resObj.title}</h5>
  //       <p class="card-text">${resObj.body}</p>
  //       <button type="button" class="btn btn-danger">Danger</button>
  //     </div>
  //   </div>
  //   `;
  //   }
  // );
  sendXHRCallBack(
    "https://jsonplaceholder.typicode.com/posts/" + num,
    function (res) {
      let resObj = JSON.parse(res);
      document.getElementById("postsDiv").innerHTML += `
    <div class="card" style="width: 18rem;" id="post_${resObj.id}">
      <div class="card-body">
        <h5 class="card-title">${resObj.title}</h5>
        <p class="card-text">${resObj.body}</p>
        <button type="button" class="btn btn-danger" onclick="handleDeleteBtnClick('post_${resObj.id}', '${resObj.id}')">Delete</button>
      </div>
    </div>
    `;
    }
  );
}

function handleDeleteBtnClick(elmid, serverid) {
  // console.log("id to be deleted", id);
  sendXHRCallBack(
    "https://jsonplaceholder.typicode.com/posts/" + serverid,
    function (res) {
      document.getElementById(elmid).remove();
    },
    "DELETE"
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

//this function ask for url and callback function
function sendXHRCallBack(url, cb, method = "GET", body = undefined) {
  //create ajax request
  const xhttp = new XMLHttpRequest();
  //capture ready state
  xhttp.onreadystatechange = function () {
    // console.log("this.readyState", this.readyState);
    // console.log("this.status", this.status);
    // console.log("this.responseText", this.responseText);
    //when the response was successful then it will display the response in the console
    if (
      this.readyState == XMLHttpRequest.DONE &&
      (this.status == 200 || this.status == 201)
    ) {
      // console.log(this.responseText);
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
  if (body) {
    xhttp.send(JSON.stringify(body));
  } else {
    xhttp.send();
  }
}
