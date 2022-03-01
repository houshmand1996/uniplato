import { AddUser, MoveUser, RemoveUser, User, UserActions } from 'plugins';

interface UserState {
    users: User[];
    maxUsers: number;
}

const INITIAL_STATE: UserState = {
    users: [
        { id: 1, position: { x: 0, y: 0 } },
    ],
    maxUsers: 12,
};

export const userReducer = (state = INITIAL_STATE, action: UserActions): UserState => {
    switch (action.type) {
        case 'ADD_USER': return addUserToState(state, action);
        case 'REMOVE_USER': return removeUserFromState(state, action);
        case 'MOVE_USER': return changeUserPosition(state, action);
        default:
            return state;
    }
};

const addUserToState = (state: UserState, action: AddUser): UserState => {
    if(!action.payload) return state;
    const { users } = state;
    const { payload } = action;
    const { id, position } = payload;
    const newUsers: User[] = [...users];
    if (newUsers.length < state.maxUsers)  newUsers.push({ id, position });
    return {
        ...state,
        users: newUsers,
    };
};

const removeUserFromState = (state: UserState, action: RemoveUser): UserState => {
    const { users } = state;
    const { payload } = action;
    const  id  = payload;
    const newUsers: User[] = users.filter((user: User) => user.id !== id);
    return {
        ...state,
        users: newUsers,
    };
};

const changeUserPosition = (state: UserState, action: MoveUser): UserState => {
    if(!action.payload) return state;
    const { users } = state;
    const { payload } = action;
    const { id, position } = payload ;
    const newUsers: User[] = users.map((user: User) => {
        if (user.id === id) {
            return { ...user, position };
        }
        return user;
    });
    return {
        ...state,
        users: newUsers,
    };
};
