import logo from "../../assets/logo-main.svg"
import { Header } from "./navBar.style";

export const NavBar = (props: any) => {

  const isLoggedIn = props.isLoggedIn;

  return (
    <>
      <Header>
        <img className="logo" src={logo} alt="" />

        <nav>
          <div className="categories">
            <ul>
              <li className="cars"></li>
              <li className="motorcycles"></li>
              <li className="auctions"></li>
            </ul>
          </div>

          <div className="section">
            {isLoggedIn ? (
              <>
                <img className="image-user" src="" alt="" />
                <span className="username"></span>
              </>
            ) : (
              <>
                <button className="login"> Fazer login</button>
                <button className="register"> Cadastrar</button>
              </>
            )}
          </div>
        </nav>
      </Header>
    </>
  );
};
