import React, { ReactElement, InputHTMLAttributes} from "react";
import { IconProps } from "../Icon/icon";

type InputSize = 'lg' | 'sm'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProps;
  prepand?: string | ReactElement;
  append?: string | ReactElement;
}