import * as React from 'react';

import { Heading, HeadingComponent } from '../typography/Heading';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export interface ContentGroupProps {
  title?: string;
  titleComponent?: HeadingComponent;
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& + &': {
      marginTop: theme.spacing(4),
    },
  },
}));

export const ContentGroup: React.FC<ContentGroupProps> = ({
  title,
  titleComponent = 'h3',
  children,
}) => {
  const classes = useStyles();
  const header = title ? (
    <Heading variant="h5" component={titleComponent} gutterBottom={true}>
      {title}
    </Heading>
  ) : null;
  return (
    <div className={classes.root}>
      {header}
      {children}
    </div>
  );
};
