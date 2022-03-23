import {
  SkeletonCardWrapper,
  SkeletonContainer,
  SkeletonImage,
  SkeletonSummary,
  SkeletonTitle,
} from './SkeletonCard.styled';
import { SkeletonCardProps } from './SkeletonCard.types';

export const SkeletonCard = ({ type, background, hasSummary, headingPosition }: SkeletonCardProps) => {
  return (
    <SkeletonContainer $type={type}>
      <SkeletonCardWrapper $type={type} $background={background}>
        <SkeletonImage $type={type} />
        <SkeletonTitle $headingPosition={headingPosition} />
        <SkeletonSummary $hasSummary={hasSummary} />
      </SkeletonCardWrapper>
    </SkeletonContainer>
  );
};
