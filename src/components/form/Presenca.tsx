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
  const [inputs, setInputs] = useState<Input[]>([])

  function addAdults(event: React.ChangeEvent<HTMLSelectElement>) {
    const length = parseInt(event.target.value, 10)

    const newInputs = Array.from({ length }, (_, index) => ({
      quantity: index + 1,
    }))

    setInputs(newInputs)
  }
  return (
    <section className="h-screen mx-0 my-auto bg-red-700">
      <form className="flex justify-center rounded-xl mx-auto my-0 bg-red-300 w-[700px]">
        <div className="flex flex-col justify-start gap-5 w-4/6">
          <h1>Confirme sua presença</h1>

          <div className="flex flex-col gap-2 justify-start items-start ">
            <span className="text-start font-semibold">Nome Completo: </span>
            <input
              className="text-start w-full h-12 p-4 rounded-lg"
              placeholder="Insira seu nome completo"
            />
          </div>
          <div className="flex flex-col gap-2 justify-start items-start ">
            <span className="text-start font-semibold">E-mail </span>
            <input
              className="text-start w-full h-12 p-4 rounded-lg"
              placeholder="exemplo@teste.com"
            />
          </div>

          <div className="flex flex-col justify-start items-start ">
            <p className="mr-6 text-start font-semibold">Você irá ao evento?</p>
            <div className="flex gap-5 ml-2">
              <div className="flex">
                <input
                  type="radio"
                  name="attendance"
                  value="1"
                  defaultChecked
                />
                <label htmlFor="1">Sim</label>
              </div>
              <div>
                <input type="radio" name="attendance" value="0" />
                <label htmlFor="1">Não</label>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-center">
            {/* <button type="button" onClick={addAdults}>
              Adicionar
            </button> */}

            <label htmlFor="adultCount" className="w-56 text-start">
              Quantidade de adultos incluindo você
            </label>
            <select
              name="adultCount"
              id="adultCount"
              onChange={(e) => addAdults(e)}
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
          {inputs.map((input, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 justify-start items-start "
            >
              <span className="text-start font-semibold">Nome Completo: </span>
              <div className="flex w-full items-center gap-2">
                <input
                  required
                  className="text-start w-full h-12 p-4 rounded-lg"
                  placeholder="Insira seu nome completo"
                />
              </div>
            </div>
          ))}
          <div className="flex justify-start">
            <label htmlFor="childCount">Quantidade de crianças</label>
            <select name="childCount" id="childCount">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
              <option value="4">6</option>
              <option value="4">7</option>
              <option value="4">8</option>
              <option value="4">9</option>
              <option value="4">10</option>
            </select>
          </div>
        </div>
      </form>
    </section>
  )
}
