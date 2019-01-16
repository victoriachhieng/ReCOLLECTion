import axios from 'axios';
import { call, takeEvery, put as dispatch } from 'redux-saga/effects';
import swal from "sweetalert";

// generator with axios GET call to get DB from projects
function* fetchProfiles(action) {
    try{
        const profileResponse = yield call(axios.get, `api/profile/${action.payload}`);
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
        yield call(axios.post, '/api/profile', action.payload);
        // Reupdate state
        yield dispatch({ type: 'FETCH_PROFILE' })
        swal({
          title: "You have successfully submitted a new Profile!",
          text: "Let's check it out!",
          icon: "success",
          button: "Ok"
        });
    } catch (error) {
        console.log('in postProfile error', error);
    }
}

// generator with axios DELETE
function* deleteProfiles(action) {
    try {
        console.log('deleting action', action.payload);
        yield call(axios.delete, `/api/profile/${action.payload}`);
        yield dispatch({ type: 'FETCH_PROFILE' });
    } catch (error) {
        console.log('error in delete saga', error);
    }
}

// generator with axios PUT
function* editProfiles(action) {
    try {
        yield call(axios.put, `/api/edit/${action.payload.id}`, action.payload);
        yield dispatch({ type: 'EDIT_PROFILE' });
    } catch (error) {
        console.log('error in editProfile saga', error);
    }
}

function* profileSaga() {
    yield takeEvery('FETCH_PROFILE', fetchProfiles);
    yield takeEvery('ADD_PROFILE', postProfiles);
    yield takeEvery('DELETE_PROFILE', deleteProfiles);
    yield takeEvery('EDIT_PROFILE', editProfiles);
}

export default profileSaga;