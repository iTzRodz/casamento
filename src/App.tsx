import './App.css'
import { ListItens } from './components/ListItens'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { ConfirmPresenca } from './components/form/Presenca'

function App() {
  return (
    <main className="w-full h-full max-w-[1360px] flex flex-col">
      <Header />
      <Home />
      <ListItens />
      <ConfirmPresenca />
    </main>
  )
}

export default App
