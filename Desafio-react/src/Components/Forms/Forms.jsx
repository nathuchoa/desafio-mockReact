import React from "react";
import ButtonForm from "../ButtonForm/ButtonForm";
import Label from "../Label/Label";
import S from "./Form.module.css";

const Forms = () => {
  return (
    <form className={S.form}>
      <fieldset>
        <Label texto={"Nome:"} />
        <input type="text" name="name" id="Nome:" />
      </fieldset>

      <fieldset>
        <Label texto={"E-mail:"} />
        <input type="email" name="e-mail" id="E-mail:" />
      </fieldset>

      <fieldset>
        <Label texto={"CPF:"} />
        <input type="text" nome="cpf" id="CPF:" />
      </fieldset>

      <fieldset className={S.inputRadio}>
        <input type="radio" name="sexo" id="feminino" value={"Feminino"} />
        <Label texto={"Feminino"} />

        <input type="radio" name="sexo" id="masculino" value={"Masculino"} />
        <Label texto={"Mascilino"} />      
      </fieldset>
      
      <ButtonForm texto={"Enviar"} />
    </form>
  );
};

export default Forms;
