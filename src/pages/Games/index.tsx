import { Select, GamePlay } from "./components";
import { Container, Header } from "@/components";

import { useGameType } from "./hooks";

import { MainGames, GameSelect, Button } from "./styles";

export function Games() {
  const gameType = useGameType();

  return (
    <Container>
      <Header title="Games" />

      <MainGames>
        <GameSelect>
          <Select items={gameType.games} onSelect={gameType.onSetGameSelected} />
          <Button onClick={gameType.onCloseGame}>Sair</Button>
        </GameSelect>

        {gameType.showGame && 
          <GamePlay {...gameType} />}
      </MainGames>
    </Container>
  )
}