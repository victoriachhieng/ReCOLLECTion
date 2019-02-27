import axios from 'axios';
import { call, takeEvery, put as dispatch } from 'redux-saga/effects';

// generator with axios GET call to get DB from profiles
function* fetchProfilesStatus() {
    try {
        const statusResponse = yield call(axios.get, 'api/status');
        yield dispatch({ type: 'SET_STATUS', payload: statusResponse.data });
    } catch (error) {
        console.log('error in fetchProfilesStatus saga', error);
    }
}

// generator with axios PUT
function* positiveStatus(action) {
    try {
        // update status to positive with axios
        yield call(axios.put, `/api/status/${action.payload.id}`, action.payload.status);
        yield dispatch({ type: 'FETCH_STATUS' });
    } catch (error) {
        console.log('error in edit saga', error);
    }
}

// generator with axios PUT
function* negativeStatus(action) {
    try {
        // update status to negative with axios
        console.log('in negativeStatus', action.payload);
        yield call(axios.put, `/api/status/${action.payload.id}`, action.payload.status);
        yield dispatch({ type: 'FETCH_STATUS' });
    } catch (error) {
        console.log('error in edit saga', error);
    }
}

// generator with axios PUT
function* neutralStatus(action) {
    try {
        // update status to neutral with axios
        console.log('in neutralStatus saga', action.payload);
        yield call(axios.put, `/api/status/${action.payload.id}`, action.payload.status);
        yield dispatch({ type: 'FETCH_STATUS' });
    } catch (error) {
        console.log('error in edit saga', error);
    }
}


function* statusSaga() {
    yield takeEvery('FETCH_STATUS', fetchProfilesStatus);
    yield takeEvery('POSITIVE_STATUS', positiveStatus);
    yield takeEvery('NEGATIVE_STATUS', negativeStatus);
    yield takeEvery('NEUTRAL_STATUS', neutralStatus);

}

export default statusSaga;