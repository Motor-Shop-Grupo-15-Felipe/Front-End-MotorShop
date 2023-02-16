import logo from "../../assets/logo-footer.svg"

export const Footer = () => {
  return (
    <>
      <footer>
        <img className="logo" src={logo} alt="" />

        <span className="copyright">© 2022 -  Todos os direitos reservados.</span>

        <button className="redirect-top"></button>
      </footer>
    </>
  );
};
