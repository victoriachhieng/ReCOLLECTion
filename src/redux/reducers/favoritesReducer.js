// Used to store profile favorites returned from the server
const favoritesReducer = (state = [], action) => {
    console.log('favoritesReducer', action.payload);
    switch (action.type) {
        case "SET_FAVORITES":
            return action.payload;
        default:
            return state;
    }
};

export default favoritesReducer;