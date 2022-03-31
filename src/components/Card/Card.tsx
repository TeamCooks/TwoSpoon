import Image from 'next/image';
import Link from 'next/link';
import { HiCursorClick } from 'react-icons/hi';
import { excludeTags } from 'utils';
import {
  CardButton,
  CardContainer,
  CardFigcaption,
  CardFigureImgContainer,
  CardLink,
  CardSummary,
  CardSummaryText,
} from './Card.styled';
import { CardProps } from './Card.types';

export const Card = ({
  id = 0,
  type,
  background,
  hasSummary,
  headingPosition,
  imgSrc = '/images/no-image.jpg',
  title,
  summary = '',
}: CardProps): JSX.Element => {
  return (
    <Link href={`/recipe/${id}`}>
      <CardLink>
        <CardContainer $type={type} $background={background}>
          <figure>
            <CardFigureImgContainer $type={type}>
              <Image src={imgSrc} title={title} layout="fill" priority />
            </CardFigureImgContainer>
            <CardFigcaption $headingPosition={headingPosition}>{title}</CardFigcaption>
          </figure>
          {hasSummary && (
            <>
              <CardSummary>
                {excludeTags(summary)
                  .split('. ')
                  .map((text, index, texts) => (
                    <CardSummaryText key={text}>{text + (index < texts.length - 1 ? '.' : '')}</CardSummaryText>
                  ))}
              </CardSummary>
              <CardButton>
                Click for more
                <HiCursorClick />
              </CardButton>
            </>
          )}
        </CardContainer>
      </CardLink>
    </Link>
  );
};
