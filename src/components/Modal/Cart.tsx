import { useEffect, useState } from "react";
import { Button } from "../Button";
import { CloseIcon } from "../icons/CloseIcon";
import { ListItensSelected } from "../ListItensSelected";
import { useItems } from "../../context/ItensContext";
import { OrderSummary } from "./OrderSummary";

interface ConfirmationPaymentProps {
  handleCloseModal: () => void;
}
export function Cart({ handleCloseModal }: ConfirmationPaymentProps) {
  const { giftsList } = useItems();
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (giftsList.length === 0) {
      handleCloseModal();
    }
  }, [giftsList, handleCloseModal]);

  function handleCloseModalOrderSummary() {
    setShowOrderSummary((prevState) => !prevState);
  }

  return (
    <section className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="w-full max-w-[530px] overflow-hidden rounded-xl border border-[#515E6C]/55 bg-[#1D212A] p-4 text-left align-middle shadow-xl transition-all mobile:max-w-3xl">
          <form className="flex w-full flex-col gap-2.5">
            {!showOrderSummary ? (
              <div className="flex w-full flex-col justify-start rounded-lg border border-transparent py-4 shadow mobile:px-8">
                <span
                  className="flex cursor-pointer justify-end hover:opacity-80"
                  onClick={handleCloseModal}
                >
                  <CloseIcon />
                </span>

                <h1 className="mt-4 text-3xl font-semibold text-white mobile:text-5xl">
                  Lista de presentes
                </h1>
                <ListItensSelected />
                <div className="mt-10 flex flex-col items-center justify-center gap-5 py-4 mobile:flex-row">
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={handleCloseModal}
                    type="button"
                  >
                    Adicionar mais itens
                  </Button>
                  <Button
                    variant="primary"
                    className={`w-full bg-white text-black ${showOrderSummary && "hidden"}`}
                    arrowIcon
                    type="button"
                    onClick={() => setShowOrderSummary(true)}
                  >
                    Continuar compra
                  </Button>
                </div>
              </div>
            ) : (
              <OrderSummary
                handleCloseModalOrderSummary={handleCloseModalOrderSummary}
              />
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
