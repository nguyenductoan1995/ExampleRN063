import * as constants from './constants';

export const setStackName = stackName => ({
  type: constants.SET_STACK_NAME,
  stackName,
});
