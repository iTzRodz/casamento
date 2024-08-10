import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  addDays,
  addHours,
  addMinutes,
} from 'date-fns'
import { useEffect, useState } from 'react'
export function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const dateWedding = new Date('2025/08/30')

      const now = new Date()

      const days = differenceInDays(dateWedding, now)
      const hours = differenceInHours(dateWedding, addDays(now, days)) % 24
      const minutes =
        differenceInMinutes(dateWedding, addHours(addDays(now, days), hours)) %
        60
      const seconds =
        differenceInSeconds(
          dateWedding,
          addMinutes(addHours(addDays(now, days), hours), minutes),
        ) % 60

      setTimeLeft({ days, hours, minutes, seconds })
    }

    const timer = setInterval(calculateTimeLeft, 1000)

    calculateTimeLeft() // Calculate once immediately

    return () => clearInterval(timer)
  }, [])
  return (
    <div className="w-max-[1360px] flex flex-col justify-center px-2">
      <h1 className="font-bold  mobile:text-5xl text-4xl text-center">
        Contagem Regresiva
      </h1>

      <div className="flex  mobile:justify-center items-center lg:gap-10 mt-8 gap-8 ">
        <div className="size-20 lg:size-24 bg-stone-700/50 text-lg flex flex-col justify-center items-center rounded-lg font-bold p-5">
          <p className="text-3xl">{timeLeft.days}</p>
          <span className="uppercase text-sm">Dias</span>
        </div>
        <div className="size-20 lg:size-24 bg-stone-700/50 text-lg flex flex-col justify-center items-center rounded-lg font-bold p-5">
          <p className="text-3xl">{timeLeft.hours}</p>
          <span className="uppercase text-sm">Horas</span>
        </div>
        <div className="size-20 lg:size-24 bg-stone-700/50 text-lg flex flex-col justify-center items-center rounded-lg font-bold p-5">
          <p className="text-3xl">{timeLeft.minutes}</p>
          <span className="uppercase text-sm">Minutos</span>
        </div>
        <div className="size-20 lg:size-24 bg-stone-700/50 text-lg flex flex-col justify-center items-center rounded-lg font-bold p-5">
          <p className="text-3xl">{timeLeft.seconds}</p>
          <span className="uppercase text-sm">Segundos</span>
        </div>
      </div>
    </div>
  )
}
