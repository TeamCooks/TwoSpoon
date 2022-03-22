type SkeletonType = 'wide' | 'square';
type SkeletonBackground = 'white' | 'none';
type SkeletonHeadingPosition = 'bottomLeft' | 'bottomCenter' | 'topLeft';

export interface SkeletonCardProps {
  type: SkeletonType;
  background: SkeletonBackground;
  hasSummary: boolean;
  headingPosition: SkeletonHeadingPosition;
}
