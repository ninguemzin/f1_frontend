import React, { useEffect, useState } from "react";
import { CarCard, CarGrid } from "./styles";
import axios from "axios";

const CarMap = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/app//");
        console.log(response.data);
        setCars(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCars();
  }, []);

  if (!Array.isArray(cars)) {
    return <p>Dados de carros inválidos</p>;
  }
  return (
    <div>
      <h1>Carros</h1>
      <CarGrid>
        {cars.map((car) => (
          <CarCard key={car.id_car} className="car-card">
            <h2>{car.modelo}</h2>
            <p>{car.marca}</p>
            <p>{car.ano}</p>
            <p>{car.km}</p>
            <p>{car.cambio}</p>
            {car.image && (
              <img
                src={car.image}
                alt="Car"
                onLoad={() => console.log("Imagem carregada:", car.image)}
              />
            )}
          </CarCard>
        ))}
      </CarGrid>
    </div>
  );
};

export default CarMap;
