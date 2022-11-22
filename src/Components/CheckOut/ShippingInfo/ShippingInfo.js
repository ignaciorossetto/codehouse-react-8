import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate  } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext/CartContext";

const ShippingInfo = () => {
  const navigate = useNavigate();
  const { setClientInfo } = useContext(CartContext);
  const [envioDomBool, setEnvioDomBool] = useState(false);
  const [retiroBool, setRetiroBool] = useState(false);
  const [vivoDeptoBool, setVivoDeptoBool] = useState(false);

  const onCheck = (event) => {
    if (event.target.id === "enviodomicilioCheckbox") {
      setEnvioDomBool(true);
      setRetiroBool(false);
    }
    if (event.target.id === "retirocheckbox") {
      setEnvioDomBool(false);
      setRetiroBool(true);
    }
    if (event.target.id === "vivoendepto") {
      setVivoDeptoBool(event.target.checked);
    }
  };

  const onSubmit = (event) => {
    let clientInfo = {}
    event.preventDefault();
    const form = event.target;
    for (let index = 0; index < form.length; index++) {
      const element = form[index];
      if (element.tagName === "INPUT" && element.type !== 'checkbox') {
        clientInfo = {...clientInfo, [element.name]: element.value}
      }
    }
    setClientInfo(clientInfo);
    navigate('/checkout/payment')
  };

  return (
    <Form style={{ width: "65%" }} onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicFullName">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control name='fullname' type="text" placeholder="Ingrese su nombre completo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>DNI/CUIT/CUIL</Form.Label>
        <Form.Control name='dni' type="number" placeholder="Ingrese su DNI/CUIT/CUIL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control name='email' type="email" placeholder="Ingrese su email" />
      </Form.Group>
      <Form.Group style={{ marginBottom: "25px" }}>
        <Form.Group style={{ marginBottom: "15px" }}>
          <Form.Label>Eliga el metodo de envio!</Form.Label>
          <br />
          <Form.Check
            name="envioadomiciliciocheck"
            inline
            type={"checkbox"}
            id={`enviodomicilioCheckbox`}
            label={`Envio a Domicilio!`}
            onChange={onCheck}
            checked={envioDomBool}
          />
          <Form.Check
            name="retirocheck"
            inline
            type={"checkbox"}
            id={`retirocheckbox`}
            label={`Retiro en xxxxx xxxxx  xxxx, Cordoba, Cordoba, Argentina, 5009`}
            onChange={onCheck}
            checked={retiroBool}
          />
        </Form.Group>

        {envioDomBool && (
          <>
            <Form.Group
              className="mb-3"
              controlId="formBasicAddress"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <Form.Control name='address' type="text" placeholder="Ingrese su direccion" />
              <Form.Control name='address_number'
                type="number"
                placeholder="Ingrese numeracion"
                style={{ margin: "0px 10px" }}
              />
              <Form.Control name='zipcode' type="number" placeholder="Ingrese Codigo Postal" />
            </Form.Group>
            <Form.Group style={{ marginBottom: "25px" }}>
              <Form.Check
                name="deptocheck"
                inline
                type={"checkbox"}
                id={`vivoendepto`}
                label={`Vivo en un departamento`}
                onChange={onCheck}
                style={{ marginBottom: "15px" }}
              />
              {vivoDeptoBool && (
                <Form.Group
                  className="mb-3"
                  controlId="formBasicApt"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <Form.Control name='floor' type="text" placeholder="Piso" />
                  <Form.Control name='apartment'
                    type="text"
                    placeholder="Departamento"
                    style={{ margin: "0px 10px" }}
                  />
                  <Form.Control name='other' type="text" placeholder="Info adicional" />
                </Form.Group>
              )}
            </Form.Group>
          </>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Continuar
      </Button>
    </Form>
  );
};

export default ShippingInfo;
