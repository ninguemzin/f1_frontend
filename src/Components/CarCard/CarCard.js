import "./CarCard.css";
import { useNavigate } from "react-router-dom";

const CarCard = ({ cars }) => {
  const navigate = useNavigate();
  const selectCar = (carId) => {
    navigate(`/cars/${carId}`);
  };
  return (
    <>
      {cars.map((car) => {
        return (
          <div
            key={car.id_car}
            className="car-card"
            onClick={() => selectCar(car.id_car)}
          >
            <img className="car-card__image" src={car.image} />
            <div className="car-card__body">
              <p className="car-card__body__title">
                {car.marca} {car.modelo}
              </p>
              <p>{car.cambio}</p>
            </div>
            <div className="car-card__footer">
              <p>Ano {car.ano}</p>
              <p>{car.km}km</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default CarCard;
