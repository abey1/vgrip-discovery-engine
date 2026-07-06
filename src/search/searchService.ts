import axios from "axios";

export async function searchGoogle(query: string) {
  try {
    const response = await axios.post(
      "https://google.serper.dev/search",
      { q: query },
      {
        headers: {
          // Read at call time so it works regardless of when dotenv loads.
          "X-API-KEY": process.env.SERPER_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.organic || [];
  } catch (error) {
    const detail = axios.isAxiosError(error)
      ? error.response?.data ?? error.message
      : error;
    console.error(`[Search] Failed for "${query}":`, detail);
    return [];
  }
}
