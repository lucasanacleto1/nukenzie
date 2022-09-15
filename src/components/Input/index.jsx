import { Container, InputContainer, ErrorContent } from "./styles";

const Input = ({ register, name, label, error, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
      </InputContainer>
      <ErrorContent>{!!error && <span>{error}</span>}</ErrorContent>
    </Container>
  );
};

export default Input;
