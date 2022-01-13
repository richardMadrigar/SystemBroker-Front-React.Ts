import * as Yup from "yup";

export const loginSchemaHome = Yup.object().shape({
  cpf: Yup.string()
    .min(11, "Quantidade caracteres invalido")
    .max(11, "Limite máximo de 11 caracteres")
    .required("Esse campo é obrigatório"),
  senha: Yup.string()
    .min(5, "Senha minima de 5 caracteres")
    .max(20, "Limite máximo de 20 caracteres")
    .required("Esse campo é obrigatório"),
});

export const registrationSchemaModalAdd = Yup.object().shape({
  name: Yup.string()
    .min(3, "Quantidade de caracteres inválido")
    .max(60, "Limite máximo de 60 caracteres")
    .required("Esse campo é obrigatório"),
  email: Yup.string()
    .email("Formato de E-mail inválido")
    .min(8, "Quantidade de caracteres inválido")
    .max(100, "Limite máximo de 100 caracteres")
    .required("Esse campo é obrigatório"),
  celular: Yup.string()
    .min(8, "Quantidade de caracteres inválido")
    .max(20, "Limite máximo de 20 caracteres")
    .required("Esse campo é obrigatório"),
  cpf: Yup.string()
    .min(11, "Quantidade de caracteres inválido")
    .max(11, "Limite máximo de 11 caracteres")
    .required("Esse campo é obrigatório"),
  rg: Yup.string()
    .min(9, "Quantidade de caracteres inválido")
    .max(9, "Limite máximo de 9 caracteres")
    .required("Esse campo é obrigatório"),
  senha: Yup.string()
    .min(8, "Senha minima de 8 caracteres")
    .max(20, "Limite máximo de 20 caracteres")
    .required("Esse campo é obrigatório"),
  confsenha: Yup.string()
    .required("É necessário confirmar a senha ")
    .when("senha", {
      is: (val: string) => !!(val && val.length > 0),
      then: Yup.string().oneOf([Yup.ref("senha")], "Senha não corresponde"),
    }),
  // check: Yup.bool().required('Você deve aceitar os Termos e Condições'),
});

export const registrationSchemaModalEdit = Yup.object().shape({
  name: Yup.string()
    .min(3, "Quantidade de caracteres inválido")
    .max(60, "Limite máximo de 60 caracteres")
    .required("Esse campo é obrigatório ! !"),
  email: Yup.string()
    .email("Wrong email format")
    .min(8, ' "Quantidade de caracteres inválido"')
    .max(100, "Limite máximo de 100 caracteres")
    .required("Esse campo é obrigatório !"),
  celular: Yup.string()
    .min(8, "Quantidade de caracteres inválido")
    .max(20, "Limite máximo de 20 caracteres")
    .required("Esse campo é obrigatório !"),
  cpf: Yup.string()
    .min(11, "Quantidade de caracteres inválido")
    .max(11, "Limite máximo de 11 caracteres")
    .required("Esse campo é obrigatório !"),
  rg: Yup.string()
    .min(9, "Quantidade de caracteres inválido")
    .max(9, "Limite máximo de 9 caracteres")
    .required("Esse campo é obrigatório !"),
});
