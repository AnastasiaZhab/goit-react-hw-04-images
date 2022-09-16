function fetchImage({ imageName, page, perPage }) {
  return fetch(
    `https://pixabay.com/api/?q=${imageName}&page=${page}&key=24939535-87b6ece9ab011f11d00db958e&image_type=photo&orientation=horizontal&per_page=${perPage}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error("немає картинки на таку тему"));
  });
}

const api = {
  fetchImage,
};

export default api;
