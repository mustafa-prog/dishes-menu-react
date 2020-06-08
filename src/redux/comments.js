import * as ActionTypes from './ActionTypes';

const initialState = {
  errMess: null,
  comments: [],
};

export const Comments = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        comments: action.payload,
      };
    case ActionTypes.COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        comments: [],
      };
    case ActionTypes.ADD_COMMENT:
      let comment = action.payload;
      return { ...state, comments: [...state.comments, comment] };
    default:
      return state;
  }
};
