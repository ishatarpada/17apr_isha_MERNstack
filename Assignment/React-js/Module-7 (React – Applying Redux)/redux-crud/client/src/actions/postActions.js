import axios from 'axios';

const API_URL = 'http://localhost:5000/posts';

// Action creators
const fetchPostsRequest = () => ({ type: 'FETCH_POSTS_REQUEST' });
const fetchPostsSuccess = posts => ({ type: 'FETCH_POSTS_SUCCESS', payload: posts });
const fetchPostsFailure = error => ({ type: 'FETCH_POSTS_FAILURE', payload: error });
const addPost = post => ({ type: 'ADD_POST', payload: post });
const deletePost = id => ({ type: 'DELETE_POST', payload: id });
const updatePost = post => ({ type: 'UPDATE_POST', payload: post });

// Thunk actions
export const fetchPosts = () => async dispatch => {
  dispatch(fetchPostsRequest());
  try {
    const response = await axios.get(API_URL);
    dispatch(fetchPostsSuccess(response.data));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};

export const createPost = post => async dispatch => {
  try {
    const response = await axios.post(API_URL, post);
    dispatch(addPost(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const removePost = id => async dispatch => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch(deletePost(id));
  } catch (error) {
    console.error(error);
  }
};

export const editPost = post => async dispatch => {
  try {
    const response = await axios.put(`${API_URL}/${post.id}`, post);
    dispatch(updatePost(response.data));
  } catch (error) {
    console.error(error);
  }
};
