import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#a7bcff]">
      <div className="w-[65%] h-[30rem] flex overflow-hidden border rounded-lg">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
