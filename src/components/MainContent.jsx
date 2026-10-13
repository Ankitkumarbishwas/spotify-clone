import ArtistProfile from "./playlistcart";
import PopularArtist from "./PopularArtist";

function MainContent(){
    return(
        <div className="h-screen overflow-y-auto w-[75%] bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950 rounded-lg px-5 py-4 text-white">
            <div className="flex gap-2 font-medium text-sm">
                <a href="" className="bg-[#1b1a1a] px-4 py-2 rounded-full hover:bg-[#201f1f]">All</a>
                <a href="" className="bg-[#1b1a1a] px-4 py-2 rounded-full hover:bg-[#201f1f]">Music</a>
                <a href="" className="bg-[#1b1a1a] px-4 py-2 rounded-full hover:bg-[#201f1f]">Podcast</a>
            </div>

            <div className="mt-5 text-2xl px-6 font-bold">
                <h1>Recenty Played</h1>
            </div>
            <div className="grid grid-cols-6 p-4 ">
                <ArtistProfile playlistname="My" image="my.png" discription="ankitkumar"/>
                <ArtistProfile playlistname="Panjabi" image="panjabi.png" discription="ankitkumar"/>
                <ArtistProfile playlistname="Gym" image="Gym.png" discription="ankitkumar"/>
                <ArtistProfile playlistname="Rock" image="rock.png" discription="ankitkumar"/>
                <ArtistProfile playlistname="Liked" image="liked.png" discription="ankitkumar"/>
                <ArtistProfile playlistname="Bollywood" image="bollywood.png" discription="ankitkumar"/>
            </div>

            <div className="mt-5 text-2xl px-6 font-bold">
                <h1>Made For You</h1>
            </div>
            <div className="grid grid-cols-6 p-4 ">
                <ArtistProfile playlistname="My" image="my.png" discription="ankitkumar"/>
                <ArtistProfile playlistname="Panjabi" image="panjabi.png" discription="ankitkumar"/>
                <ArtistProfile playlistname="Gym" image="Gym.png" discription="ankitkumar"/>
                <ArtistProfile playlistname="Rock" image="rock.png" discription="ankitkumar"/>
                <ArtistProfile playlistname="Liked" image="liked.png" discription="ankitkumar"/>
                <ArtistProfile playlistname="Bollywood" image="bollywood.png" discription="ankitkumar"/>
            </div>

            <div className="mt-5 text-2xl px-6 font-bold">
                <h1>Popular Artist</h1>
            </div>
            <div className="grid grid-cols-6 p-4 ">
                <PopularArtist image="arijitsingh.jpg" artistname="Arijit Singh"/>
                <PopularArtist image="Ar-rahman.jpg" artistname="A.R.Rahman"/>
                <PopularArtist image="atif-aslam.jpg" artistname="Atif Aslam"/>
                <PopularArtist image="shreya-ghoshal.jpg" artistname="Shreya Ghoshal"/>
                <PopularArtist image="honey-singh.png" artistname="Honey Singh"/>
                <PopularArtist image="pritam.jpg" artistname="Pritam"/>
            </div>

        </div>
    )
}

export default MainContent;