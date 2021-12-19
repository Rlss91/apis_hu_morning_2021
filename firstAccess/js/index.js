window.addEventListener("load", () => {
  sendXHRCallBack(
    "https://jsonplaceholder.typicode.com/posts",
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
