import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CardProps } from './Card.types';

export const Card = ({
  id = 0,
  type,
  background,
  hasSummary,
  headingPosition,
  image,
  imgSrc = imgUrl,
  title,
  summary = '',
}: CardProps): JSX.Element => {
  const [recipeData, setRecipeData] = useState({});
  const [savedCountBeDisplayed, setSavedCountBeDisplayed] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  return (
    <Link href={`${router.pathname}?id=${id}`}>
      <div className={classNames(styles.cardWrap, styles[background], { [styles.inlineBlock]: type === 'square' })}>
        <figure>
          <img className={styles[type]} src={imgSrc} alt={title} />
          <figcaption className={classNames(styles.title, styles[headingPosition])}>{title}</figcaption>
        </figure>
        {hasSummary && (
          <>
            <div className={styles.summary}>{sentenceIntoParagraph(excludeTags(summary), styles.text)}</div>
            <button className={styles.more}>
              Click for more
              <HiCursorClick />
            </button>
          </>
        )}
      </div>
    </Link>
  );
};
