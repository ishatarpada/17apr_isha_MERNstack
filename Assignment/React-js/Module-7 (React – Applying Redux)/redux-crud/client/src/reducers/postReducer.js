const initialState = {
  items: [],
  loading: false,
  error: null
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_POSTS_SUCCESS':
      return { ...state, loading: false, items: action.payload };
    case 'FETCH_POSTS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_POST':
      return { ...state, items: [...state.items, action.payload] };
    case 'DELETE_POST':
      return { ...state, items: state.items.filter(post => post.id !== action.payload) };
    case 'UPDATE_POST':
      return {
        ...state,
        items: state.items.map(post =>
          post.id === action.payload.id ? action.payload : post
        )
      };
    default:
      return state;
  }
};

export default postReducer;
