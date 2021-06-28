import React from "react";
import { List, Card, Image, Button } from "antd";

export default function CarsSection({ cars = [] }) {
  const goTo = (link) => {
    window.location.href = link;
  };

  return (
    <Card className="card">
      <List className="list">
        {cars.map((car, index) => (
          <List.Item className="item" key={index}>
            <Image src={car.Imagen} width={240} height={120} />
            <p style={{ width: "100px" }}>{car.Vehiculo}</p>
            <Button
              type="primary"
              onClick={(e) => {
                e.preventDefault();
                goTo(car["Pagina Oficial"]);
              }}
            >
              Quiero saber más!
            </Button>
            <Button
              type="primary"
              onClick={(e) => {
                e.preventDefault();
                goTo(car["Financiacion credito"]);
              }}
            >
              Quiero ver financiación por Crédito!
            </Button>
            <Button
              type="primary"
              onClick={(e) => {
                e.preventDefault();
                goTo(car["Plan de Ahorro"]);
              }}
            >
              Quiero ver financiación por Plan!
            </Button>
          </List.Item>
        ))}
      </List>
    </Card>
  );
}
