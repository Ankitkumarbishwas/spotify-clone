import { playlists } from "../data"

function Sidebar(){
return(
    <div className="h-screen overflow-y-auto w-[25%] bg-[#181818] rounded-lg px-5 py-4">
        <div className="py-3 flex text-white font-bold justify-between items-center">
            <p>YourLibary</p>
            <div className="flex items-center justify-center gap-3 px-3 py-2 bg-[#303030] rounded-full font-semibold hover:bg-[#3f3f3f]">
                <img src="plus.png" className="h-4" alt="" />
                <a href="">Create</a>
            </div>
        </div>
        <div className="flex text-white gap-3 font-semibold items-center">
            <a href="" className="px-4 py-2 bg-[#303030] rounded-full hover:bg-[#3f3f3f]">Playlist</a>
            <a href="" className="px-4 py-2 bg-[#303030] rounded-full hover:bg-[#3f3f3f]">Artist</a>
        </div>
        <div className="flex items-center justify-between text-white mt-2 ">
            <a href="" className="px-2 py-2 hover:bg-[#3f3f3f] hover:rounded-full">
                <img src="search2.png" className="h-4" alt="" />
            </a>
            <a href="" className="flex items-center justify-center py-2 px-2 hover:bg-[#3f3f3f] hover:rounded-full">Recents
                <img src="recent.png" className="h-8" alt="" />
            </a>
        </div>
        <div className=" text-white">
            {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="flex cursor-pointer items-center gap-3 rounded-md p-2 hover:bg-[#282828]"
          >
            <img
              src={playlist.image}
              alt={playlist.title}
              className="h-14 w-14 shrink-0 rounded-md object-cover"
            />

            <div className="min-w-0">
              <h3 className="truncate font-semibold">
                {playlist.title}
              </h3>

              <p className="mt-1 truncate text-sm text-gray-400">
                {playlist.subtitle}
              </p>
            </div>
          </div>
        ))}
        </div>

    </div>
)
}

export default Sidebar