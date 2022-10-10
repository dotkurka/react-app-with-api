import { takeEvery, put, call } from "redux-saga/effects";
import { addUser } from "../store/userSlice";
import requesUser from "../../api";

function* workUsers() {
    const users = yield call(() => requesUser());
    console.log(users);

    yield put(addUser(users));
}

function* watchUsers() {
    yield takeEvery("users/fetchUser", workUsers);
}

export default function* rootSaga() {
    yield watchUsers();
}
