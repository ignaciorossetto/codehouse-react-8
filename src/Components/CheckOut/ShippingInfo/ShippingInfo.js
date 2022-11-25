import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext/CartContext";
import { useForm } from "react-hook-form";

// function ValidateCUITCUIL(cuit) {
//   if (cuit.length != 13) return 0;

//   var rv = false;
//   var resultado = 0;
//   var cuit_nro = cuit.replace("-", "");
//   var codes = "6789456789";
//   var cuit_long = parseInt(cuit_nro);
//   var verificador = parseInt(cuit_nro[cuit_nro.length - 1]);
//   var x = 0;

//   while (x < 10) {
//     var digitoValidador = parseInt(codes.substring(x, x + 1));
//     if (isNaN(digitoValidador)) digitoValidador = 0;
//     var digito = parseInt(cuit_nro.substring(x, x + 1));
//     if (isNaN(digito)) digito = 0;
//     var digitoValidacion = digitoValidador * digito;
//     resultado += digitoValidacion;
//     x++;
//   }
//   resultado = resultado % 11;
//   rv = resultado === verificador;
//   return rv;
// }

// const aa = ValidateCUITCUIL("20-37135160-1");
// console.log(aa);

const ShippingInfo = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm();
  const navigate = useNavigate();
  const { setClientInfo } = useContext(CartContext);
  const [envioDomBool, setEnvioDomBool] = useState(true);
  const [retiroBool, setRetiroBool] = useState();
  const [vivoDeptoBool, setVivoDeptoBool] = useState(false);

  const onCheck = (event) => {
    console.log('hola');
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
  console.log(watch('envioadomiciliciocheck'));


  const onSubmit = (event, preventDefault_) => {
    preventDefault_.preventDefault();
    setClientInfo(event);
    console.log(event);
    navigate("/checkout/payment");
  };

  const checkEmail = () => {
    const email = watch('email')
    const confirmEmail = watch('confirmEmail')
    return email === confirmEmail
  }



  return (
    <Form style={{ width: "65%" }} onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicFullName">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control
          {...register("fullname", {
            required: true,
            minLength: 3,
            maxLength: 50,
          })}
          name="fullname"
          type="text"
          placeholder="Ingrese su nombre completo"
        />
        {errors.fullname?.type === "required" && (
          <p style={{ color: "red" }}>Debe ingresar nombre y apellido</p>
        )}
        {errors.fullname?.type === "minLength" && (
          <p style={{ color: "red" }}>Debe ingresar nombre y apellido</p>
        )}
        {errors.fullname?.type === "maxLength" && (
          <p style={{ color: "red" }}>Campo muy largo</p>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>DNI/CUIT/CUIL</Form.Label>
        <Form.Control
          name="dni"
          type="number"
          placeholder="Ingrese su DNI/CUIT/CUIL"
          {...register("dni", {
            required: true,
          })}
        />
        {errors.dni?.type === "required" && (
          <p style={{ color: "red" }}>El CUIT es obligatorio</p>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Ingrese su email"
          {...register("email", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Confirma tu correo electronico</Form.Label>
        <Form.Control
          name="confirmEmail"
          type="email"
          placeholder="Ingrese su email"
          {...register("confirmEmail", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            validate: checkEmail
          })}
        />
        {errors.confirmEmail?.type === 'validate' && <p style={{color: 'red'}}> Los correos deben coincidir</p>}
        {errors.confirmEmail?.type === 'required' && <p style={{color: 'red'}}> Es obligatorio confirmar el mail</p>}
      </Form.Group>
      <Form.Group style={{ marginBottom: "25px" }}>
        <Form.Group style={{ marginBottom: "15px" }}>
          <Form.Label>Eliga el metodo de envio!</Form.Label>
          <br />
          <Form.Check
            checked={envioDomBool}
            name="envioadomiciliciocheck"
            inline
            type={"checkbox"}
            id={`enviodomicilioCheckbox`}
            label={`Envio a Domicilio!`}
            {...register('envioadomiciliciocheck')}
            onChange={onCheck}
          />
          <Form.Check
            checked={retiroBool}
            name="retirocheckbox"
            inline
            type={"checkbox"}
            id={`retirocheckbox`}
            label={`Retiro personalmente en xxxxx xxxxx  xxxx, Cordoba, Cordoba, Argentina, 5009`}
            
            {...register('retirocheckbox')}
            onChange={onCheck}
          />
          {(errors.retirocheckbox?.type === 'validate' && errors.envioadomiciliciocheck?.type === 'validate')  && <p style={{color: 'red'}}>Debe elegir un metodo de envio</p>}
        </Form.Group>

        {envioDomBool && (
          <>
            <Form.Group
              className="mb-3"
              controlId="formBasicAddress"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <Form.Control
                name="address"
                type="text"
                placeholder="Ingrese su direccion"
                {...register("address", {
                  required: true,
                })}
              />
              <Form.Control
                name="address_number"
                type="number"
                placeholder="Ingrese numeracion"
                style={{ margin: "0px 10px" }}
                {...register("address_number", {
                  required: true,
                })}
              />
              <Form.Control
                name="zipcode"
                type="number"
                placeholder="Ingrese Codigo Postal"
                {...register("zipcode", {
                  required: true,
                })}
              />
            </Form.Group>
            {errors.address?.type === "required" && (
              <p style={{ color: "red" }}>La direccion es obligatoria</p>
            )}
            {errors.zipcode?.type === "required" && (
              <p style={{ color: "red" }}>El Codigo Postal es obligatorio</p>
            )}
            {errors.address_number?.type === "required" && (
              <p style={{ color: "red" }}>La numeracion es obligatoria</p>
            )}
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
                  <Form.Control
                    name="floor"
                    type="text"
                    placeholder="Piso"
                    {...register("floor", {
                      required: true,
                    })}
                  />

                  <Form.Control
                    name="apartment"
                    type="text"
                    placeholder="Departamento"
                    style={{ margin: "0px 10px" }}
                    {...register("apartment", {
                      required: true,
                    })}
                  />

                  <Form.Control
                    name="other"
                    type="text"
                    placeholder="Info adicional"
                  />

                </Form.Group>
              )}
            </Form.Group>
              {errors.floor?.type === "required" && (
                  <p style={{ color: "red" }}>El piso es obligatorio</p>
              )}
              {errors.apartment?.type === "required" && (
                  <p style={{ color: "red" }}>
                    El departamento es obligatorio
                  </p>
              )}
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
