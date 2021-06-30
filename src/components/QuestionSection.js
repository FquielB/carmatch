import React from "react";
import { Form, Button, Card, Checkbox, Image } from "antd";

export default function QuestionSection({ submit }) {
  const submitForm = (answers) => {
    submit(answers);
  };

  return (
    <Card className="card">
      <Form onFinish={submitForm}>
        <Form.Item
          name="CarType"
          label="¿Que tipo de auto buscas?"
          className="form-item"
          rules={[
            {
              required: true,
              message: "Elije al menos un tipo de auto!",
            },
          ]}
        >
          <Checkbox.Group className="check-group">
            <div className="check-with-image">
              <Image src="./icons/suv.png" width={75} height={75} />
              <Checkbox value={"SUV"}>SUV</Checkbox>
            </div>
            <div className="check-with-image">
              <Image src="./icons/hatchback.png" width={75} height={75} />
              <Checkbox value={"HATCHBACK"}>Hatchback</Checkbox>
            </div>
            <div className="check-with-image">
              <Image src="./icons/sedan.png" width={75} height={75} />
              <Checkbox value={"SEDAN"}>Sedan</Checkbox>
            </div>
            <div className="check-with-image">
              <Image src="./icons/pickup.png" width={75} height={75} />
              <Checkbox value={"PICK-UP"}>Pick-up</Checkbox>
            </div>
            <div className="check-with-image">
              <Image src="./icons/utility.png" width={75} height={75} />
              <Checkbox value={"UTILITARIO"}>Utilitario</Checkbox>
            </div>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          name="CarFuel"
          label="¿Que combustible preferis? (Si no estas seguro selecciona ambos)"
          className="form-item"
          rules={[
            {
              required: true,
              message: "Elije al menos un tipo de combustible!",
            },
          ]}
        >
          <Checkbox.Group className="check-group">
            <div className="check-with-image">
              <Image src="./icons/nafta.png" width={75} height={75} />
              <Checkbox value={"NAFTA"}>Nafta</Checkbox>
            </div>
            <div className="check-with-image">
              <Image src="./icons/diesel.png" width={75} height={75} />
              <Checkbox value={"DIESEL"}>Diesel </Checkbox>
            </div>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          name="CarUse"
          label="¿Para que lo usuarias?"
          className="form-item"
          rules={[
            {
              required: true,
              message: "Elije al menos un uso!",
            },
          ]}
        >
          <Checkbox.Group className="check-group">
            <div className="check-with-image">
              <Image src="./icons/city.png" width={75} height={75} />
              <Checkbox value={"Ciudad"}>Para manejar en la ciudad</Checkbox>
            </div>
            <div className="check-with-image">
              <Image src="./icons/field.png" width={75} height={75} />
              <Checkbox value={"Campo"}>Para manejar en el campo</Checkbox>
            </div>
            <div className="check-with-image">
              <Image src="./icons/show.png" width={75} height={75} />
              <Checkbox value={"Diseño"}>Para mostrar por su diseño</Checkbox>
            </div>
            <div className="check-with-image">
              <Image src="./icons/long-distance.png" width={75} height={75} />
              <Checkbox value={"Viaje largo"}>Para viajes largos</Checkbox>
            </div>
            <div className="check-with-image">
              <Image src="./icons/cash.png" width={75} height={75} />
              <Checkbox value={"Accesible"}>Accesible economicamente</Checkbox>
            </div>
            <div className="check-with-image">
              <Image src="./icons/capacity.png" width={75} height={75} />
              <Checkbox value={"De capacidad"}>
                Para llevar muchas cosas
              </Checkbox>
            </div>
            <div className="check-with-image">
              <Image src="./icons/work.png" width={75} height={75} />
              <Checkbox value={"De trabajo"}>Para ir a trabajar</Checkbox>
            </div>
            <div className="check-with-image">
              <Image src="./icons/fast.png" width={75} height={75} />
              <Checkbox value={"De gran velocidad"}>
                Para viajar rápido
              </Checkbox>
            </div>
            <div className="check-with-image">
              <Image src="./icons/secure.png" width={75} height={75} />
              <Checkbox value={"Seguridad"}>Para viajar seguro</Checkbox>
            </div>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item className="form-button">
          <Button type="primary" htmlType="submit">
            Buscar mi match!
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
