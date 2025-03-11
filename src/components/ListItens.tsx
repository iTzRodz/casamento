import { useEffect, useRef, useState } from 'react'
import { Cart } from './Modal/Cart'
import { Button } from './Button'
import { useItems } from '../context/ItensContext'
import autoAnimate from '@formkit/auto-animate'

interface Itens {
  name: string
  value: number
  img: string
}
export function ListItens() {
  const { addToCart } = useItems()
  const [itens, setItens] = useState<Itens[]>([])
  const [modal, setModal] = useState<boolean>(false)
  const parent = useRef(null)
  useEffect(() => {
    fetch('/itens.json')
      .then(response => response.json())
      .then(data => setItens(data))
      .catch(error => console.error('Erro ao carregar os itens:', error))
  }, [])

  function handleModalPayment(data: Itens) {
    const { img, name, value } = data

    setModal(prevState => !prevState)
    addToCart({ name, value, pathImg: img, quantity: 1 })
  }

  function handleCloseModal() {
    setModal(false)
  }

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <>
      <div className="flex flex-col gap-20 px-5">
        <div className="grid grid-cols-1 gap-10 mobile:grid-cols-2 ipad:grid-cols-3 laptop:grid-cols-4 ">
          {itens.map((item, index) => (
            <div className="background-cards rounded-2xl p-px" key={index}>
              <div className="rounded-2xl bg-[#010202] flex flex-col size-full justify-between">
                <div className="relative aspect-[3/4] w-full transition-all duration-300">
                  <figure className="absolute left-0 top-0 size-full overflow-hidden rounded-xl">
                    <img
                      src={item.img}
                      alt={item.name}
                      height={206}
                      width={206}
                      className="size-full rounded-sm  bg-center bg-no-repeat bg-cover "
                    />
                  </figure>
                </div>

                <div className="flex flex-col p-4">
                  <h3 className="text-base font-semibold mt-10">{item.name}</h3>
                  <h3 className="font-bold text-lg mt-2">
                    {item.value.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </h3>

                  <Button
                    variant="primary"
                    onClick={() => handleModalPayment(item)}
                    className="mt-2 w-full  hover:bg-opacity-50"
                  >
                    Presentear
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div ref={parent}>
        {modal && <Cart handleCloseModal={handleCloseModal} />}
      </div>
    </>
  )
}
