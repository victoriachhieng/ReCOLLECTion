import axios from 'axios';
import { call, takeEvery, put as dispatch } from 'redux-saga/effects';

// generator with axios GET call to get DB from projects
function* fetchProfiles() {
    try{
        const profileResponse = yield call(axios.get, 'api/addprofile');
        yield dispatch({ type: 'SET_PROFILES', payload: profileResponse.data });
    } catch (error) {
        console.log('error in fetchProfiles saga', error);
    }
}

// generator with axios POST 
function* postProfiles(action) {
    try {
        console.log('posting action', action.payload);
        // post profile to axios
        yield call(axios.post, '/api/addprofile', action.payload);
        // Reupdate state
        yield dispatch({ type: 'FETCH_PROFILE' })
    } catch (error) {
        console.log('in postProfile error', error);
    }
}

// generator with axios DELETE
function* deleteProfiles(action) {
    try {
        console.log('deleting action', action.payload);
        yield call(axios.delete, `/api/addprofile/${action.payload}`);
        yield dispatch({ type: 'FETCH_PROFILE' });
    } catch (error) {
        console.log('error in delete saga', error);
    }
}

function* profileSaga() {
    yield takeEvery('FETCH_PROFILE', fetchProfiles);
    yield takeEvery('ADD_PROFILE', postProfiles);
    yield takeEvery('DELETE_PROFILE', deleteProfiles);
}

export default profileSaga;