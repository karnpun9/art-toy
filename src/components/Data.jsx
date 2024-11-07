import React, { useState, useEffect } from "react";
import axios from "axios";

export const Data = () => {
  const [artToyData, setArtToyData] = useState([]);
  const [heroData, setHeroData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://672a2e23976a834dd02275cf.mockapi.io/category"
        );
        const artToyProducts = response.data.filter(
          (product) => product.category === "Art Toy"
        );
        const heroProducts = response.data.filter(
          (product) => product.category === "Hero"
        );
        setArtToyData(artToyProducts);
        setHeroData(heroProducts);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data" + err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4  ">
      {heroData.map((hero) => (
        <div key={hero.id} className="bg-gray-50 m-4 p-4 rounded-lg shadow-md">
          <div className="w-4/5 justify-self-center">
            <img
              src={hero.image}
              alt={hero.name}
              className="w-auto h-32 object-contain  justify-self-center"
            />
          </div>

          <div className="mt-4">
            <p>Name : {hero.name}</p>
            <p>Price : {formatMoney(hero.price)}</p>
            <p>Materials : {hero.materials}</p>
            <p>Product Type : {hero.product_type}</p>
            <p>Category : {hero.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
