import { SlArrowUp } from "react-icons/sl"
import { BtnTop } from "../footer/footer.style"
import { ButtonInfo, DivButton, DivInfo, Texts } from "./infoPage.style"

export const DivInfoPage = () => {
  return (
    <DivInfo>
      <Texts>
        <h1>Velocidade e experiência em um lugar feito para você</h1>
        <span>Um ambiente para você explorar o seu melhor</span>
      </Texts>
      <DivButton>
        <ButtonInfo type={"btnInfo"} className="cars">
          {" "}
          Carros
        </ButtonInfo>
        <ButtonInfo type={"btnInfo"} className="motorcycles">
          {" "}
          Motos
        </ButtonInfo>
      </DivButton>
    </DivInfo>
  )
}
