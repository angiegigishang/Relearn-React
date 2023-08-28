import React, { FC, ReactNode, useContext, useEffect } from "react";
import classNames from "classnames";
import Form, { FormContext } from "./form";
export interface FormItemProps {
  name?: string | undefined;
  label?: string;
  children?: ReactNode;
}

const Item: FC<FormItemProps> = (props) => {
  const {
    name,
    label,
    children
  } = props
  const { dispatch, fields } = useContext(FormContext)
  const rowClass = classNames('viking-row', {
    'viking-row-no-label': !label
  })
  useEffect(() => {
    dispatch({ type: 'addField', name, value: {label, name, value: ''}})
  }, [])

  const fieldState = fields[name as string]
  const value = fieldState && fieldState.value
  const onValueUpdate = (e: any) => {
    const value = e.target.value
    console.log('new value', value)
    dispatch({type: 'updateValue', name, value})
  }

  const controlProps: Record<string, any> = {}
  controlProps.value = value;
  controlProps.onChange = onValueUpdate

  const childList = React.Children.toArray(children)

  const child = childList[0] as React.ReactElement

  const returnChildNode = React.cloneElement(
    child,
    {
      ...child.props,
      ...controlProps
    }
  )

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
        {returnChildNode}
      </div>
    </div>
  )
}

export default Item