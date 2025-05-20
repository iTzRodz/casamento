import { useState } from 'react'
import { Pix } from './Pix'
import { Ted } from './Ted'
import classNames from 'classnames'

type MethodPayment = 'pix' | 'ted'
export function MethodPayment() {
  const [method, setMethod] = useState<MethodPayment>('pix')
  const selectedItem = 'border-white !bg-gold-300'
  // const borderSelected = 'border-white'
  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div className="flex gap-3 justify-center items-center w-full">
        <div
          className={classNames(
            'text-black font-bold shadow-md bg-gold-300/95 rounded-md max-w-64 w-full py-2 cursor-pointer flex flex-col select-none border-2 border-transparent',
            method === 'pix' && selectedItem
          )}
          onClick={() => setMethod('pix')}
        >
          <span className="w-full">PIX</span>
        </div>

        <div
          className={classNames(
            'text-black font-bold shadow-md bg-gold-300/95 rounded-md max-w-64 w-full py-2 cursor-pointer select-none border-2 border-transparent',
            method === 'ted' && selectedItem
          )}
          onClick={() => setMethod('ted')}
        >
          <span>TED</span>
        </div>
      </div>
      {method === 'ted' ? <Ted /> : <Pix />}
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <h3 className='text-white text-xl font-semibold'>
          Atenção: O site não possui integração com plataformas de pagamento.
        </h3>
        <p className='text-white text-base font-medium'>
          Após concluir a compra, nenhuma confirmação automática será exibida e
          você permanecerá na mesma tela.<br/> Fique tranquilo(a), sua participação
          será registrada normalmente.
        </p>
      </div>
    </div>
  )
}
