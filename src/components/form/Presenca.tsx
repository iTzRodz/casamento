import { useEffect, useState } from 'react'
import { Button } from '../Button'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { saveFormData } from '../../store'

interface Input {
  quantity: number
}

const validationFormSchema = zod.object({
  isGoToEvent: zod.enum(['1', '0']),
  email: zod.string().min(1).email(),
  name: zod.string().min(1),
  adultCount: zod.number(),
  childCount: zod.number(),
  adultHouseHold: zod.object({
    count: zod.number(),
    names: zod.array(zod.string()).optional()
  })
})

export type FormData = zod.infer<typeof validationFormSchema>
export function ConfirmPresenca() {
  const [inputs, setInputs] = useState<Input[]>([])
  const [sucess, setSucess] = useState(false)
  const { register, handleSubmit, watch } = useForm<FormData>({
    resolver: zodResolver(validationFormSchema),
    defaultValues: {
      email: '',
      isGoToEvent: '1',
      name: '',
      adultCount: 1,
      childCount: 0,
      adultHouseHold: {
        count: 0,
        names: []
      }
    }
  })

  function addAdults(amountOfAdults: number) {
    const length = amountOfAdults

    const newInputs = Array.from({ length }, (_, index) => ({
      quantity: index + 1
    }))

    setInputs(newInputs)
  }

  const adultCount = watch('adultHouseHold.count')
  const isGoToEvent = watch('isGoToEvent')
  useEffect(() => {
    addAdults(adultCount)
  }, [adultCount])

  async function handleSubimitForm(data: FormData) {
    await saveFormData(data).then(res => {
      if (res?.status !== 500) {
        
      }
      console.log(res)

      // setSucess(true)
    })
  }
  return (
    <section className="h-screen mx-0 my-auto mt-20 rounded-lg">
      {sucess ? (
        <div className="flex w-full flex-col justify-start gap-8 px-8 py-4 border border-[#1a1a1a] rounded-lg">
          <h3>dsadsalhdsçal</h3>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(handleSubimitForm)}
          className="flex justify-center rounded-xl mx-auto my-0 lg:w-[1024px] mt-10"
        >
          <div className="flex w-full flex-col justify-start gap-8 px-8 py-4 border border-[#1a1a1a] rounded-lg">
            <h1 className="font-bold">Confirme sua presença</h1>

            <div className="flex lg:flex-row flex-col w-full mt-5 gap-5">
              <div className="flex flex-col gap-2 justify-start items-start  w-full">
                <span className="text-start font-semibold text-lg/3">
                  Nome Completo:{' '}
                </span>
                <input
                  className="text-start w-full h-12 p-4 rounded-lg placeholder:text-sm outline-none focus:border focus:border-amber-400"
                  placeholder="Insira seu nome completo"
                  {...register('name')}
                />
              </div>

              <div className="flex flex-col gap-2 justify-start items-start w-full">
                <span className="text-start font-semibold text-lg/3 ">
                  E-mail{' '}
                </span>
                <input
                  className="text-start w-full h-12 p-4 rounded-lg placeholder:text-sm outline-none focus:border focus:border-amber-400"
                  placeholder="exemplo@teste.com"
                  {...register('email')}
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
                    value="1"
                    defaultChecked
                    {...register('isGoToEvent')}
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
                    {...register('isGoToEvent')}
                  />
                  <label htmlFor="1" className="font-medium">
                    Não
                  </label>
                </div>
              </div>
            </div>

            {isGoToEvent === '1' ? (
              <>
                <div className="flex justify-start items-stretch gap-4">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="adultCount"
                      className="text-start font-semibold text-lg/3"
                    >
                      Quantidade de adultos sem incluir você
                    </label>
                    <p className="m-0 text-sm text-zinc-500 font-medium">
                      (Incluir crianças apartir de 6 anos de idade)
                    </p>
                  </div>
                  <select
                    id="adultCount"
                    // onChange={(e) => addAdults(e)}
                    className="group rounded text-center cursor-pointer w-12 h-8 font-semibold hover:bg-inherit/80"
                    {...register('adultHouseHold.count', {
                      valueAsNumber: true
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
                    <option label="7" value={7}>
                      7
                    </option>
                    <option label="8" value={8}>
                      8
                    </option>
                    <option label="9" value={9}>
                      9
                    </option>
                    <option label="10" value={10}>
                      10
                    </option>
                  </select>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-5  justify-start items-start w-full">
                  {inputs.length > 0 &&
                    inputs.map((input, index) => (
                      <div key={index} className="flex flex-col gap-2 w-full">
                        <span className="text-start font-semibold text-lg/3">
                          Nome Completo:{' '}
                        </span>
                        <input
                          className="text-start w-full h-12 p-4 rounded-lg placeholder:text-sm outline-none focus:border focus:border-amber-400"
                          placeholder="Insira seu nome completo"
                          required
                          id={`adultHouseHold.names.${index}`}
                          {...register(`adultHouseHold.names.${index}`)}
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
                    id="childCount"
                    className="group rounded text-center cursor-pointer w-12 h-8 font-semibold hover:bg-inherit/80"
                    {...register('childCount', { valueAsNumber: true })}
                  >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </>
            ) : (
              <div>
                sexodsadsa
                <p>dsadsa</p>
              </div>
            )}

            <div className="w-full flex justify-center items-center mt-5">
              <Button className="w-1/2" variant="primary" type="submit">
                Enviar
              </Button>
            </div>
          </div>
        </form>
      )}
    </section>
  )
}
