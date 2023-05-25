import classNames from "classnames";
import React, { FC, useState } from "react";

export type AlertType = 'success' |
                        'default' |
                        'danger' |
                        'warning'

export interface BaseAlertProps {
  className?: string;
  content?: string;
  header?: string;
  alertType?: AlertType;
}

export type AlertProps = BaseAlertProps & React.AllHTMLAttributes<HTMLElement>

export const Alert: FC<AlertProps> = (props) => {
  const {
    className,
    content,
    header,
    alertType
  } = props
  const classes = classNames('alert', className, {
    [`alert-${alertType}`]: alertType,
  })
  return (
    <div className={classes}>
      <div className="header">{header}</div>
      <div className="content">{content}</div>
      <div className="close-box">x</div>
    </div>
  )
}

export default Alert;