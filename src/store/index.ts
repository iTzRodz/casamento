import { FormData } from "../components/form/Presenca";

export async function saveFormData(body: FormData) {
  const url = import.meta.env.VITE_BASE_URL;

  try {
    const response = await fetch(`${url}/form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const data = await response.json();
      return { status: response.status, data: data.message };
    }

    const data = await response.json();
    return { data, status: response.status };
  } catch (error) {
    return {
      data: `NetworkError when attempting to fetch resource.`,
      status: 500,
    };
  }
}
