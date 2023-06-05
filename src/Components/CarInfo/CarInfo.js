import "./CarInfo.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const CarInfo = () => {
  console.log(useParams());
  const { id } = useParams();
  const [cars, setCars] = useState([]);
  const visibleCars = id ? cars.filter((car) => car.id_car == id) : cars;

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

  return (
    <>
      {visibleCars.map((car) => {
        return (
          <div className="car-info" key={car.id_car}>
            <div className="car-info__details">
              <img
                src={car.image}
                alt=""
                className="car-info__details__more__image"
              />
              <h1 className="car-info__details__title">
                {car.marca} <strong>{car.modelo}</strong>
              </h1>
              <div className="car-info__details__more__details">
                <div className="car-info__details__more__details__car">
                  <h2>Ano</h2>
                  <strong>{car.ano}</strong>
                </div>
                <div className="car-info__details__more__details__car">
                  <h2>KM</h2>
                  <strong>{car.km}</strong>
                </div>
                <div className="car-info__details__more__details__car">
                  <h2>Câmbio</h2>
                  <strong>{car.cambio}</strong>
                </div>
              </div>
            </div>
            <div className="car-info__contact">
              <p className="car-info__contact__message">
                Envie uma mensagem ao vendedor
              </p>
              <div className="car-info__contact__form">
                <input
                  className="car-info__contact__form__input"
                  type="text"
                  placeholder="Nome*"
                />
                <input
                  className="car-info__contact__form__input"
                  type="text"
                  placeholder="Email*"
                />
                <input
                  className="car-info__contact__form__input"
                  type="text"
                  placeholder="Telefone*"
                />
                <textarea
                  className="car-info__contact__form__input"
                  type="text"
                >
                  Olá, tenho interesse no veículo. Por favor entre em contato.
                </textarea>
              </div>
              <button className="car-info__contact__button">
                Enviar Mensagem
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default CarInfo;
