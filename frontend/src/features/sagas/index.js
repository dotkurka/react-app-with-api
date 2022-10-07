import { takeEvery, call, put } from "redux-saga/effects";
import { addUser } from "../store/userSlice";
import fetchUset from "../../api";

function* workUsers() {
    const data = yield call(() => fetchUset());
    yield put(addUser(data));
}

function* watchUsers() {
    yield takeEvery("users/addUser", workUsers);
}

export default function* rootSaga() {
    yield watchUsers();
}
