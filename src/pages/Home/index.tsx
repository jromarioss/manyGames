
import { Container } from "../../components";

import { HeaderHome, MainHome, Links} from "./styled";

export function Home() {
  return (
    <Container>
      <HeaderHome>
        <h1>Bem vindo, vamos jogar!</h1>
        <p>Clique em jogar para escolher um jogo para você jogar!</p>
      </HeaderHome>

      <MainHome>
        <Links to="/Games">Games</Links>
      </MainHome>
    </Container>
  );
}