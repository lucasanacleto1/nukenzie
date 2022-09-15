import { useState } from "react";
import {
  Container,
  Content,
  Form,
  Header,
  Input,
  Transparent,
  Select,
  ContainerUpdate,
  SaveButton,
  ButtonContainer,
  DeleteButton,
} from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";

const Card = ({ loadTechs, tech, id }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token"))
  );

  const [techUpdate, setTechUpdate] = useState(false);

  const schema = yup.object().shape({
    status: yup.string().required("Field required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleUpdate = (data) => {
    api
      .put(
        `/users/techs/${id}`,
        {
          status: data.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => toast.success("Tecnologia atualizada!"));

    setTechUpdate(!techUpdate);
    loadTechs();
  };

  const handleDelete = (id) => {
    console.log("id tech", id);
    api.delete(`/users/techs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    loadTechs();
  };

  return (
    <>
      <Container onClick={() => setTechUpdate(!techUpdate)}>
        <span>{tech.title}</span>
        <p>{tech.status}</p>
      </Container>
      {techUpdate && (
        <ContainerUpdate>
          <Transparent>
            <Content>
              <Header>
                <span>Atualização de Tecnologia</span>
                <button onClick={() => setTechUpdate(!techUpdate)}>X</button>
              </Header>
              <Form onSubmit={handleSubmit(handleUpdate)}>
                <label>Nome da Tecnologia (não alterável)</label>
                <Input>
                  <input disabled placeholder={tech.title} />
                </Input>
                <label>Selecionar status</label>
                <Select {...register("status")}>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </Select>
                <ButtonContainer>
                  <SaveButton type="submit">Salvar alterações</SaveButton>
                  <DeleteButton onClick={() => handleDelete(id)}>
                    Excluir
                  </DeleteButton>
                </ButtonContainer>
              </Form>
            </Content>
          </Transparent>
        </ContainerUpdate>
      )}
    </>
  );
};

export default Card;
