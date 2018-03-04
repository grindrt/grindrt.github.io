export const BASE_URL = 'localhost:27017';

export const fetchPostsAjax = () => {
  return fetch(`${BASE_URL}/blogs`)
    .then(res => res.json());
};

export const createPostAjax = post => {
  return fetch(`${BASE_URL}/blogs`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json());
};

export const removePostAjax = postId => {
  return fetch(`${BASE_URL}/blogs/${postId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
};
