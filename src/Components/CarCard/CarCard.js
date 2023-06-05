import "./CarCard.css";

const CarCard = ({ cars }) => {
  console.log(cars);
  return (
    <>
      {cars.map((car) => {
        return (
          <div key={car.id_car} className="car-card">
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
