import {
  GET_CONTEXT_FAILED,
  GET_CONTEXT_SUCCEEDED,
} from '../types';
import {
  DEFAULT_API_HOST,
  DEFAULT_LANG,
  DEFAULT_MODE,
} from '../config/settings';

const INITIAL_STATE = {
  apiHost: DEFAULT_API_HOST,
  // the properties below come from the context via the query string
  lang: DEFAULT_LANG,
  mode: DEFAULT_MODE,
  appInstanceId: null,
  spaceId: null,
  subSpaceId: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_CONTEXT_SUCCEEDED:
      return {
        ...state,
        ...payload,
      };

    case GET_CONTEXT_FAILED:
      // todo: show error to user
      return state;

    default:
      return state;
  }
};
