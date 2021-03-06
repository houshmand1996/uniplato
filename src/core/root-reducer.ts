import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createBrowserHistory } from 'history';
import { userReducer } from 'plugins';

const persistConfig = {
  key: 'root',
  storage
};

export const history = createBrowserHistory();

const createRootReducer =combineReducers({
  userState: userReducer,
});

export type RootState = ReturnType<typeof createRootReducer>;

export default persistReducer(persistConfig, createRootReducer);
