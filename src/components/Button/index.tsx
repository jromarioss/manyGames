import { defaultTheme } from "../../styles/themes/default";
import { ButtonContainer } from "./styles";

type ButtonProps = {
  cl?: string;
  bc?: string;
  bg?: string;
  px?: number;
  py?: number;
  fw?: number;
  fs?: number;
  title: string;
  handleClick: () => void;
}

export const Button = ({ ...props }: ButtonProps) => {
  return (
    <ButtonContainer
      onClick={props.handleClick}
      style={{
        color: `${props.cl}`,
        backgroundColor: `${props.bg ?? "transparent"}`,
        borderColor: `${props.bc ?? defaultTheme.GRAY_200}`,
        paddingInline: `${props.px ?? 1}rem`,
        paddingBlock: `${props.py ?? 0.5}rem`,
        fontWeight: `${props.fw ?? 400}`,
        fontSize: `${props.fs ?? 1}rem`
      }}
    >
      <p>{props.title}</p>
    </ButtonContainer>
  )
}