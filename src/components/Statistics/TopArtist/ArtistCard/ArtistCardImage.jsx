export const ArtistCardImage = ({src}) => {
    return(
        <img
            className={"absolute inset-0 object-cover w-full h-full transition ease-in-out duration-1000"}
            src={src}
        />
    )
}