import React, { FC, ReactNode, useContext, useEffect } from "react";
import classNames from "classnames";
import Form, { FormContext } from "./form";
import { RuleItem } from 'async-validator';

export type SomeRequired<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>
type TestType = SomeRequired<FormItemProps, 'getValueFromEvent'>
export interface FormItemProps {
  name?: any;
  label?: string;
  children?: ReactNode;
  valuePropsName?: string;
  trigger?: string;
  val?: string;
  getValueFromEvent?: (event: any) => any;
  rules?: RuleItem[];
  validateTrigger?: string;
}

const Item: FC<FormItemProps> = (props) => {
  const {
    name,
    label,
    rules,
    children,
    valuePropsName,
    trigger,
    validateTrigger,
    getValueFromEvent
  } = props as SomeRequired<FormItemProps, 'getValueFromEvent' | 'trigger' | 'valuePropsName' | 'validateTrigger'>
  const { dispatch, fields, initialValues, validateField } = useContext(FormContext)
  const rowClass = classNames('viking-row', {
    'viking-row-no-label': !label
  })
  useEffect(() => {
    const value = (initialValues && initialValues[name as string]) || ''
    dispatch({ type: 'addField', name, value: {label, name, value, rules, isValid: true}})
  }, [])

  const fieldState = fields[name as string]
  const value = fieldState && fieldState.value
  const errors = fieldState && fieldState.errors
  const isRequired = rules?.some(rule => rule.required)
  const hasError = errors && errors.length > 0
  const labelClass = classNames({
    'viking-form-item-required': isRequired
  })
  const itemClass = classNames('viking-form-item-control', {
    'viking-form-item-has-error': hasError
  })

  const onValueUpdate = (e: any) => {
    const value = getValueFromEvent && getValueFromEvent(e)
    console.log('new value', value)
    dispatch({type: 'updateValue', name, value})
  }
  const onValueValidate = async() => {
    await validateField(name)
  }

  const controlProps: Record<string, any> = {}
  controlProps[valuePropsName!] = value;
  controlProps[trigger!] = onValueUpdate
  if (rules) {
    controlProps[validateTrigger] = onValueValidate
  }
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
          <label title={label} className={labelClass}>
            {label}
          </label>
        </div>
      }
      <div className="viking-form-item">
        <div className={itemClass}>
          {returnChildNode}
        </div>
        {hasError && 
          <div className="viking-form-explain">
            <span>
              {errors[0].message}
            </span>
          </div>  
        }
      </div>
    </div>
  )
}

Item.defaultProps = {
  valuePropsName: 'value',
  trigger: 'onChange',
  validateTrigger: 'onBlur',
  getValueFromEvent: (e) => e.target.value
}
export default Item