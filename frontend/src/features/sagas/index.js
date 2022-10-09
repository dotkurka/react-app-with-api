import { takeEvery, put, call } from "redux-saga/effects";
import { addUser } from "../store/userSlice";
import requesUser from "../../api";

function* workUsers() {
    const data = yield call(() => requesUser());

    yield put(addUser(data));
}

function* watchUsers() {
    yield takeEvery("users/fetchUser", workUsers);
}

export default function* rootSaga() {
    yield watchUsers();
}
