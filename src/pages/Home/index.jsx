import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import ProfileUser from "../../components/Profile";

const Home = ({ auth, setAuth }) => {
  const logout = () => {
    setAuth(false);
    localStorage.clear();
  };

  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header ButtonText="Sair" clickAction={logout} />
      <ProfileUser logout={logout} />
    </>
  );
};

export default Home;
