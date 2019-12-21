import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import { signSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signSuccess(token, user));

    history.push('/student-list');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados.');
    yield put(signFailure());
  }
}

function setToken({ payload }) {
  if (payload) {
    const { token } = payload.auth;

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }
}

function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);