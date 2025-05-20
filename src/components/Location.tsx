import { Maps } from './maps'

export function Location() {
  return (
    <section className="flex flex-col gap-5 px-5 max-w-[1400px] mobile:justify-center mx-auto items-center w-full rounded-lg py-4">
      <div className="space-y-4 max-w-6xl">
        <h3 className="text-4xl mobile:text-5xl font-bold">
          Cerimônia 💍
        </h3>
        <p className="text-lg mobile:text-xl font-medium text-start">
          Estamos muito felizes em compartilhar esse momento com vocês! Nossa
          cerimônia será realizada em um espaço especial, cercado pela natureza
          e por aqueles que amamos. Esperamos vocês para celebrar esse dia
          inesquecível juntos!
        </p>

        <div className="space-y-1 font-medium text-base">
          <p className="text-lg font-semibold">
            📍 Local: <strong> Chácará San Rafael</strong>
          </p>
          <p className="text-lg font-semibold">
            📅 Data: <strong> 30/08/2025</strong>
          </p>
          <p className="text-lg font-semibold">
            ⏰ Horário: <strong> 16:30</strong>
          </p>
        </div>
      </div>

      <Maps />
    </section>
  )
}
