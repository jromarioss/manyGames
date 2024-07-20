import { Select, GamePlay } from "./components";
import { Container, Header, Button } from "../../components";

import { useGameType } from "./hooks";

import { MainGames, GameSelect } from "./styles";
import { defaultTheme } from "../../styles/themes/default";

export function Games() {
  const gameType = useGameType();

  return (
    <Container>
      <Header title="Games" />

      <MainGames>
        <GameSelect>
          <Select items={gameType.games} onSelect={gameType.onSetGameSelected} />
          <Button title="Sair" cl={defaultTheme.GRAY_300} fw={600} handleClick={gameType.onCloseGame} />
        </GameSelect>

        {gameType.showGame && 
          <GamePlay {...gameType} />}
      </MainGames>
    </Container>
  )
}