import {all} from 'redux-saga/effects';
import {authSaga} from './modules/auth'

export default function* rootSaga() {
    yield all([authSaga()])
}