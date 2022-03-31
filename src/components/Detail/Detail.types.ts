import { IconType } from 'components/Badge/Badge.types';

export interface DetailProps {
  title: string;
  image: string;
  creditsText: string;
  tags: IconType[];
  readyInMinutes: number;
  savedCount: number;
}
