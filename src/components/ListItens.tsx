import { useEffect, useState } from 'react'
interface Itens {
  name: string
  value: number
  img: string
}
export function ListItens() {
  const [itens, setItens] = useState<Itens[]>([])
  useEffect(() => {
    fetch('/itens.json')
      .then((response) => response.json())
      .then((data) => setItens(data))
      .catch((error) => console.error('Erro ao carregar os itens:', error))
  }, [])

  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-1 gap-10 mobile:grid-cols-2 ipad:grid-cols-3 laptop:grid-cols-4 ">
        {itens.map((item, index) => (
          <div
            key={index}
            className="rounded-lg bg-[#1a1a1a] flex flex-col justify-center items-center p-4 max-w-md max-h-96 lg:max-h-none lg:max-w-none"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl transition-all duration-300">
              <div className="absolute left-0 top-0 size-full">
                <img
                  src={item.img}
                  alt={item.name}
                  height={206}
                  width={206}
                  className="size-full rounded-sm  bg-center bg-no-repeat bg-cover "
                />
              </div>
            </div>
            <h3 className="text-base font-semibold mt-10">{item.name}</h3>
            <h3 className="font-bold text-lg">
              {item.value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </h3>

            <button className="w-40 h-12 rounded-lg bg-black mt-2 ease-in-out hover:bg-black/90 text-center items-center p-2 font-medium">
              Presentear
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
