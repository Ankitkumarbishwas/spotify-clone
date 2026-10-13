export default Header

function Header(){
    return(
        <div className="bg-black flex px-6 py-3 items-center justify-between top-0 sticky">
            <div className="flex gap-4 items-center w-[50%]">
                <a href="">
                    <img src="spotify.png" className="h-9"  alt="" />
                </a>
                <a href="" className="px-3 py-3 bg-[#282828] rounded-full">
                    <img src="home2.png" className="h-6" alt="" />
                </a>
                <div className="w-[50%] flex bg-[#282828] items-center rounded-full px-4 justify-center gap-3 hover:bg-[#3f3f3f] hover:border-2 border-gray-200">
                    <img src="search2.png" className="h-6 " alt="" />
                    <input type="text" className="w-full h-10 bg-[#282828] placeholder:text-white placeholder:text-base hover:bg-[#3f3f3f] outline-none" placeholder="What do you want to play?" />
                </div>
            </div>

            <div className="font-bold text-gray-400 text-[16px] flex items-center">
                <div className="flex gap-2  border-r-2 px-4">
                    <a href="" className="hover:text-white hover:text-[17px]">Premium</a>
                    <a href="" className="hover:text-white hover:text-[17px]">Support</a>
                    <a href="" className="hover:text-white hover:text-[17px]">Downloard</a>
                </div>
                <div className="flex gap-5 items-center">
                    <a href="" className="hover:text-white hover:text-[17px] pl-7">
                        <img src="" alt="" />
                        Install App
                    </a>
                    <a href="" className="flex items-center gap-2 rounded-full bg-[#282828]  p-1.5 text-white hover:bg-[#3f3f3f]">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 text-sm">A</span>
                    </a>
                </div>

            </div>

        </div>
    )
}