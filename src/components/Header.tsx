import MenuIcon from './MenuIcon'

export function Header() {
  return (
    <header className="sticky min-w-full flex justify-end lg:justify-center font-medium gap-8 p-2 mt-10 font-sans z-50">
      <div className="hidden lg:flex gap-20">
        <nav className="bg-zinc-700/50 w-72  h-12  rounded-lg content-center ease-in hover:border hover:border-amber-400 font-semibold text-2xl cursor-pointer">
          Cerimônia
        </nav>
        <nav className="bg-zinc-700/50 w-72  h-12 rounded-lg content-center ease-in hover:border hover:border-amber-400 font-semibold text-2xl cursor-pointer">
          Lista de presentes
        </nav>
        <nav className="bg-zinc-700/50 w-72  h-12 rounded-lg content-center ease-in hover:border hover:border-amber-400 font-semibold text-2xl cursor-pointer">
          Confirme sua presença
        </nav>
      </div>

      <div className="group relative lg:hidden">
        <div className="h-4 w-6 cursor-pointer text-white mobile:size-8">
          <MenuIcon />
        </div>
        <div className="absolute right-0 hidden pt-5 group-hover:block">
          <div className="flex flex-col gap-2 bg-zinc-700 rounded-lg w-56 text-center p-2">
            <nav className="hover:bg-zinc-600  mobile:h-12 h-8 rounded-lg content-center ease-in font-semibold text-lg mobile:text-xl cursor-pointer text-center">
              Cerimônia
            </nav>
            <nav className="hover:bg-zinc-600  mobile:h-12 h-8 rounded-lg content-center ease-in font-semibold text-lg mobile:text-xl cursor-pointer">
              Lista de presentes
            </nav>
            <nav className="hover:bg-zinc-600 w-full mobile:h-12 h-8 rounded-lg content-center ease-in  font-semibold text-lg mobile:text-xl cursor-pointer">
              Confirme sua presença
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
