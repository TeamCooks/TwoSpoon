export type IconType =
  | 'dairyFree'
  | 'lactoOvo'
  | 'lactoOvoVegetarian'
  | 'vegetarian'
  | 'vegan'
  | 'glutenFree'
  | 'popular'
  | 'paleolithic'
  | 'paleo'
  | 'primal'
  | 'healthy'
  | 'pescatarian';

type Size = 'small' | 'large';

type Text =
  | 'dairy-free'
  | 'lacto-ovo'
  | 'lacto-ovo'
  | 'vegetarian'
  | 'vegan'
  | 'gluten-free'
  | 'popular'
  | 'paleo'
  | 'paleo'
  | 'primal'
  | 'healthy'
  | 'pescatarian';

type Color = 'badgePink' | 'badgePurple' | 'badgeGreen' | 'badgeNavy';

export interface BadgeProps {
  iconType: IconType;
  size: Size;
}

export interface StyledBadgeProps {
  $color: Color;
  $size: Size;
}

export type BadgeInfos = {
  [key in IconType]: {
    icon: JSX.Element;
    text: Text;
    color: Color;
  };
};
