import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/searchBar";
import ImageList from "./components/imageList";
import searchImages from "./api";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="container">
      <div className="text-center m-3">
        <SearchBar onSubmit={handleSubmit} />
      </div>
      <div className="">
        <ImageList images={images} />
      </div>
    </div>
  );
}

export default App;
