export default ArtistProfile;

function ArtistProfile(props){
    return(
        <div className="flex flex-col items-center justify-center">
            <img src={props.image} className="h-[150px] w-[150px] rounded-md" alt="" />
            <div>
                <h1>{props.playlistname}</h1>
                <h2 className="text-gray-400">Playlist • {props.discription}</h2>
            </div>
        </div>
    )
}