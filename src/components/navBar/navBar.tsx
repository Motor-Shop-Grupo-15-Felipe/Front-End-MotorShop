import logo from "../../assets/logo-main.svg"
import {
  Header, Navigation, Categories, Link, Sections, Division
} from "./navBar.style";

export const NavBar = (props: any) => {

  const isLoggedIn = props.isLoggedIn;

  return (
    <>
      <Header>
        <img className="logo" src={logo} alt="" />

        <Navigation>
          <div className="categories">
            <Categories>
              <li className="cars">

                <Link href="#cars">Carros</Link>
                
                </li>
              <li className="motorcycles">

                <Link href="#motos">Motos</Link>

                </li>
              <li className="auctions">

                <Link href="#auctions">Leilões</Link>

              </li>

              <Division/>
              
                <Sections className="section">
                  {isLoggedIn ? (
                    <>
                      <img className="image-user" src="" alt="" />
                      <span className="username">Gustavo</span>
                    </>
                  ) : (
                    <>
                      <button className="login"> Fazer login</button>
                      <button className="register"> Cadastrar</button>
                    </>
                  )}
                </Sections>
            </Categories>
          </div>


        </Navigation>
      </Header>
    </>
  );
};
