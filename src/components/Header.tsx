import MenuIcon from './MenuIcon'

export function Header() {
  return (
    <header className="min-w-full flex justify-center font-medium gap-8 p-2 mt-10 font-sans group cursor-pointer">
      <div className="group relative lg:hidden">
        <div className="h-4 w-6 cursor-pointer text-white mobile:h-6 mobile:w-8">
          <MenuIcon />
        </div>
      </div>
      <nav className="bg-zinc-700/50 w-72  h-12  rounded-lg content-center ease-in hover:opacity-70 font-semibold text-2xl">
        Cerimônia
      </nav>
      <nav className="bg-zinc-700/50 w-72  h-12 rounded-lg content-center ease-in hover:opacity-70 font-semibold text-2xl">
        Lista de presentes
      </nav>
      <nav className="bg-zinc-700/50 w-72  h-12 rounded-lg content-center ease-in hover:opacity-70 font-semibold text-2xl">
        Confirme sua presença
      </nav>
    </header>
  )
}
