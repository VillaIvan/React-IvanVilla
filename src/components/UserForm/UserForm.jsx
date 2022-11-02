import React, { useState } from "react";
import { createBuyOrder } from "../../services/Firebase";
import { useNavigate } from "react-router-dom";

import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2/dist/sweetalert2.js";

import InputForm from "./InputForm";

export default function UserForm({ cart, getTotalPrice, clearCart }) {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    let newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();

    const orderData = {
      buyerData: userData,
      cart: cart,
      total: getTotalPrice(),
      date: new Date(),
    };

    createBuyOrder(orderData).then((respuesta) => {
      Swal.fire({
        title: "Gracias!",
        text: "La compra ha sido un exito!",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        navigate(`/`);
      });
    });
    clearCart();
  }

  return (
    <form onSubmit={onSubmit}>
      <InputForm
        value={userData.name}
        title="Nombre"
        name="name"
        required={true}
        onChange={onInputChange}
      />
      <InputForm
        value={userData.email}
        title="Email"
        name="email"
        required={true}
        onChange={onInputChange}
      />
      <InputForm
        value={userData.phone}
        title="Teléfono"
        name="phone"
        onChange={onInputChange}
      />
      <button type="submit">Crear orden</button>
    </form>
  );
}
