import * as React from 'react';
import { Typography as MuiTypography, makeStyles } from '@material-ui/core';

export type BodyVariant = 'body1' | 'body2';

export type BodyComponent = 'p' | 'span' | 'div';

export type BodyColor = 'initial' | 'primary' | 'secondary' | 'error';

export interface BodyProps {
  variant?: BodyVariant;
  component?: BodyComponent;
  color?: BodyColor;
  gutterBottom?: boolean;
  children: React.ReactNode;
}

const useStyles = makeStyles({
  gutterBottom: {
    marginBottom: '0.5em',
  },
});

export const Body: React.FC<BodyProps> = props => {
  const {
    variant = 'body1',
    component = 'p',
    children,
    ...additionalProps
  } = props;
  const classes = useStyles();
  return (
    <MuiTypography
      variant={variant}
      component={component}
      classes={classes}
      {...additionalProps}
    >
      {children}
    </MuiTypography>
  );
};
