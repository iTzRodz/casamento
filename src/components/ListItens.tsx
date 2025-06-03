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
      <section className="flex flex-col gap-20 px-5 mx-auto w-full bg-zinc-900/50 py-2.5 justify-center items-center rounded-lg">
        <div className="flex flex-col gap-5 max-w-[1300px] mx-auto w-full">
          <div className="space-y-4 mt-5 max-w-6xl w-full mx-auto">
            <h3 className="font-bold text-4xl mobile:text-5xl">
              Lista de presentes!
            </h3>
            <p className="font-medium text-lg text-left mobile:text-xl">
              Sua presença já é o melhor presente, mas se quiser nos mimar um
              pouco mais, criamos uma lista de presentes divertidos e
              simbólicos. Agradecemos de coração por cada gesto de carinho!
            </p>
          </div>

          <div className="flex justify-end items-center w-full gap-4 mt-10">
            <Button variant="primary" className="hover:opacity-80 font-bold">
              PIX
            </Button>
            <Button variant="primary" className="hover:opacity-80 font-bold">
              Físicos
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-10 mobile:grid-cols-2 ipad:grid-cols-3 laptop:grid-cols-4 max-w-[1300px] w-full mx-auto">
            {itens.slice(0, visiblePresents).map((item, index) => (
              <div className="background-cards rounded-2xl p-px" key={index}>
                <div className="rounded-2xl bg-[#010202] flex flex-col size-full justify-between">
                  <div className="relative aspect-[3/4] w-full transition-all duration-300">
                    <figure className="absolute left-0 top-0 size-full overflow-hidden rounded-t-xl">
                      <img
                        src={item.img}
                        alt={item.name}
                        height={206}
                        width={206}
                        className="size-full bg-center bg-no-repeat bg-cover "
                      />
                    </figure>
                  </div>

                  <div className="flex flex-col p-4">
                    <h3 className="text-base font-semibold mt-10">
                      {item.name}
                    </h3>
                    <h3 className="font-bold text-lg mt-2">
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
          <div className="flex justify-center items-center w-full mt-10">
            {visiblePresents < itens.length && (
              <Button

                variant="primary"
                className="hover:opacity-80 font-bold w-1/3 !bg-[#171717]"
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
