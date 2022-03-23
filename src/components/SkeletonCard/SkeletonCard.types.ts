type SkeletonType = 'wide' | 'square';
type SkeletonBackground = 'white' | 'none';
type SkeletonHeadingPosition = 'bottomLeft' | 'bottomCenter' | 'topLeft';

export interface SkeletonCardProps {
  type: SkeletonType;
  background: SkeletonBackground;
  hasSummary: boolean;
  headingPosition: SkeletonHeadingPosition;
}

export interface SkeletonTypeProps {
  type: SkeletonType;
}

export interface SkeletonWrapperProps {
  type: SkeletonType;
  background: SkeletonBackground;
}

export interface SkeletonTitleProps {
  headingPosition: SkeletonHeadingPosition;
}

export interface SkeletonSummaryProps {
  hasSummary: boolean;
}
