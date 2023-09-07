import React, { FC, ReactNode, useContext, useEffect } from "react";
import classNames from "classnames";
import Form, { FormContext } from "./form";

export type SomeRequired<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>
type TestType = SomeRequired<FormItemProps, 'getValueFromEvent'>
export interface FormItemProps {
  name?: string | undefined;
  label?: string;
  children?: ReactNode;
  valuePropsName?: string;
  trigger?: string;
  val?: string;
  getValueFromEvent?: (event: any) => any;
}

const Item: FC<FormItemProps> = (props) => {
  const {
    name,
    label,
    children,
    valuePropsName,
    trigger,
    getValueFromEvent
  } = props as SomeRequired<FormItemProps, 'getValueFromEvent' | 'trigger' | 'val'>
  const { dispatch, fields, initialValues } = useContext(FormContext)
  const rowClass = classNames('viking-row', {
    'viking-row-no-label': !label
  })
  useEffect(() => {
    const value = (initialValues && initialValues[name as string]) || ''
    dispatch({ type: 'addField', name, value: {label, name, value}})
  }, [])

  const fieldState = fields[name as string]
  const value = fieldState && fieldState.value
  const onValueUpdate = (e: any) => {
    const value = getValueFromEvent && getValueFromEvent(e)
    console.log('new value', value)
    dispatch({type: 'updateValue', name, value})
  }

  const controlProps: Record<string, any> = {}
  controlProps[valuePropsName!] = value;
  controlProps[trigger!] = onValueUpdate

  const childList = React.Children.toArray(children)

  if(childList.length === 0) {
    console.error('no child element found in form')
  }
  if(childList.length > 1) {
    console.warn('only support one child element')
  }
  if(!React.isValidElement(childList[0])) {
    console.log('child component is not react element')
  }
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

Item.defaultProps = {
  valuePropsName: 'value',
  trigger: 'onChange',
  getValueFromEvent: (e) => e.target.value
}
export default Item