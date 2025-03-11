import { CopyIcon } from '../icons/CopyIcon'

export function Pix() {
  return (
    <div className="flex flex-col justify-center items-center max-w-96 gap-4">
      <img
        src="/images/pix-qrcode.jpg"
        alt="QRCODE PIX"
        height={250}
        width={250}
      />

      <div className="border border-gold-700 rounded-xl flex w-full text-white py-4 px-5 gap-4">
        <p className="truncate">
          00020126990014br.gov.bcb.pix01369faf24f2-39e6-4a55-8d1c-482a2ebb071b0237Presentes
          de casamento Rodofo e Gabri5204000053039865802BR5916RODOLFO
          CARVALHO6007MARILIA62290525OfpJiQNI82FrSdD8OAOip07sX6304B455
        </p>

        <span className="hover:opacity-80 cursor-pointer">
          <CopyIcon />
        </span>
      </div>
    </div>
  )
}
