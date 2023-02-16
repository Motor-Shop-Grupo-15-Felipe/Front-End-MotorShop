import image from "../../assets/logo-footer.svg";
import { FooterPage, BtnTop } from "./footer.style";
import { SlArrowUp } from "react-icons/sl";

export const Footer = () => {
  return (
    <>
      <FooterPage>
        <img className="logo" src={image} alt="" />

        <span className="copyright">
          © 2022 - Todos os direitos reservados.
        </span>

        <BtnTop className="redirect-top">
          <SlArrowUp size={"10px"} />
        </BtnTop>
      </FooterPage>
    </>
  );
};
