import QuestionSection from "./components/QuestionSection";
import CarsSection from "./components/CarsSection";
import "antd/dist/antd.css";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { readExcel } from "./service/ExcelToData";
import { Button } from "antd";

const URL_FORM = "https://forms.gle/QkL5GUEiTaAtY7828";

function App() {
  const [cars, setCars] = useState([]);

  const carSectionRef = useRef(null);

  useEffect(() => {
    if (cars.length !== 0) {
      carSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [cars]);

  const loadCars = (answers) => {
    readExcel().then((excelCars) => recommendCars(excelCars, answers));
  };

  const recommendCars = (cars, answers) => {
    const carsFilteredByTypeAndFuel = cars.filter(
      (car) =>
        answers.CarType.includes(car["Tipo Auto"].toUpperCase()) &&
        isFuelType(car["Tipo Consumo"], answers.CarFuel)
    );
    carsFilteredByTypeAndFuel.sort((firstCar, secondCar) =>
      sortByUseSelected(firstCar, secondCar, answers.CarUse)
    );
    setCars(carsFilteredByTypeAndFuel);
  };

  const isFuelType = (fuel, answersFuel) => {
    const fuelArray = fuel.split("/");
    const filteredFuelArray = fuelArray.filter((fuelElem) =>
      answersFuel.includes(fuelElem.toUpperCase())
    );
    return filteredFuelArray.length > 0;
  };

  const sortByUseSelected = (firstCar, secondCar, carUses) => {
    return carUses.reduce((acc, use) => {
      acc += secondCar[use] - firstCar[use];
      return acc;
    }, 0);
  };

  return (
    <div className="app">
      <QuestionSection submit={loadCars} />
      <div className="logo">
        <h2>CarMatch</h2>
      </div>
      <Button
        type="primary"
        className="link-to-form-button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = URL_FORM;
        }}
      >
        <b>Antes de irte, déjanos tu comentario!</b>
      </Button>
      {cars.length !== 0 && (
        <div className="car-section" ref={carSectionRef}>
          <CarsSection cars={cars} />{" "}
        </div>
      )}
    </div>
  );
}

export default App;
