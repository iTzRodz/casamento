import "./App.css";
import { ListItens } from "./components/ListItens";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { ConfirmPresenca } from "./components/form/Presenca";
import { GiftProvider } from "./context/ItensContext";
import { Location } from "./components/Location";
import { ToastContainer } from "react-toastify";
import { useRef } from "react";

export type SectionSelected = "location" | "gifts" | "confirm-presenca";
function App() {
  const sectionRefs = {
    location: useRef<HTMLDivElement>(null),
    gifts: useRef<HTMLDivElement>(null),
    "confirm-presenca": useRef<HTMLDivElement>(null),
  };

  const handleMenuClick = (section: SectionSelected) => {
    const ref = sectionRefs[section];
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <main className="flex size-full flex-col gap-20 !antialiased">
      <div className="flex h-screen max-h-screen w-full flex-col bg-zinc-900/50 bg-[url('/images/bg-hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat bg-blend-overlay">
        <Header onMenuClick={handleMenuClick}/>
        <Home />
      </div>
      <div ref={sectionRefs.location}>
        <Location />
      </div>
      <div ref={sectionRefs.gifts}>
        <GiftProvider>
          <ListItens />
        </GiftProvider>
      </div>
      <div ref={sectionRefs["confirm-presenca"]}>
        <ConfirmPresenca />
      </div>
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
