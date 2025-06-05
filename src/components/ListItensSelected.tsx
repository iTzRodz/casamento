import { useItems } from "../context/ItensContext";
import { ArrowLeftIcon } from "./icons/ArrowLeftIcon";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";
import { Gifts } from "./AddGiftToCart";
import { CalculationValueAllGifts } from "../helpers/CalculationValueAllGift";

export function ListItensSelected() {
  const { giftsList, removeGift, addToCart } = useItems();

  function handleRemoveItem(giftName: string) {
    removeGift(giftName);
  }

  function handleAddGift(gift: Gifts) {
    addToCart(gift);
  }

  return (
    <>
      <h3 className="mt-6 text-start text-xl font-semibold text-white mobile:text-2xl">
        Meu carrinho
      </h3>
      <div className="flex w-full flex-col justify-between text-base font-medium text-white/80">
        <div className="mt-2 h-px w-full bg-white/30" />
        <div className="modal-content max-h-[400px] overflow-y-auto mobile:max-h-[500px]">
          {giftsList?.map((gift, index) => (
            <div key={index} className=" mt-5 flex  w-full flex-col gap-2 pr-2">
                <div className="flex items-start justify-start gap-10">
                <img
                  src={gift.pathImg}
                  alt={gift.name}
                  height={100}
                  width={100}
                  className="max-h-12 max-w-12 rounded-lg mobile:max-h-28 mobile:max-w-28"
                />
                <div className="flex flex-col items-start  gap-4  text-sm mobile:text-base">
                  <p className="truncate text-start text-base font-semibold leading-4 text-white">
                  {gift.name}
                  </p>
                  <div className="flex gap-6">
                  <div className="flex flex-col items-center gap-2 text-sm ">
                    <div className="flex items-end gap-1">
                    <span
                      className="cursor-pointer hover:opacity-80"
                      onClick={() => handleRemoveItem(gift.name)}
                    >
                      <ArrowLeftIcon
                      className={`size-4 ${gift.quantity === 1 ? "cursor-not-allowed" : ""}`}
                      disabled={gift.quantity === 1}
                      />
                    </span>
                    <p className="font-bold text-white">{gift.quantity}</p>
                    <span
                      className="cursor-pointer hover:opacity-80"
                      onClick={() => handleAddGift(gift)}
                    >
                      <ArrowRightIcon className="size-4" />
                    </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium  text-white">
                    Total:{" "}
                    {(gift.value * gift.quantity).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                    </p>
                  </div>
                  </div>
                </div>
                </div>

              <div className="h-px w-full bg-white/30" />
            </div>
          ))}
        </div>
      </div>
      <div className="ml-auto mt-4 text-white">
        <span className="text-lg font-semibold">Total</span>{" "}
        <span className="font-medium">{CalculationValueAllGifts()}</span>
      </div>
    </>
  );
}
