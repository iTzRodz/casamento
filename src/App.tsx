import './App.css'
import { ListItens } from './components/ListItens'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { ConfirmPresenca } from './components/form/Presenca'
import { GiftProvider } from './context/ItensContext'
import { Location } from './components/Location'

function App() {
  return (
    <main className="w-full h-full max-w-[1400px] flex flex-col gap-20 !antialiased">
      <Header />
      <Home />
      <Location />
      <GiftProvider>
        <ListItens />
      </GiftProvider>
      <ConfirmPresenca />
    </main>
  )
}

export default App
