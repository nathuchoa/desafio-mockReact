import React from "react";
import ButtonForm from "../ButtonForm/ButtonForm";
import Label from "../Label/Label";
import S from "./FormCompartilha.module.css";

const FormCompartilha = () => {
  return (
    <div className={S.compartilhaContainer}>
      <h2>Compartilhe a novidade</h2>
      <p>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>
      <form className={S.containerFormCompartilha}>
        <fieldset>
          <Label texto={"Nome do seu amigo:"} />
          <input type="text" name="name" id="Nome:" />
        </fieldset>

        <fieldset>
          <Label texto={"E-mail:"} />
          <input type="email" name="e-mail" id="E-mail:" />
        </fieldset>
      </form>

      <ButtonForm texto={"Enviar agora"} />
    </div>
  );
};

export default FormCompartilha;
