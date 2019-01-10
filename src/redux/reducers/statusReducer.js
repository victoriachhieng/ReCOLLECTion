// Used to store status returned from the server
const statusReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_STATUS":
            return action.payload;
        default:
            return state;
    }
};

export default statusReducer;