import { Loading } from "@/components";
import { Card } from "./components/Card";

import { useGameMemory } from "./hooks";
import { GridItemType } from "./types";

import { ContainerMain, Main, Section, Button } from "./styles";

export const GameMemory = () => {
  const gameMemory = useGameMemory();

  if (gameMemory.load) {
    return <Loading />;
  }

  return (
    <ContainerMain>
      <Section>
        <Button bc="green" onClick={gameMemory.finished ? gameMemory.handleResetGame : () => gameMemory.onSetPlaying(true)}>Start game</Button>
        
        {gameMemory.playing &&
          <Button bc="red"  onClick={gameMemory.handleResetGame}>Restart game</Button>}
      </Section>

      <Main>
        {gameMemory.cards.map((item: GridItemType, index: number) => {
          return (
            <Card
              key={index}
              card={item}
              start={gameMemory.playing}
              handleClick={() => gameMemory.handleShowCard(index)}
            />
          )
        })}
      </Main>
    </ContainerMain>
  );
}