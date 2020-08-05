import * as type from './constants';

const initState = {
  stackName: 'HomeStack',
};

export default (state = initState, action) => {
  switch (action.type) {
    case type.SET_STACK_NAME:
      return {
        ...state,
        stackName: action.stackName,
      };
    default:
      return state;
  }
};
