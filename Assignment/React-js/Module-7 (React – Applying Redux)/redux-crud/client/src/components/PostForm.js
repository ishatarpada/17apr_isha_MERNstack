import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, editPost } from '../actions/postActions';
import { useNavigate, useParams } from 'react-router-dom';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const posts = useSelector(state => state.posts.items);
  const post = posts.find(post => post.id === parseInt(id));

  useEffect(() => {
    if (id && post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [id, post]);

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      dispatch(editPost({ id: parseInt(id), title, body }));
    } else {
      dispatch(createPost({ title, body }));
    }
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">{id ? 'Edit Post' : 'Create Post'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          placeholder="Body"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {id ? 'Update Post' : 'Create Post'}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
