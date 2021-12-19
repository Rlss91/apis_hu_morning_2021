window.addEventListener("load", async () => {
  try {
    let data = await fetchAjax("https://jsonplaceholder.typicode.com/posts/1");
    console.log(data);
  } catch (ex) {
    console.error(ex);
  }
});

const fetchAjax = (url) => {
  return fetch(url).then((response) => response.json());
};
