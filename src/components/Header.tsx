import { SectionSelected } from "../App";
import MenuIcon from "./MenuIcon";

interface HeaderProps {
  onMenuClick?: (props: SectionSelected) => void;
}
export function Header({ onMenuClick }: HeaderProps) {
  const handleMenuClick = (section: SectionSelected) => {
    if (onMenuClick) {
      onMenuClick(section);
    }
  };
  return (
    <header className="z-50 mt-10 flex min-w-full max-w-[1360px] justify-end gap-8 p-2 px-5  font-medium lg:justify-center">
      <div className="hidden gap-20 lg:flex">
        <nav
          className="h-12 w-72  cursor-pointer  content-center rounded-lg bg-zinc-700/60  text-2xl font-semibold ease-in hover:opacity-80"
          onClick={() => handleMenuClick("location")}
        >
          Cerimônia
        </nav>
        <nav
          className="h-12 w-72  cursor-pointer content-center rounded-lg bg-zinc-700/60  text-2xl font-semibold ease-in hover:opacity-80"
          onClick={() => handleMenuClick("gifts")}
        >
          Lista de presentes
        </nav>
        <nav
          className="h-12 w-72  cursor-pointer content-center rounded-lg bg-zinc-700/60  text-2xl font-semibold ease-in hover:opacity-80"
          onClick={() => handleMenuClick("confirm-presenca")}
        >
          Confirme sua presença
        </nav>
      </div>

      <div className="group relative lg:hidden">
        <div className="h-4 w-6 cursor-pointer text-white mobile:size-8">
          <MenuIcon />
        </div>
        <div className="absolute right-0 hidden pt-5 group-hover:block">
          <div className="flex w-56 flex-col gap-2 rounded-lg bg-zinc-700 p-2 text-center">
            <nav
              className="h-8  cursor-pointer content-center rounded-lg text-center text-lg font-semibold ease-in hover:bg-zinc-600 mobile:h-12 mobile:text-xl"
              onClick={() => handleMenuClick("location")}
            >
              Cerimônia
            </nav>
            <nav
              className="h-8  cursor-pointer content-center rounded-lg text-lg font-semibold ease-in hover:bg-zinc-600 mobile:h-12 mobile:text-xl"
              onClick={() => handleMenuClick("gifts")}
            >
              Presentes
            </nav>
            <nav
              className="h-8 w-full cursor-pointer content-center rounded-lg text-lg font-semibold  leading-5 ease-in hover:bg-zinc-600 mobile:h-12 mobile:text-xl"
              onClick={() => handleMenuClick("confirm-presenca")}
            >
              Presença
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
