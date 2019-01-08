// Used to store profiles returned from the server
const profileReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PROFILES":
      return action.payload;
    default:
      return state;
  }
};

export default profileReducer;
