export default PopularArtist;

function PopularArtist(props){
    return(
        <div className=" flex flex-col items-center justify-center gap-5">
            <img src={props.image} className="h-[150px] w-[150px] rounded-full object-cover" alt="" />
            <div>
                <h1>{props.artistname}</h1>
                <h1 className="text-gray-400">Artist</h1>
            </div>
        </div>
    )
}