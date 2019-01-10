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

// generator with axios POST 
function* postStatus(action) {
    try {
        console.log('posting action', action.payload);
        // post status to axios
        yield call(axios.post, '/api/status', action.payload);
        // Reupdate state
        yield dispatch({ type: 'FETCH_STATUS' })
    } catch (error) {
        console.log('in postProfile error saga', error);
    }
}

// generator with axios PUT
function* editStatus(action) {
    try {
        // update status with axios
        yield call(axios.put, `/api/status/${action.payload.id}`, action.payload.status.positiveStatus);
        yield dispatch({ type: 'FETCH_STATUS' });
    } catch (error) {
        console.log('error in edit saga', error);
    }
}

// generator with axios DELETE
function* deleteStatus(action) {
    try {
        console.log('deleting action', action.payload);
        yield call(axios.delete, `/api/status/${action.payload}`);
        yield dispatch({ type: 'FETCH_STATUS' });
    } catch (error) {
        console.log('error in delete saga', error);
    }
}


function* statusSaga() {
    yield takeEvery('FETCH_STATUS', fetchProfilesStatus);
    yield takeEvery('EDIT_STATUS', editStatus);
}

export default statusSaga;