import { Dispatch } from 'redux';

const FETCH_POST = 'FETCH_POST';

export const fetchPost = () => {
  return async (dispatch: Dispatch<FetchPost>) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    dispatch({
      type: FETCH_POST,
      payload: data,
    });
  };
};

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface FetchPost {
  type: 'FETCH_POST';
  payload: Post[];
}

interface State {
  posts: Post[];
}

const initialState: State = {
  posts: [],
};

const reducer = (state: State = initialState, action: FetchPost) => {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
