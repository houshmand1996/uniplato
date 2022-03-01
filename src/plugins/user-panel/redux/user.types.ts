import { AnyAction } from 'redux';

interface TotalAction<T, P = null>  extends AnyAction {
  type: T;
  payload?: P;
}

interface BoxPosition {
  x: number;  
  y: number;
}

export interface User {
  id: number;
  position : BoxPosition;
};

export type AddUser = TotalAction<'ADD_USER',User>;
export type RemoveUser = TotalAction<'REMOVE_USER',number>;
export type MoveUser = TotalAction<'MOVE_USER',User>;



export type UserActions =  AddUser | RemoveUser | MoveUser;