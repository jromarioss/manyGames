import { Select, GamePlay } from "./components";
import { Container, Header } from "../../components";

import { useGameType } from "./hooks";

import { MainGames } from "./styles";

export function Games() {
  const gameType = useGameType();

  return (
    <Container>
      <Header title="Games" />

      <MainGames>
        <Select
          items={gameType.games}
          onSelect={gameType.onSetGameSelected}
        />

        {gameType.showGame && 
          <GamePlay {...gameType} />}
      </MainGames>
    </Container>
  )
}