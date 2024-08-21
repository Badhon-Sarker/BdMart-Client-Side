import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const { query } = useParams();
  const [result, setResult] = useState([]);
  console.log(result)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/Search?search=${query}`)
      .then((res) => {
        setResult(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [query]);

  return <div></div>;
};

export default Search;
