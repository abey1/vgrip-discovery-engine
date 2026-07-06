import axios from "axios";

export async function searchGoogle(query: string) {
 const res = await axios.get("https://www.googleapis.com/customsearch/v1", {
   params: {
     key: process.env.GOOGLE_API_KEY,
     cx: process.env.GOOGLE_CX,
     q: query,
   },
 });

 return res.data.items || [];
}
