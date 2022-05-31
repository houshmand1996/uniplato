import { RootState } from 'core';
import { User } from 'plugins';
import { createSelector } from 'reselect';


const selectUserState = (state: RootState) => state.userState;

console.log(selectUserState);

export const selectUsers = createSelector(
  [selectUserState],
  userState => userState.users,
);


export const newUserCreator = createSelector(
  [selectUserState],
  userState => createNewUser(userState.users),
);

const getNewUserId = (users:User[]):number => {
  if(!users.length) return 1;
  return users[users.length - 1]?.id + 1;
};



const createNewUser = (users:User[]):User => ({
  id: getNewUserId(users),
  position: {
    x: 0,
    y: 0,
  },
  height: 800,
  width: 250,
});


console.log({selectUsers});










