import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";

import { Container, Form, Header, SignUpContent } from "./style";

import Logo from "../../assets/Logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { primary } from "../../styles/globalStyles";
import api from "../../services/api";
import { toast } from "react-toastify";

const Login = ({ auth, setAuth }) => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  if (auth) {
    return <Redirect to="/home" />;
  }

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { user, token } = response.data;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
        toast.success("Login feito com sucesso!");
        history.push("/home");
        setAuth(true);
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <Container>
      <Header>
        <img src={Logo} alt="Logo KenzieHub" />
      </Header>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
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

        <Button type="submit" backgroundColor={primary}>
          Entrar
        </Button>
        <SignUpContent>
          <span>Ainda não possui uma conta?</span>
          <button onClick={() => history.push("/signup")}>Cadastre-se</button>
        </SignUpContent>
      </Form>
    </Container>
  );
};

export default Login;
