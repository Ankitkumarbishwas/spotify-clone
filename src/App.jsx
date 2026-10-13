import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import MusicPlayer from "./components/MusicPlayer";

function App(){
  return(
    <div className="bg-black h-screen overflow-y-auto">
      <Header/>
      <div className="flex gap-2 ">
        <Sidebar/>
        <MainContent/>
      </div>
      <MusicPlayer/>
    </div>
  )
}

export default App;