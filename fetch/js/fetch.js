const fetchAjax = (url) => {
  return fetch(url).then((response) => response.json());
};
