import { useState } from 'react'

interface Input {
  quantity: number
}
interface Form {
  adultCount: number
  childCount: number
  name: string
  email: string
}
export function ConfirmPresenca() {
  const [inputs, setInputs] = useState<Input[]>([{ quantity: 1 }])

  function addAdults(event: React.ChangeEvent<HTMLSelectElement>) {
    const length = parseInt(event.target.value, 10)

    const newInputs = Array.from({ length }, (_, index) => ({
      quantity: index + 1,
    }))

    setInputs(newInputs)
  }
  return (
    <section className="h-screen mx-0 my-auto mt-20 rounded-lg">
      <form className="flex justify-center rounded-xl mx-auto my-0 lg:w-[1024px] mt-10">
        <div className="flex w-full flex-col justify-start gap-8 px-8 py-4 border border-[#1a1a1a] rounded-lg">
          <h1 className="font-bold">Confirme sua presença</h1>

          <div className="flex lg:flex-row flex-col w-full mt-5 gap-5">
            <div className="flex flex-col gap-2 justify-start items-start  w-full">
              <span className="text-start font-semibold text-lg/3">
                Nome Completo:{' '}
              </span>
              <input
                className="text-start w-full h-12 p-4 rounded-lg placeholder:capitalize placeholder:text-sm outline-none focus:border focus:border-amber-400"
                placeholder="Insira seu nome completo"
              />
            </div>

            <div className="flex flex-col gap-2 justify-start items-start w-full">
              <span className="text-start font-semibold text-lg/3 ">
                E-mail{' '}
              </span>
              <input
                className="text-start w-full h-12 p-4 rounded-lg placeholder:text-sm outline-none focus:border focus:border-amber-400"
                placeholder="exemplo@teste.com"
              />
            </div>
          </div>

          <div className="flex flex-col justify-start items-start ">
            <p className="mr-6 text-start font-semibold text-lg/3">
              Você irá ao evento?
            </p>
            <div className="flex gap-5 ml-2 mt-2">
              <div className="flex gap-2">
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="attendance"
                  value="1"
                  defaultChecked
                />
                <label htmlFor="1" className="font-medium">
                  Sim
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="attendance"
                  value="0"
                  className="cursor-pointer"
                />
                <label htmlFor="1" className="font-medium">
                  Não
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-stretch gap-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="adultCount"
                className="text-start font-semibold text-lg/3"
              >
                Quantidade de adultos incluindo você
              </label>
              <p className="m-0 text-sm text-zinc-500">
                (Incluir crianças apartir de 6 anos de idade)
              </p>
            </div>
            <select
              name="adultCount"
              id="adultCount"
              onChange={(e) => addAdults(e)}
              className="group rounded text-center cursor-pointer w-12 h-8 font-semibold hover:bg-inherit/80"
            >
              <option label="1" value="1">
                1
              </option>
              <option label="2" value="2">
                2
              </option>
              <option label="3" value="3">
                3
              </option>
              <option label="4" value="4">
                4
              </option>
              <option label="5" value="5">
                5
              </option>
              <option label="6" value="6">
                6
              </option>
              <option label="7" value="7">
                7
              </option>
              <option label="8" value="8">
                8
              </option>
              <option label="9" value="9">
                9
              </option>
              <option label="10" value="10">
                10
              </option>
            </select>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-5  justify-start items-start w-full">
            {inputs.map((input, index) => (
              <div key={index} className="flex flex-col gap-2 w-full">
                <span className="text-start font-semibold text-lg/3">
                  Nome Completo:{' '}
                </span>
                <input
                  required
                  className="text-start w-full h-12 p-4 rounded-lg placeholder:capitalize placeholder:text-sm outline-none focus:border focus:border-amber-400"
                  placeholder="Insira seu nome completo"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-start gap-4 items-baseline">
            <label
              htmlFor="childCount"
              className="text-start font-semibold text-lg/3"
            >
              Quantidade de crianças
            </label>
            <select
              name="childCount"
              id="childCount"
              className="group rounded text-center cursor-pointer w-12 h-8 font-semibold hover:bg-inherit/80"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      </form>
    </section>
  )
}
