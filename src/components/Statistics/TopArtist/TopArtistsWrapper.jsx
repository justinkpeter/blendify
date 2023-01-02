export const TopArtistsWrapper = (props) => {
    const {children} = props;
    return (
        <div className={"grid grid-cols-26 grid-rows-10 h-section "}>
            {children}
        </div>
    )
}