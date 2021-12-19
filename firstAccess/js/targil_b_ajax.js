/*

    1)  get 5 random posts from the fake api
    and display then as list.

*/
window.addEventListener("load", () => {
  let arrOfPosts = [];
  sendXHRCallBack(
    "https://jsonplaceholder.typicode.com/posts/1",
    function (data) {
      data = JSON.parse(data);
      arrOfPosts = [...arrOfPosts, data];
      sendXHRCallBack(
        "https://jsonplaceholder.typicode.com/posts/2",
        function (data1) {
          data1 = JSON.parse(data1);
          arrOfPosts = [...arrOfPosts, data1];
          sendXHRCallBack(
            "https://jsonplaceholder.typicode.com/posts/3",
            function (data2) {
              data2 = JSON.parse(data2);
              arrOfPosts = [...arrOfPosts, data2];
              sendXHRCallBack(
                "https://jsonplaceholder.typicode.com/posts/4",
                function (data3) {
                  data3 = JSON.parse(data3);
                  arrOfPosts = [...arrOfPosts, data3];
                  sendXHRCallBack(
                    "https://jsonplaceholder.typicode.com/posts/5",
                    function (data4) {
                      data4 = JSON.parse(data4);
                      arrOfPosts = [...arrOfPosts, data4];
                      let lstDiv = document.getElementById("listDiv");
                      for (let post of arrOfPosts) {
                        lstDiv.innerHTML += "<p>" + post.title + "</p>";
                      }
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
});
