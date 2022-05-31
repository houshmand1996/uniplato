import { User ,  AddUser, RemoveUser,MoveUser } from './user.types';


export const addUser = (user:User): AddUser => ({
    type: 'ADD_USER',
    payload: user,
});

export const removeUser = (id:number): RemoveUser => ({
    type: 'REMOVE_USER',
    payload: id,
});

export const moveUser = (user:User): MoveUser => ({
    type: 'MOVE_USER',
    payload: user,
});


