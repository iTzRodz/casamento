import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  addDays,
  addHours,
  addMinutes,
} from "date-fns";
import { useEffect, useState } from "react";
export function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const dateWedding = new Date("2025/08/30");

      const now = new Date();

      const days = differenceInDays(dateWedding, now);
      const hours = differenceInHours(dateWedding, addDays(now, days)) % 24;
      const minutes =
        differenceInMinutes(dateWedding, addHours(addDays(now, days), hours)) %
        60;
      const seconds =
        differenceInSeconds(
          dateWedding,
          addMinutes(addHours(addDays(now, days), hours), minutes),
        ) % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    calculateTimeLeft(); // Calculate once immediately

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <section className="mx-auto mt-20 flex w-full max-w-[1360px] flex-col justify-center px-2">
        <h1 className="text-center  text-4xl font-bold text-white mobile:text-5xl">
          Contagem Regresiva
        </h1>

        <div className="mx-auto mt-8 grid grid-cols-2 gap-8 mobile:grid-cols-4 lg:gap-10">
          <div className="flex size-24 flex-col items-center justify-center rounded-lg bg-stone-700/60 p-5 text-lg font-bold lg:size-24">
            <p className="text-3xl">{timeLeft.days}</p>
            <span className="text-sm uppercase">Dias</span>
          </div>
          <div className="flex size-24 flex-col items-center justify-center rounded-lg bg-stone-700/60 p-5 text-lg font-bold lg:size-24">
            <p className="text-3xl">{timeLeft.hours}</p>
            <span className="text-sm uppercase">Horas</span>
          </div>
          <div className="flex size-24 flex-col items-center justify-center rounded-lg bg-stone-700/60 p-5 text-lg font-bold lg:size-24">
            <p className="text-3xl">{timeLeft.minutes}</p>
            <span className="text-sm uppercase">Minutos</span>
          </div>
          <div className="flex size-24 flex-col items-center justify-center rounded-lg bg-stone-700/60 p-5 text-lg font-bold lg:size-24">
            <p className="text-3xl">{timeLeft.seconds}</p>
            <span className="text-sm uppercase">Segundos</span>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-auto flex h-auto  w-full justify-center rounded-lg bg-zinc-900/70">
        <div className="flex w-full max-w-6xl flex-col justify-center gap-3 p-4 text-left text-white">
          <p className="mt-4 text-lg font-medium">
            Sim, vai ter casamento! E acontece que, na vida, a gente tem que ser
            feliz por ser amado por alguém... e a nossa felicidade é dividir
            esse momento incrível com você.{" "}
          </p>
          <p className="text-lg font-medium">
            Criamos esse cantinho para dividir com vocês todos os detalhes do
            grande dia: onde, quando, como chegar, o que vestir, como confirmar
            presença, lista de presentes e muito mais. Tudo fácil, prático e sem
            complicação!
          </p>
          <p className="text-lg font-medium">
            Estamos contando os dias para viver esse momento incrível ao lado de
            pessoas tão especiais. Prepare o look, o sorriso e a animação —
            porque a festa vai ser inesquecível!
          </p>
          <p className="text-lg font-medium">Com carinho, Gabriela e Rodolfo</p>
        </div>
      </section>
    </>
  );
}
