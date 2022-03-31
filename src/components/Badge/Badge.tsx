import DairyFree from 'assets/icons/dairyFree.svg';
import { FaLeaf, FaFish } from 'react-icons/fa';
import { GiThreeLeaves, GiGrain, GiMeat, GiMuscleUp } from 'react-icons/gi';
import { BsStars } from 'react-icons/bs';
import { StyledBadge, StyledLactoOvo } from './Badge.styled';
import { BadgeProps, BadgeInfos } from './Badge.types';

const BADGE: BadgeInfos = {
  dairyFree: {
    icon: <DairyFree />,
    text: 'dairy-free',
    color: 'badgePurple',
  },
  lactoOvo: {
    icon: <StyledLactoOvo />,
    text: 'lacto-ovo',
    color: 'badgePurple',
  },
  lactoOvoVegetarian: {
    icon: <StyledLactoOvo />,
    text: 'lacto-ovo',
    color: 'badgePurple',
  },
  vegetarian: {
    icon: <FaLeaf />,
    text: 'vegetarian',
    color: 'badgeGreen',
  },
  vegan: {
    icon: <GiThreeLeaves />,
    text: 'vegan',
    color: 'badgeGreen',
  },
  glutenFree: {
    icon: <GiGrain />,
    text: 'gluten-free',
    color: 'badgePink',
  },
  popular: {
    icon: <BsStars />,
    text: 'popular',
    color: 'badgePink',
  },
  paleolithic: {
    icon: <GiMeat />,
    text: 'paleo',
    color: 'badgePink',
  },
  paleo: {
    icon: <GiMeat />,
    text: 'paleo',
    color: 'badgePink',
  },
  primal: {
    icon: <GiMeat />,
    text: 'primal',
    color: 'badgePink',
  },
  healthy: {
    icon: <GiMuscleUp />,
    text: 'healthy',
    color: 'badgeNavy',
  },
  pescatarian: {
    icon: <FaFish />,
    text: 'pescatarian',
    color: 'badgeNavy',
  },
};

export const Badge = ({ iconType, size }: BadgeProps) => {
  if (!BADGE[iconType]) return null;
  return (
    <StyledBadge $color={BADGE[iconType].color} $size={size}>
      {BADGE[iconType].icon}
      <span>{BADGE[iconType].text}</span>
    </StyledBadge>
  );
};
