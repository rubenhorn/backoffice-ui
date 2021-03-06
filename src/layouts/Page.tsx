import * as React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import {
  LAYOUT_MAX_WIDTH_DEFAULT,
  LAYOUT_MAX_WIDTH_NARROW,
  OUTER_MARGIN,
} from '../constants/dimensions';

export type PageVariant = 'default' | 'narrow';

export type PageChildren = React.ReactNode | React.ReactNode[];

export interface PageProps {
  bar?: React.ReactNode;
  variant?: PageVariant;
  children: PageChildren;
}

interface ItemSizingProps {
  xs: boolean | 3 | 4 | 6 | 12;
  md: boolean | 3 | 4 | 6 | 12;
  lg: boolean | 3 | 4 | 6 | 12;
  xl: boolean | 3 | 4 | 6 | 12;
}

const useStyles = makeStyles({
  outer: {
    padding: OUTER_MARGIN,
  },
  inner: {
    margin: '0 auto',
    width: '100%',
    maxWidth: LAYOUT_MAX_WIDTH_DEFAULT,
  },
  innerNarrow: {
    maxWidth: LAYOUT_MAX_WIDTH_NARROW,
  },
});

export const Page: React.FC<PageProps> = props => {
  const { bar, variant = 'default', children } = props;
  const classes = useStyles();
  const items = Array.isArray(children) ? children : [children];
  const itemSizingProps: ItemSizingProps = {
    xs: 12,
    md: true,
    lg: false,
    xl: false,
  };

  if (items.length < 5) {
    itemSizingProps.xl = true;
  }

  if (items.length < 4) {
    itemSizingProps.lg = true;
  }

  const gridContent = items.map((tempItem, index) => (
    <Grid item={true} key={`page-item-${index}`} {...itemSizingProps}>
      {tempItem}
    </Grid>
  ));

  let innerClassName = classes.inner;
  if (variant === 'narrow') {
    innerClassName = `${innerClassName} ${classes.innerNarrow}`;
  }

  return (
    <>
      {bar || null}
      <div className={classes.outer}>
        <div className={innerClassName}>
          <Grid container={true} spacing={4} justify="center" component="main">
            {gridContent}
          </Grid>
        </div>
      </div>
    </>
  );
};
