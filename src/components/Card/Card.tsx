import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
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
  // image,
  imgSrc = '/assets/no-image.jpg',
  title,
  summary = '',
}: CardProps): JSX.Element => {
  const [recipeData, setRecipeData] = useState({});
  const [savedCountBeDisplayed, setSavedCountBeDisplayed] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  console.log(router);

  return (
    <Link href={`${router.pathname}?id=${id}`}>
      <CardLink role="button">
        <CardContainer $type={type} $background={background}>
          <figure>
            <CardFigureImgContainer $type={type}>
              <Image src={imgSrc} title={title} />
            </CardFigureImgContainer>
            <CardFigcaption $headingPosition={headingPosition}>{title}</CardFigcaption>
          </figure>
          {hasSummary && (
            <>
              <CardSummary>
                {excludeTags(summary)
                  .split('. ')
                  .map((text, index, texts) => (
                    <CardSummaryText key={text + index}>{text + (index < texts.length - 1 ? '.' : '')}</CardSummaryText>
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
