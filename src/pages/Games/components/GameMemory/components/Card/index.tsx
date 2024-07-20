import { defaultTheme } from "@/styles/themes/default";
import { GridItemType } from "../../types";

import { CardContainer, CardInner, CardFront, CardBack, Image } from "./styles";

type CardProps = {
  card: GridItemType;
  start: boolean;
  handleClick: () => void;
}

export const Card = ({ card, handleClick, start }: CardProps) => {
  return (
    <CardContainer onClick={handleClick}>
      <CardInner isflipped={(card.alwaysShow || card.shown).toString()}>
        <CardFront style={{
          borderColor: start ? defaultTheme.GREEN_600 : defaultTheme.RED_600
        }}>
          <p>JrSs</p>
        </CardFront>
        <CardBack style={{
          borderColor: start ? defaultTheme.GREEN_600 : defaultTheme.RED_600
        }}>
          {card.item !== null && <Image src={card.item.image} alt="" />}
        </CardBack>
      </CardInner>
    </CardContainer>
  )
}
