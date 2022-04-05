import { StyledUl } from './BadgeList.styled';
import { BadgeListProps } from './BadgeList.types';
import { Badge } from 'components';

export const BadgeList = ({ tags }: BadgeListProps) => {
  return (
    <StyledUl>
      {tags.map((tag, index) => (
        <li key={tag + index}>
          <Badge iconType={tag} size="small" />
        </li>
      ))}
    </StyledUl>
  );
};
