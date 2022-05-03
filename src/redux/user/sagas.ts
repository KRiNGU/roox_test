import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllUsers } from '../../api/users';
import * as reducers from './slice';

export interface ResponseGeneratorI {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export function* workLoadAllUsers() {
  try {
    const response: ResponseGeneratorI = yield call(getAllUsers);
    const data = response.data;
    yield put(reducers.setUsers(data));
  } catch (e) {}
}

export default function* rootSaga() {
  yield takeLatest('LOAD_USERS', workLoadAllUsers);
}
