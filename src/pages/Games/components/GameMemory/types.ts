export type GridItemType = {
  item: itemProps;
  shown: boolean;
  alwaysShow: boolean;
}

type itemProps = {
  name: string;
  image: string;
}

export type GameMemoryProps = {
  playing: boolean;
  load: boolean;
  finished: boolean;
  cards: GridItemType[];
  handleShowCard: (index: number) => void;
  onSetPlaying: (index: boolean) => void;
  handleResetGame: () => void;
}
