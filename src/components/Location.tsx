import { Maps } from './maps'

export function Location() {
  return (
    <section className="flex flex-col gap-5 px-5 max-w-[1400px] mobile:justify-center mx-auto items-center w-full rounded-lg py-4">
      <div className="space-y-4 mobile:max-w-4xl">
        <h3 className="text-5xl font-bold">Nossa Cerimônia 💍</h3>
        <p className="text-xl font-medium">
          Estamos muito felizes em compartilhar esse momento com vocês! Nossa
          cerimônia será realizada em um espaço especial, cercado pela natureza
          e por aqueles que amamos. Esperamos vocês para celebrar esse dia
          inesquecível juntos!
        </p>

        <div className="space-y-1 font-medium text-base">
          <p className="text-base font-semibold">
            📍 Local: <strong> Chácará San Rafael</strong>
          </p>
          <p className="text-base font-semibold">
            📅 Data: <strong> 30/08/2025</strong>
          </p>
          <p className="text-base font-semibold">
            ⏰ Horário: <strong> 16:30</strong>
          </p>
        </div>
      </div>

      <Maps />
    </section>
  )
}
