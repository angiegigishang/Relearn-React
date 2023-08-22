import React, { FC, ReactNode, useContext, useEffect } from "react";
import classNames from "classnames";
import Form, { FormContext } from "./form";
export interface FormItemProps {
  name?: string;
  label?: string;
  children?: ReactNode;
}

const Item: FC<FormItemProps> = (props) => {
  const {
    name,
    label,
    children
  } = props
  const { dispatch } = useContext(FormContext)
  const rowClass = classNames('viking-row', {
    'viking-row-no-label': !label
  })
  useEffect(() => {
    dispatch({ type: 'addField', name, value: {label, name}})
  }, [])
  return (
    <div className={rowClass}>
      {label && 
        <div className="viking-form-item-label">
          <label title={label}>
            {label}
          </label>
        </div>
      }
      <div className="viking-form-item">
        {children}
      </div>
    </div>
  )
}

export default Item