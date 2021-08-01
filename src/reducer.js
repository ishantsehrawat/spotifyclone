export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE TOKEN AFTER DEVELOPMENT AND INITIALISE AS NULL
    // token: 'BQD5yahciM8BqI7FcVSUsYIePa0lAs197GoYtDInKmyQaSl-ERjBzyWNA3WmCWAujQNurrzGQsViomR1GyiedF4AxDjBcTysBVUka7i8wviM6-5wJWTlXapbkMJe4VCoN8rso-1b12m4sJSngy7tD3HPgIPO2vO4H7kAk-UIIwB6RbXA'
};

const reducer = (state, action) => {
console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
        case 'SET_DISCOVER_WEEKLY' :
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;