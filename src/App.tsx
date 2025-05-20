import './App.css'
import { ListItens } from './components/ListItens'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { ConfirmPresenca } from './components/form/Presenca'
import { GiftProvider } from './context/ItensContext'
import { Location } from './components/Location'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <main className="w-full h-full flex flex-col gap-20 !antialiased">
      <Header />
      <Home />
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
  )
}

export default App
