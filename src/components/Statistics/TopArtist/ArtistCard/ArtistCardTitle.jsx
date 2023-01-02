export const ArtistCardTitle=({title})=>{
    return(
        <div className={"absolute inset-x-5 bottom-5 flex flex-col space-y-1 w-1/2 z-10"}>
            <span className={"text-lg font-normal"}> Your Top Artist </span>
            <span className={"text-2xl font-bold"}> {title} </span>
        </div>
    )
}