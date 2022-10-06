import { call, put, takeEvery } from "redux-saga/effects";
import { addUser } from "../store/userSlice";

function* workUsers() {
    const user = yield call(() => fetch("http://localhost:3000/users/"));
    yield put(addUser(user));
}

function* watchUsers() {
    yield takeEvery("users/addUser", workUsers);
}

export default watchUsers;
