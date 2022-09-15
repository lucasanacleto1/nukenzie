import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

import { Container, Form, SelectContent, TitleContainer } from "./style";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { negative } from "../../styles/globalStyles";
import Header from "../../components/Header";
import { toast } from "react-toastify";

const Signup = ({ auth, setAuth }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "A senha precisa ter no mínimo 6 dígitos"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "As senhas estão diferentes"),
    course_module: yup.string().required("Selecione o seu módulo"),
  });
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  if (auth) {
    history.push("/home");
  }
  const onSubmitFunction = (data) => {
    console.log(data);
    const registerObject = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: "Lorem ipsum dolor sit amet...",
      contact: "99999999",
      course_module: data.course_module,
    };
    api
      .post("/users", registerObject)
      .then((response) => {
        toast.success("Conta criada com sucesso, faça o login!");
        history.push("/");
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <Container>
      <Header ButtonText="Voltar" clickAction={() => history.push("/")} />
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <TitleContainer>
          <span>Crie sua conta</span>
          <p>Rapido e grátis, vamos nessa</p>
        </TitleContainer>
        <Input
          register={register}
          name="name"
          label="Nome"
          placeholder="Digite aqui seu nome"
          error={errors.name?.message}
        />
        <Input
          register={register}
          name="email"
          label="Email"
          placeholder="Digite aqui seu email"
          error={errors.email?.message}
        />
        <Input
          register={register}
          name="password"
          type="password"
          label="Senha"
          placeholder="Digite aqui sua senha"
          error={errors.password?.message}
        />
        <Input
          register={register}
          name="confirmPassword"
          type="password"
          label="Confirmar senha"
          placeholder="Digite aqui sua senha"
          error={errors.confirmPassword?.message}
        />

        <SelectContent>
          <label>Selecionar módulo</label>
          <select name="course_module" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo
            </option>
          </select>
        </SelectContent>
        <Button type="submit" backgroundColor={negative}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
