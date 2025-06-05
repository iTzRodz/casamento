import "./App.css";
import { ListItens } from "./components/ListItens";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { ConfirmPresenca } from "./components/form/Presenca";
import { GiftProvider } from "./context/ItensContext";
import { Location } from "./components/Location";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <main className="flex size-full flex-col gap-20 !antialiased">
      <div className="flex h-screen max-h-screen w-full flex-col bg-zinc-900/50 bg-[url('/images/bg-hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat bg-blend-overlay">
        <Header />
        <Home />
      </div>
      <Location />
      <GiftProvider>
        <ListItens />
      </GiftProvider>
      <ConfirmPresenca />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}

export default App;
