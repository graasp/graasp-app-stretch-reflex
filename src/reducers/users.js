import { GET_USERS_FAILED, GET_USERS_SUCCEEDED } from '../types';

const INITIAL_STATE = {
  content: [],
};

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case GET_USERS_SUCCEEDED:
      return {
        // we do not want to mutate the state object, so we destructure it here
        ...state,
        content: payload,
      };

    case GET_USERS_FAILED:
      // todo: show error to user
      return state;

    default:
      return state;
  }
};
