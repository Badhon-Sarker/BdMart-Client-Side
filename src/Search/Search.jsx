import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard/ProductCard";

const Search = () => {
  const { query } = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/Search?search=${query}`)
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [query]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {result?.map((item) => (
          <ProductCard key={item._id} item={item}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Search;
