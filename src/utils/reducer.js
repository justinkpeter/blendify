import React from 'react'
import SpotifyWebApi from "spotify-web-api-js";


const spotify = new SpotifyWebApi()
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    current_section: null,
    top_artists: null,
    top_artists_long: null,
    top_tracks_short: null,
    top_tracks_medium: null,
    top_tracks_long: null,
    top_genres: ['hello'],
    //TODO: remove after developing
    token: null
}


async function getTopGenres(tracks){
    // get array of artists from tracks
    // let artists = []
    // tracks.forEach(track => {
    //     artists.push(track.artists[0].id)
    // })
    //
    // // fetching artist info to grab genres from each artist
    // let genres = []
    // let topGenres = []
    //
    //
    // spotify.getArtists(artists).then((response) => {
    //     //extracting genres from artists
    //     response.artists.forEach(artist => {
    //         genres.push(artist.genres)
    //     })
    //
    //     // mapping genre frequency to object
    //     const genreFrequency = {}
    //     genres.forEach(genre => {
    //         genre.forEach(genre => {
    //             if(genreFrequency[genre]){
    //                 genreFrequency[genre] += 1
    //             } else {
    //                 genreFrequency[genre] = 1
    //             }
    //         })
    //     })
    //
    //     // sort genres by frequency
    //     const sortedGenres = Object.keys(genreFrequency).sort(function(a,b){return genreFrequency[b]-genreFrequency[a]})
    //
    //     // return topGenres
    //     topGenres =[
    //         {name: sortedGenres[0], percentage: genreFrequency[sortedGenres[0]]/ genres.length * 100},
    //         {name: sortedGenres[1], percentage: genreFrequency[sortedGenres[1]]/ genres.length * 100},
    //         {name: sortedGenres[2], percentage: genreFrequency[sortedGenres[2]]/ genres.length * 100},
    //         {name: sortedGenres[3], percentage: genreFrequency[sortedGenres[3]]/ genres.length * 100},
    //         {name: sortedGenres[4], percentage: genreFrequency[sortedGenres[4]]/ genres.length * 100},
    //     ]
    // })
    // return topGenres



}
const reducer = (state, action) =>{
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
            // console.log(getTopGenres(action.top_tracks))
            return{
                ...state,
                // top_genres: genres,
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