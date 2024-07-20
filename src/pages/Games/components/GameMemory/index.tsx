import { Button } from "../../../../components";
import { Card } from "./components/Card";

import { useGameMemory } from "./hooks";
import { GridItemType } from "./types";

import { ContainerMain, Main, Section } from "./styles";
import { defaultTheme } from "../../../../styles/themes/default";

export const GameMemory = () => {
  const gameMemory = useGameMemory();

  return (
    <ContainerMain>
      <Section>
        <Button
          fw={600} cl={defaultTheme.GRAY_300} bc={defaultTheme.GREEN_600}
          title="Start game"
          handleClick={() => gameMemory.onSetPlaying(true)}
        />
        {gameMemory.playing &&
          <Button
            fw={600} cl={defaultTheme.GRAY_300} bc={defaultTheme.RED_600}
            title="Restart game"
            handleClick={gameMemory.fetchData}
          />}
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