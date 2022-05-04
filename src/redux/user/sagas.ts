import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllUsers, getUserById } from '../../api/users';
import { IUserInformation } from '../../models/models';
import * as reducers from './slice';

type TLoadUserById = {
  type: string;
  payload: {
    id: number;
  };
};

interface LoadUsers {
  data: IUserInformation[];
}

interface LoadUser {
  data: IUserInformation;
}

export function* workLoadUserById({ payload }: TLoadUserById) {
  try {
    const response: LoadUser = yield call(getUserById, payload.id);
    const data = response.data;
    yield put(reducers.addUserToList(data));
  } catch (e) {}
}

export function* workLoadAllUsers() {
  try {
    const response: LoadUsers = yield call(getAllUsers);
    const data = response.data;
    yield put(reducers.setUsers(data));
  } catch (e) {}
}

export default function* rootSaga() {
  yield takeLatest('LOAD_USERS', workLoadAllUsers);
  yield takeLatest('LOAD_USER_BY_ID', workLoadUserById);
}
