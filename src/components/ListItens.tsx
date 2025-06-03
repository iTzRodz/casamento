import { useEffect, useRef, useState } from "react";
import { Cart } from "./Modal/Cart";
import { Button } from "./Button";
import { useItems } from "../context/ItensContext";
import autoAnimate from "@formkit/auto-animate";

interface Itens {
  name: string;
  value: number;
  img: string;
}
export function ListItens() {
  const { addToCart } = useItems();
  const [itens, setItens] = useState<Itens[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [visiblePresents, setVisiblePresents] = useState(8);
  const parent = useRef(null);
  useEffect(() => {
    fetch("/itens.json")
      .then((response) => response.json())
      .then((data) => setItens(data))
      .catch((error) => console.error("Erro ao carregar os itens:", error));
  }, []);

  function handleModalPayment(data: Itens) {
    const { img, name, value } = data;

    setModal((prevState) => !prevState);
    addToCart({ name, value, pathImg: img, quantity: 1 });
  }

  function handleCloseModal() {
    setModal(false);
  }

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <>
      <section className="mx-auto flex w-full flex-col items-center justify-center gap-20 rounded-lg bg-zinc-900/50 px-5 py-2.5">
        <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-5">
          <div className="mx-auto mt-5 w-full max-w-6xl space-y-4">
            <h3 className="text-4xl font-bold mobile:text-5xl">
              Lista de presentes!
            </h3>
            <p className="text-left text-lg font-medium mobile:text-xl">
              Sua presença já é o melhor presente, mas se quiser nos mimar um
              pouco mais, criamos uma lista de presentes divertidos e
              simbólicos. Agradecemos de coração por cada gesto de carinho!
            </p>
          </div>

          <div className="mt-10 flex w-full items-center justify-end gap-4">
            <Button variant="primary" className="font-bold hover:opacity-80">
              PIX
            </Button>
            <Button variant="primary" className="font-bold hover:opacity-80">
              Físicos
            </Button>
          </div>

          <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-10 mobile:grid-cols-2 ipad:grid-cols-3 laptop:grid-cols-4">
            {itens.slice(0, visiblePresents).map((item, index) => (
              <div className="background-cards rounded-2xl p-px" key={index}>
                <div className="flex size-full flex-col justify-between rounded-2xl bg-[#010202]">
                  <div className="relative aspect-[3/4] w-full transition-all duration-300">
                    <figure className="absolute left-0 top-0 size-full overflow-hidden rounded-t-xl">
                      <img
                        src={item.img}
                        alt={item.name}
                        height={206}
                        width={206}
                        className="size-full bg-cover bg-center bg-no-repeat "
                      />
                    </figure>
                  </div>

                  <div className="flex flex-col p-4">
                    <h3 className="mt-10 text-base font-semibold">
                      {item.name}
                    </h3>
                    <h3 className="mt-2 text-lg font-bold">
                      {item.value.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
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
          <div className="mt-10 flex w-full items-center justify-center">
            {visiblePresents < itens.length && (
              <Button
                variant="primary"
                className="w-1/3 !bg-[#171717] font-bold hover:opacity-80"
                onClick={() => setVisiblePresents((prev) => prev + 4)}
              >
                Ver mais
              </Button>
            )}
          </div>
        </div>
      </section>
      <div ref={parent}>
        {modal && <Cart handleCloseModal={handleCloseModal} />}
      </div>
    </>
  );
}
