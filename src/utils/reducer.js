export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    recently_played: [],
    discover_weekly: null,
    current_section: null,
    top_artists: null,
    top_artists_long: null,
    top_tracks_short: null,
    top_tracks_medium: null,
    top_tracks_long: null,
    top_genres: ['hello'],
    top_genre: null,
    top_tracks_genres:'',
    //TODO: remove after developing
    token: null
}
 const reducer = (state, action) => {
    //Action -> type, [payload]

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        case 'SET_RECENTLY_PLAYED':
            return{
                ...state,
                recently_played: action.recently_played
            }
        case 'SET_CURRENT_SECTION':
            return{
                ...state,
                current_section: action.current_section
            }
        case 'SET_TOP_ARTISTS':
            return{
                ...state,
                top_artists: action.top_artists
            }
        case 'SET_TOP_ARTISTS_LONG':
            return{
                ...state,
                top_artists_long: action.top_artists.items
            }
        case 'SET_TOP_ARTIST':
            return{
                ...state,
                top_artist: action.top_artist
            }
        case 'SET_TOP_TRACKS_SHORT':
            return{
                ...state,
                top_tracks_short: action.top_tracks
            }
        case 'SET_TOP_TRACKS_MEDIUM':
            // console.log(action)
            return{
                ...state,
                top_tracks_medium: action.top_tracks.items
            }
        case 'SET_TOP_TRACKS_LONG':
            return{
                ...state,
                top_tracks_long: action.top_tracks
            }
        case 'SET_TOP_GENRES':
            return{
                ...state,
                top_genres: action.top_genres
            }
        default:
            return state
    }
}



export default reducer