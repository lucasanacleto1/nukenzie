import Logo from "../../assets/Logo.svg";
import { Container } from "./styles";

const Header = ({ ButtonText, clickAction }) => {
  return (
    <Container>
      <img src={Logo} alt="Logo KenzieHub" />
      <button onClick={clickAction}>{ButtonText}</button>
    </Container>
  );
};
export default Header;
