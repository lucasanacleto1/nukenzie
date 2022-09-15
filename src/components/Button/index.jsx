import { Content } from "./styles";

const Button = ({
  setModalOpen,
  TextButton,
  backgroundColor,
  children,
  ...rest
}) => {
  return (
    <Content {...rest} backgroundColor={backgroundColor}>
      {children}
    </Content>
  );
};

export default Button;
