import { Maps } from "./maps";

export function Location() {
  return (
    <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-5 rounded-lg px-5 py-4 mobile:justify-center">
      <div className="max-w-6xl space-y-4">
        <h3 className="text-4xl font-bold mobile:text-5xl">Cerimônia 💍</h3>
        <p className="text-center text-lg font-medium mobile:text-xl">
          Estamos muito felizes em compartilhar esse momento com vocês! Nossa
          cerimônia será realizada em um espaço especial, cercado pela natureza
          e por aqueles que amamos. Esperamos vocês para celebrar esse dia
          inesquecível juntos!
        </p>

        <div className="space-y-1 text-base font-medium">
          <p className="text-lg font-semibold">
            📍 Local: <strong> Chácará San Rafael</strong>
          </p>
          <p className="text-lg font-semibold">
            📅 Data: <strong> 30/08/2025</strong>
          </p>
          <p className="text-lg font-semibold">
            ⏰ Horário: <strong> 16:15</strong>
          </p>
        </div>
      </div>

      <Maps />
    </section>
  );
}
