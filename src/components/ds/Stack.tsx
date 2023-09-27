import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';
import { spacing as spacingScale } from '../../constants/spacing';

type DirectionMapTypes = {
  horizontal: {
    mobile: {
      normal: string;
    };
    desktop: {
      normal: string;
    };
  };
  vertical: {
    mobile: {
      normal: string;
    };
    desktop: {
      normal: string;
    };
  };
};

const directionMap: DirectionMapTypes = {
  horizontal: {
    mobile: {
      normal: 'row',
    },
    desktop: {
      normal: 'row',
    },
  },
  vertical: {
    mobile: {
      normal: 'column',
    },
    desktop: {
      normal: 'column',
    },
  },
};

type SpaceMapTypes = {
  horizontal: {
    mobile: {
      none: string;
      smallest: string;
      smaller: string;
      small: string;
      base: string;
      large: string;
      larger: string;
      largest: string;
    };
    desktop: {
      none: string;
      smallest: string;
      smaller: string;
      small: string;
      base: string;
      large: string;
      larger: string;
      largest: string;
    };
  };
  vertical: {
    mobile: {
      none: string;
      smallest: string;
      smaller: string;
      small: string;
      base: string;
      large: string;
      larger: string;
      largest: string;
    };
    desktop: {
      none: string;
      smallest: string;
      smaller: string;
      small: string;
      base: string;
      large: string;
      larger: string;
      largest: string;
    };
  };
};

const spaceMap: SpaceMapTypes = {
  horizontal: {
    mobile: {
      none: `margin-left: ${spacingScale.none}`,
      smallest: `margin-left: ${spacingScale.smallest}`,
      smaller: `margin-left: ${spacingScale.smaller}`,
      small: `margin-left: ${spacingScale.small}`,
      base: `margin-left: ${spacingScale.base}`,
      large: `margin-left: ${spacingScale.large}`,
      larger: `margin-left: ${spacingScale.larger}`,
      largest: `margin-left: ${spacingScale.largest}`,
    },
    desktop: {
      none: `margin-left: ${spacingScale.none}; margin-top: 0px;`,
      smallest: `margin-left: ${spacingScale.smallest}; margin-top: 0px;`,
      smaller: `margin-left: ${spacingScale.smaller}; margin-top: 0px;`,
      small: `margin-left: ${spacingScale.small}; margin-top: 0px;`,
      base: `margin-left: ${spacingScale.base}; margin-top: 0px;`,
      large: `margin-left: ${spacingScale.large}; margin-top: 0px;`,
      larger: `margin-left: ${spacingScale.larger}; margin-top: 0px;`,
      largest: `margin-left: ${spacingScale.largest}; margin-top: 0px;`,
    },
  },
  vertical: {
    mobile: {
      none: `margin-top: ${spacingScale.none}`,
      smallest: `margin-top: ${spacingScale.smallest}`,
      smaller: `margin-top: ${spacingScale.smaller}`,
      small: `margin-top: ${spacingScale.small}`,
      base: `margin-top: ${spacingScale.base}`,
      large: `margin-top: ${spacingScale.large}`,
      larger: `margin-top: ${spacingScale.larger}`,
      largest: `margin-top: ${spacingScale.largest}`,
    },
    desktop: {
      none: `margin-top: ${spacingScale.none}; margin-left: 0px;`,
      smallest: `margin-top: ${spacingScale.smallest}; margin-left: 0px;`,
      smaller: `margin-top: ${spacingScale.smaller}; margin-left: 0px;`,
      small: `margin-top: ${spacingScale.small}; margin-left: 0px;`,
      base: `margin-top: ${spacingScale.base}; margin-left: 0px;`,
      large: `margin-top: ${spacingScale.large}; margin-left: 0px;`,
      larger: `margin-top: ${spacingScale.larger}; margin-left: 0px;`,
      largest: `margin-top: ${spacingScale.largest}; margin-left: 0px;`,
    },
  },
};

interface AlignMapTypes {
  mobile: {
    start: string;
    center: string;
    end: string;
    stretch: string;
    baseline: string;
  };
  desktop: {
    start: string;
    center: string;
    end: string;
    stretch: string;
    baseline: string;
  };
}

const alignMap: AlignMapTypes = {
  mobile: {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch',
    baseline: 'baseline',
  },
  desktop: {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch',
    baseline: 'baseline',
  },
};

type JustifyMapTypes = {
  start: string;
  center: string;
  end: string;
  between: string;
  around: string;
  evenly: string;
  stretch: string;
};

const justifyMap: JustifyMapTypes = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  stretch: 'stretch',
};

interface StackProps {
  children: ReactNode;
  spacing?:
    | 'none'
    | 'smallest'
    | 'smaller'
    | 'small'
    | 'base'
    | 'large'
    | 'larger'
    | {
        mobile:
          | 'none'
          | 'smallest'
          | 'smaller'
          | 'small'
          | 'base'
          | 'large'
          | 'larger';
        desktop:
          | 'none'
          | 'smallest'
          | 'smaller'
          | 'small'
          | 'base'
          | 'large'
          | 'larger';
      };
  direction?:
    | 'horizontal'
    | 'vertical'
    | { mobile: 'horizontal' | 'vertical'; desktop: 'horizontal' | 'vertical' };
  align?:
    | 'start'
    | 'center'
    | 'end'
    | 'stretch'
    | 'baseline'
    | {
        mobile: keyof AlignMapTypes['mobile'];
        desktop: keyof AlignMapTypes['desktop'];
      };
  justify?: keyof typeof justifyMap;
}

const StackContent = styled('div').withConfig({
  shouldForwardProp: (prop) =>
    !['spacing', 'direction', 'align', 'justify'].includes(prop),
})<StackProps>`
  display: flex;

  .gatsby-image-wrapper {
    width: 100%;
  }

  // JUSTIFY STYLES
  justify-content: ${({ justify = 'start' }) => justifyMap[justify]};
  ${({ justify = 'start' }) => `
        ${justify === 'stretch' ? '& > * { flex: 1 1 0%; }' : ''}
    `};

  // DIRECTION STYLES
  ${({ direction = { mobile: 'vertical', desktop: 'vertical' } }) => {
    const mobileDir =
      typeof direction === 'string' ? direction : direction.mobile;
    const desktopDir =
      typeof direction === 'string' ? direction : direction.desktop;

    const mobileNormal = directionMap[mobileDir].mobile.normal;
    const desktopNormal = directionMap[desktopDir].desktop.normal;

    return `
      flex-direction: ${mobileNormal};

      @media (min-width: ${breakpoints.desktop}) {
        flex-direction: ${desktopNormal};
      }
    `;
  }};

  // SPACING STYLES
  ${({
    direction = 'vertical',
    spacing = { mobile: 'small', desktop: 'base' },
  }) => {
    const mobileDir =
      typeof direction === 'string' ? direction : direction.mobile;
    const desktopDir =
      typeof direction === 'string' ? direction : direction.desktop;

    const mobileSpace = typeof spacing === 'string' ? spacing : spacing.mobile;
    const desktopSpace =
      typeof spacing === 'string' ? spacing : spacing.desktop;

    const mobileSpacing = spaceMap[mobileDir].mobile[mobileSpace];
    const desktopSpacing = spaceMap[desktopDir].desktop[desktopSpace];

    return `
        & > * + * {
          ${mobileSpacing}
        };

      @media (min-width: ${breakpoints.desktop}) {
        & > * + * {  
          ${desktopSpacing}
        }
      }
    `;
  }};

  // ALIGN STYLES
  ${({ align = { mobile: 'stretch', desktop: 'stretch' } }) => {
    const mobileAlign = typeof align === 'string' ? align : align.mobile;
    const desktopAlign = typeof align === 'string' ? align : align.desktop;

    if (typeof align === 'string') {
      return `align-items: ${alignMap.mobile[mobileAlign]}`;
    }

    return `
        align-items: ${alignMap.mobile[mobileAlign]};

        @media (min-width: ${breakpoints.desktop}) {
          align-items: ${alignMap.desktop[desktopAlign]};
        }
      `;
  }};
`;

export function Stack({
  children,
  spacing = { mobile: 'small', desktop: 'base' },
  direction = 'vertical',
  align = { mobile: 'stretch', desktop: 'stretch' },
  justify = 'start',
}: PropsWithChildren<StackProps>): ReactElement {
  return (
    <StackContent {...{ spacing, direction, align, justify }}>
      {children}
    </StackContent>
  );
}
