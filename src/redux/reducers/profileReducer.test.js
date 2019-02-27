import profileReducer from './profileReducer';

describe('Testing profiles', () => {
    test('Should have correct default state', () => {
        let action = { type: 'SET_PROFILES' };
        expect(profileReducer(undefined, action)).toEqual(action.payload)
    })
})

//     test('Should switch to register', () => {
//         let action = { type: 'SET_TO_REGISTER_MODE' };
//         expect(profileReducer('login', action)).toEqual('register');
//     })
// })
