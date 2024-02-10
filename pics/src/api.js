import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID xQjZ_qfsk1k9_VOjfIrut9-KCAStstswdr3twZD3fSg",
    },
    params: {
      query: term,
    },
  });
  
  return response.data.results;
};

export default searchImages;
