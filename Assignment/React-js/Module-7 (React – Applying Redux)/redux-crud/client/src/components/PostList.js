import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, removePost } from '../actions/postActions';
import { Link } from 'react-router-dom';

const PostList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <Link
        to="/create"
        className="inline-block mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Create New Post
      </Link>
      <ul className="space-y-4">
        {items.map(post => (
          <li key={post.id} className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="mt-2">{post.body}</p>
            <div className="mt-4 flex space-x-2">
              <Link
                to={`/edit/${post.id}`}
                className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
              >
                Edit
              </Link>
              <button
                onClick={() => dispatch(removePost(post.id))}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
