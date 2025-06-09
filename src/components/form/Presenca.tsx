import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveFormData } from "../../store";
import { toast } from "react-toastify";

interface Input {
  quantity: number;
}

const validationFormSchema = zod.object({
  isGoToEvent: zod.enum(["1", "0"]),
  phone: zod.string().min(1),
  name: zod.string().min(1),
  adultCount: zod.number(),
  childCount: zod.number(),
  adultHouseHold: zod.object({
    count: zod.number(),
    names: zod.array(zod.string()).optional(),
  }),
});

export type FormData = zod.infer<typeof validationFormSchema>;
export function ConfirmPresenca() {
  const [inputs, setInputs] = useState<Input[]>([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch, setValue } = useForm<FormData>({
    resolver: zodResolver(validationFormSchema),
    defaultValues: {
      phone: "",
      isGoToEvent: "1",
      name: "",
      adultCount: 1,
      childCount: 0,
      adultHouseHold: {
        count: 0,
        names: [],
      },
    },
  });

  function addAdults(amountOfAdults: number) {
    const length = amountOfAdults;

    const newInputs = Array.from({ length }, (_, index) => ({
      quantity: index + 1,
    }));

    setInputs(newInputs);
  }

  const adultCount = watch("adultHouseHold.count");
  const isGoToEvent = watch("isGoToEvent");
  useEffect(() => {
    const currentNames = watch("adultHouseHold.names") || [];
    addAdults(adultCount);

    if (currentNames.length !== adultCount) {
      const newNames = Array.from(
        { length: adultCount },
        (_, i) => currentNames[i] || "",
      );
      setValue("adultHouseHold.names", newNames);
    }
  }, [adultCount, setValue, watch]);

  async function handleSubimitForm(data: FormData) {
    setLoading(true);
    data.phone = data.phone.replace(/\D/g, "");

    await saveFormData(data).then((res) => {
      if (res.status !== 201) {
        const { data } = res;
        toast.error(data, {
          position: "top-center",
        });
        setLoading(false);
        return;
      }

      setSuccess(true);
    });
  }

  function maskPhone(value: string) {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const masked = maskPhone(e.target.value);
    setValue("phone", masked);
  }
  return (
    <section className=" mx-auto rounded-lg px-5">
      {success ? (
        <div className="mx-auto flex w-full flex-col justify-center gap-2 rounded-lg border border-[#1a1a1a] px-8 py-4 lg:w-[1024px]">
          <h3 className="text-2xl font-bold">
            Muito obrigado por responder ao nosso formulário de casamento!
          </h3>
          <p className="text-base font-medium">
            Agradecemos de coração por ter dedicado um tempinho para nos
            informar — sua resposta é muito importante para que possamos nos
            organizar com carinho e cuidado.
          </p>
          <p className="text-base font-medium">Com gratidão,</p>
          <p className="mt-3 text-xl font-bold">Gabriela & Rodolfo</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(handleSubimitForm)}
          className="mx-auto my-0 mt-10 flex justify-center rounded-xl lg:w-[1024px]"
        >
          <div className="flex w-full flex-col justify-start gap-8 rounded-lg border border-[#1a1a1a] px-8 py-4">
            <h3 className="text-3xl font-bold mobile:text-5xl">
              Confirme sua presença
            </h3>

            <div className="mt-5 flex w-full flex-col gap-5 lg:flex-row">
              <div className="flex w-full flex-col items-start justify-start  gap-2">
                <span className="text-start text-lg/3 font-semibold">
                  Nome Completo:{" "}
                </span>
                <input
                  className="h-12 w-full rounded-lg p-4 text-start outline-none placeholder:text-sm focus:border focus:border-amber-400"
                  placeholder="Insira seu nome completo"
                  {...register("name")}
                />
              </div>

              <div className="flex w-full flex-col items-start justify-start gap-2">
                <span className="text-start text-lg/3 font-semibold ">
                  Telefone para contato:{" "}
                </span>
                <input
                  className="h-12 w-full rounded-lg p-4 text-start outline-none placeholder:text-sm placeholder:uppercase focus:border focus:border-amber-400"
                  placeholder="(xx) xxxxx-xxxx"
                  type="tel"
                  title="Formato: (xx) xxxxx-xxxx"
                  id="phone"
                  {...register("phone")}
                  onChange={handlePhoneChange}
                  maxLength={15}
                />
              </div>
            </div>

            <div className="flex flex-col items-start justify-start ">
              <p className="mr-6 text-start text-lg/3 font-semibold">
                Você irá ao evento?
              </p>
              <div className="ml-2 mt-2 flex gap-5">
                <div className="flex gap-2">
                  <input
                    className="cursor-pointer"
                    type="radio"
                    value="1"
                    defaultChecked
                    {...register("isGoToEvent")}
                  />
                  <label htmlFor="1" className="font-medium">
                    Sim
                  </label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    value="0"
                    className="cursor-pointer"
                    {...register("isGoToEvent")}
                  />
                  <label htmlFor="1" className="font-medium">
                    Não
                  </label>
                </div>
              </div>
            </div>

            {isGoToEvent === "1" && (
              <>
                <div className="flex items-stretch justify-start gap-4">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="adultCount"
                      className="text-start text-lg font-semibold leading-5"
                    >
                      Quantidade de adultos sem incluir você
                    </label>
                    <p className="m-0 text-sm font-medium text-zinc-500">
                      (Incluir crianças apartir de 6 anos de idade)
                    </p>
                  </div>
                  <select
                    id="adultCount"
                    // onChange={(e) => addAdults(e)}
                    className="hover:bg-inherit/80 group h-8 w-12 cursor-pointer rounded text-center font-semibold"
                    {...register("adultHouseHold.count", {
                      valueAsNumber: true,
                    })}
                  >
                    <option label="0" value={0} defaultChecked>
                      0
                    </option>
                    <option label="1" value={1}>
                      1
                    </option>
                    <option label="2" value={2}>
                      2
                    </option>
                    <option label="3" value={3}>
                      3
                    </option>
                    <option label="4" value={4}>
                      4
                    </option>
                    <option label="5" value={5}>
                      5
                    </option>
                    <option label="6" value={6}>
                      6
                    </option>
                  </select>
                </div>
                <div className="grid w-full grid-cols-1 items-start justify-start  gap-x-5 gap-y-10 lg:grid-cols-2">
                  {inputs.length > 0 &&
                    inputs.map((_input, index) => (
                      <div key={index} className="flex w-full flex-col gap-2">
                        <span className="text-start text-lg/3 font-semibold">
                          Nome Completo:{" "}
                        </span>
                        <input
                          className="h-12 w-full rounded-lg p-4 text-start outline-none placeholder:text-sm focus:border focus:border-amber-400"
                          placeholder="Insira seu nome completo"
                          required
                          id={`adultHouseHold.names.${index}`}
                          {...register(`adultHouseHold.names.${index}`)}
                        />
                      </div>
                    ))}
                </div>

                <div className="flex items-baseline justify-start gap-4">
                  <label
                    htmlFor="childCount"
                    className="text-start text-lg font-semibold leading-5"
                  >
                    Quantidade de crianças
                  </label>
                  <select
                    id="childCount"
                    className="hover:bg-inherit/80 group h-8 w-12 cursor-pointer rounded text-center font-semibold"
                    {...register("childCount", { valueAsNumber: true })}
                  >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                  </select>
                </div>
              </>
            )}

            <div className="mt-5 flex w-full items-center justify-center">
              <Button
                className="w-full max-w-96 hover:opacity-80"
                variant="primary"
                type="submit"
                loading={loading}
              >
                {loading ? "Carregando..." : "Enviar"}
              </Button>
            </div>
          </div>
        </form>
      )}
    </section>
  );
}
