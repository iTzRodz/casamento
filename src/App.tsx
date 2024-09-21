import './App.css'
import { ListItens } from './components/ListItens'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { ConfirmPresenca } from './components/form/Presenca'
import { GiftProvider } from './context/ItensContext'

function App() {
  return (
    <main className="w-full h-full max-w-[1360px] flex flex-col gap-20 !antialiased">
      <Header />
      <Home />
      <GiftProvider>
        <ListItens />
      </GiftProvider>
      <ConfirmPresenca />
    </main>
  )
}

export default App
