// Used to store edit profiles returned from the server
const editReducer = (state = -1, action) => {
    console.log('editReducer', action.payload);
    switch (action.type) {
        case "SET_EDIT_PROFILE_ID":
        return action.payload;
      default:
        return state;
    }
};

export default editReducer;