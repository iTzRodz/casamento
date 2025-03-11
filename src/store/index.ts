import { FormData } from '../components/form/Presenca'

export async function saveFormData(body: FormData) {
  const url = import.meta.env.VITE_BASE_URL

  try {
    const response = await fetch(`${url}/form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (response.status === 200) {
      return { response: response.json(), status: response.status }
    }
  } catch (error) {
    return { error: `NetworkError when attempting to fetch resource.` , status: 500 }
  }
}
