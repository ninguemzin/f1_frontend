import React, { useEffect, useState } from "react";
import { CarCard, CarGrid } from "./styles";
import axios from "axios";

const CarMap = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await axios.get("http://localhost:8000/home/"); // Substitua '/api/cars' pela URL correta do seu backend
        setCars(response.data.db);
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
        {cars.map((form) => (
          <CarCard key={form.id} className="car-card">
            <h2>{form.modelo}</h2>
            <p>{form.marca}</p>
            <p>{form.ano}</p>
          </CarCard>
        ))}
      </CarGrid>
    </div>
  );
};

export default CarMap;
