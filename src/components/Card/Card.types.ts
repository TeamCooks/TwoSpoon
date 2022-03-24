type CardType = 'wide' | 'square' | 'smallSquare';
type CardBackgroundType = 'white' | 'none';
type CardHeadingPositionType = 'bottomLeft' | 'bottomCenter' | 'topLeft';

export interface CardProps {
  id: string | number;
  type: CardType;
  background: CardBackgroundType;
  hasSummary: boolean;
  headingPosition: CardHeadingPositionType;
  imgSrc: string;
  title: string;
  summary: string;
}

export interface CardContainerProps {
  $type: CardType;
  $background: CardBackgroundType;
}

export interface CardFigureImgProps {
  $type: CardType;
  imgSrc: string;
  title: string;
}

export interface CardFigcaptionProps {
  $headingPosition: CardHeadingPositionType;
}
