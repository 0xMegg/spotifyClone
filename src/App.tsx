import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page">
      <Navbar />
      <main className="w-full h-full bg-neutral-100 flex">
        <div className="w-25% h-full bg-neutral-100">
          <div className="w-full h-full bg-neutral-100">
            <div className="w-full h-full bg-neutral-100">ㅁㄴㅇㄹ</div>
          </div>
        </div>
        <div className="w-75% h-full bg-neutral-100">
          <div className="w-full h-full bg-neutral-100">ㅂㅈㄷㄱ</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
