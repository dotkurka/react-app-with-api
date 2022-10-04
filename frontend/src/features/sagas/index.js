import { call, put, takeEvery } from "redux-saga/effects";
import { addUser } from "../store/userSlice";

function* workUsers() {
    const user = yield call(() => fetch("http://echo.jsontest.com/key/value/one/two"));
    const formattedUser = yield user.json();
    yield put(addUser(formattedUser));
}

function* watchUsers() {
    yield takeEvery("users/addUser", workUsers);
}

export default watchUsers;
