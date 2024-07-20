export type useGameTypeProps = {
  gameSelected: number;
  showGame: boolean;
  games: GamesProps[];
  onCloseGame: () => void;
  onSetGameSelected: (value: string) => void;
}

export type GamesProps ={
  id: number;
  game: number;
  title: string;
}