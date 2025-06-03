import { CopyIcon } from "../icons/CopyIcon";
import { toast } from "react-toastify";

export function Pix() {
  return (
    <div className="flex max-w-96 flex-col items-center justify-center gap-4">
      <img
        src="/images/pix-qrcode.jpg"
        alt="QRCODE PIX"
        height={250}
        width={250}
      />

      <div className="flex w-full gap-4 rounded-xl border border-gold-700 px-5 py-4 text-white">
        <p className="truncate">
          00020126990014br.gov.bcb.pix01369faf24f2-39e6-4a55-8d1c-482a2ebb071b0237Presentes
          de casamento Rodofo e Gabri5204000053039865802BR5916RODOLFO
          CARVALHO6007MARILIA62290525OfpJiQNI82FrSdD8OAOip07sX6304B455
        </p>

        <button
          type="button"
          aria-label="Copiar código PIX"
          title="Copiar código PIX"
          className="flex cursor-pointer flex-col hover:opacity-80"
          onClick={() => {
            navigator.clipboard.writeText(
              "00020126990014br.gov.bcb.pix01369faf24f2-39e6-4a55-8d1c-482a2ebb071b0237Presentes de casamento Rodofo e Gabri5204000053039865802BR5916RODOLFO CARVALHO6007MARILIA62290525OfpJiQNI82FrSdD8OAOip07sX6304B455",
            );
            toast.success("Código PIX copiado!", {
              position: "top-center",
              autoClose: 3000,
            });
          }}
        >
          <span>
            <CopyIcon />
          </span>
        </button>
      </div>
    </div>
  );
}
