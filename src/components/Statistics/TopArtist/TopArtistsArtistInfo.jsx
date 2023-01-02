import '../../../styles/ArtistCard.css';

export const TopArtistsArtistInfo = ({popularity, followers,topTrack}) => {
    return (
        <ul className={'top-artists-info-stats font-medium w-2/3 overflow-hidden  '}>
                <li >
                    <h3 className={'text-xl'}> Popularity </h3>
                    <p className={'text-3xl font-bold'}>{popularity}</p>
                </li>
                <li>
                    <h3 className={'text-xl'}> Followers </h3>
                    <p className={'text-3xl font-bold'}>{followers}</p>
                </li>
                <li>
                    <h3 className={'text-xl'}> Top Track </h3>
                    <p className={'text-3xl font-bold'}>{topTrack}</p>
                </li>
        </ul>
    )
}