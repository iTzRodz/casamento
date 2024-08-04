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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-5 p-4 max-w-[1280px]">
      {itens.map((item, index) => (
        <div
          key={index}
          className="rounded-lg bg-[#1a1a1a] flex flex-col justify-center items-center p-4"
        >
          <img
            src={item.img}
            alt={item.name}
            height={206}
            width={206}
            className="size-full rounded-md  bg-center bg-no-repeat bg-cover "
          />
          <h3 className="text-sm font-semibold mt-10">{item.name}</h3>
          <h3>
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
  )
}
