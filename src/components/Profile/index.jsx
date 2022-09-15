import { primary } from "../../styles/globalStyles";
import Button from "../Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  Content,
  Container,
  Header,
  Form,
  Input,
  Transparent,
  Select,
  ContainerCard,
  UserDescription,
  TechHead,
  TechContainer,
} from "./styles";
import api from "../../services/api";
import Card from "../Card";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProfileUser = ({ logout }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("@KenzieHub:user")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("@KenzieHub:token")));
  const [techs, setTechs] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  
  
  useEffect(() => {
    loadTechs();
  }, []);

  const loadTechs = () => {
    api
      .get(`/users/${user.id}`)
      .then((response) => setTechs(response.data.techs));
  };

  const onSubmitFunction = (data) => {
    api
      .post(
        "/users/techs",
        {
          title: data.title,
          status: data.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        loadTechs();
        toast.success("Tecnologia cadastrada com sucesso!")
      })
      .catch((err) => toast.error("Erro! Tecnologia já cadastrada"));
    setModalOpen(false);
    
  };

  return (
    <>
      <ContainerCard>
        <Header ButtonText="Sair" clickAction={logout} />
        <UserDescription>
          <h1>Olá, {user.name}</h1>
          <p>{user.course_module}</p>
        </UserDescription>
        <TechHead>
          <h3>Tecnologias</h3>
          <Button
            onClick={() => setModalOpen(true)}
            width="32px"
            backgroundColor="var(--grey-3)"
          >
            +
          </Button>
        </TechHead>
        <TechContainer>
          {techs.map((item) => (
            <Card
              loadTechs={loadTechs}
              id={item.id}
              tech={item}
              key={item.id}
            />
          ))}
        </TechContainer>
      </ContainerCard>
      {modalOpen && (
        <Container>
          <Transparent>
            <Content>
              <Header>
                <span>Cadastrar Tecnologia</span>
                <button onClick={() => setModalOpen(false)}>X</button>
              </Header>
              <Form onSubmit={handleSubmit(onSubmitFunction)}>
                <label>Nome</label>
                <Input>
                  <input
                    name="title"
                    {...register("title")}
                    placeholder="Digite o nome da tecnologia"
                    type="text"
                  />
                </Input>
                <label>Selecionar status</label>
                <Select {...register("status")}>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </Select>
                <Button backgroundColor={primary}>Cadastrar Tecnologia</Button>
              </Form>
            </Content>
          </Transparent>
        </Container>
      )}
    </>
  );
};

export default ProfileUser;
