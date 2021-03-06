import * as React from 'react';
import { Chip, Theme } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { ChipProps } from '@material-ui/core/Chip';
import { SUCCESS, ERROR, WARNING, PRIMARY } from '../constants/colors';
import { makeStyles } from '@material-ui/styles';

export type StatusChipColor =
  | 'default'
  | 'success'
  | 'error'
  | 'warning'
  | 'info';

const colorMap: { [k: string]: string } = {
  info: PRIMARY,
  warning: WARNING,
  success: SUCCESS,
  error: ERROR,
};

export interface StatusChipProps {
  label: string;
  icon?: React.ReactType<SvgIconProps>;
  color?: StatusChipColor;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: (props: StatusChipProps) => {
    const sanitizedColorName: StatusChipColor = props.color || 'default';
    return {
      color:
        sanitizedColorName in colorMap
          ? colorMap[sanitizedColorName]
          : theme.palette.grey[600],
      borderColor: 'currentColor',
    };
  },
  icon: {
    color: 'inherit',
  },
}));

export const StatusChip: React.FC<StatusChipProps> = props => {
  const { label, icon } = props;
  const classes = useStyles(props);

  const chipProps: ChipProps = {
    label,
    variant: 'outlined',
    classes: { root: classes.root }, // TODO
  };

  if (icon) {
    const IconComponent = icon;
    const iconProps = {
      classes: { root: classes.icon },
    };
    chipProps.icon = <IconComponent {...iconProps} />;
  }

  return <Chip {...chipProps} />;
};
