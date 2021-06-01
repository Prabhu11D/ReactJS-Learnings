export const fetchPosts = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: 'FETCH_POSTS',
        payload: data,
      })
    )
    .catch((err) => console.log(err));
};

export const postBlog = (data) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: 'NEW_POST',
        payload: data,
      })
    )
    .catch((err) => console.log(err));
};
