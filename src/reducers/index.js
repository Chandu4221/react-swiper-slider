import { combineReducers } from 'redux';
import InitialPhots from './InitialPhotos';
import UserProfileReducer from './UserProfile';

const RootReducer = combineReducers({
  InitialPhots,
  UserProfileReducer
});

export default RootReducer;
