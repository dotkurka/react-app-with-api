import { takeEvery, put, call } from "redux-saga/effects";
import { addUser } from "../store/userSlice";
import requesUser from "../../api/getUsers";
import postUser from "../../api/postUsers";

function* getUsers() {
    const users = yield call(() => requesUser());

    yield put(addUser(users));
}

function* postUsers(action) {
    yield call(() => postUser(action.payload));

    yield getUsers();
}

function* watchUsers() {
    yield takeEvery("users/getUser", getUsers);

    yield takeEvery("users/postUser", postUsers);
}

export default function* rootSaga() {
    yield watchUsers();
}
