function MusicPlayer() {
    return (
        <footer className="fixed bottom-0 left-0 z-50 flex h-20 w-full items-center justify-between border-t border-[#282828] bg-[#181818] px-4 text-white">

            <div className="flex w-1/3 items-center gap-3">
                <img
                    src="arijitsingh.jpg"
                    alt="Song cover"
                    className="h-14 w-14 rounded object-cover"
                />

                <div>
                    <h4 className="text-sm font-medium hover:underline">
                        Perfect
                    </h4>
                    <p className="text-xs text-gray-400 hover:text-white">
                        Ed Sheeran
                    </p>
                </div>

                <button className="ml-2 text-gray-400 hover:text-white">
                    ♡
                </button>
            </div>

            <div className="flex w-1/3 flex-col items-center gap-2">
                <div className="flex items-center gap-6">
                    <button className="text-gray-400 hover:bg-[#3f3f3f] hover:rounded-lg">
                        <img src="shuffle.png" className="h-5 w-5" alt="" />
                    </button>

                    <button className="text-gray-400 hover:text-white">
                        |◀
                    </button>

                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black hover:scale-105">
                        ▶
                    </button>

                    <button className="text-gray-400 hover:text-white">
                        ▶|
                    </button>

                    <button className="text-gray-400 hover:text-white">
                        ↻
                    </button>
                </div>

                <div className="flex w-full max-w-md items-center gap-2 text-xs text-gray-400">
                    <span>1:20</span>

                    <div className="h-1 flex-1 rounded-full bg-gray-600">
                        <div className="h-1 w-1/3 rounded-full bg-white" />
                    </div>

                    <span>3:24</span>
                </div>
            </div>


            <div className="flex w-1/3 items-center justify-end gap-3">
                <span className="cursor-pointer text-gray-400 hover:text-white">
                    ☷
                </span>

                <span>🔊</span>

                <div className="h-1 w-24 rounded-full bg-gray-600">
                    <div className="h-1 w-2/3 rounded-full bg-white" />
                </div>
            </div>

        </footer>
    );
}

export default MusicPlayer;