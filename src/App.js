import QuestionSection from "./components/QuestionSection";
import CarsSection from "./components/CarsSection";
import "antd/dist/antd.css";
import "./App.css";
import { useState } from "react";
import { readExcel } from "./service/ExcelToData";

function App() {
  const [cars, setCars] = useState([]);

  const loadCars = (answers) => {
    readExcel().then((excelCars) => recommendCars(excelCars, answers));
  };

  const recommendCars = (cars, answers) => {
    console.log(cars);
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
      <CarsSection cars={cars} />
    </div>
  );
}

export default App;
