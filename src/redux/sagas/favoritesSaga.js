import axios from "axios";
import { call, takeEvery, put as dispatch } from "redux-saga/effects";

// generator with axios GET call to get DB from profiles
function* fetchFavorites() {
  try {
    const favoritesResponse = yield call(axios.get, "api/favorites");
    yield dispatch({ type: "SET_FAVORITES", payload: favoritesResponse.data });
    console.log('fetchFavories', favoritesResponse.data);
    
  } catch (error) {
    console.log("error in fetchFavorites saga", error);
  }
}


function* favoritesSaga() {
  yield takeEvery("FETCH_FAVORITES", fetchFavorites);
}

export default favoritesSaga;