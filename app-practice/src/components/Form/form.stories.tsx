import React from "react";
import { ComponentMeta } from "@storybook/react";
import Form from "./form";
import Item from "./formItem";
import Input from "../Input";
import Button from "../Button/button";
import { CustomRule } from "./useStore";

const meta: ComponentMeta<typeof Form> = {
  title: 'Form Group',
  id: 'Form',
  component: Form,
  subcomponents: {'Item': Item},
  decorators: [
    (Story) => (
      <div style={{width: '550px'}}>
        <Story/>
      </div>
    )
  ]
}

export default meta

const confirmRules: CustomRule[] = [
  {type: 'string', required: true, min: 3, max: 8},
  ({ getFieldValue })=> ({
    asyncValidator(rule, value) {
      console.log('the value', getFieldValue('password'))
      console.log(value)
      if( value !== getFieldValue('password')) {
        return Promise.reject('The two passwords you enter do not same')
      }
      return Promise.resolve()
    }
  })
]

export const BasicForm = () =>  {
  return (
    <Form initialValues={{username: 'aaaa', agreement: true}}>
      <Item label="user name" name="username" rules={[{type: 'email', required: true}]}>
        <Input/>
      </Item>
      <Item label="password" name="password" rules={[{type: 'string', required: true, min: 3, max: 8}]}>
        <Input type='password'/>
      </Item>
      <Item label="repeat password" name="repeat password" rules={confirmRules}>
        <Input type='password'/>
      </Item>
      <Item name="ccc">
        <Input placeholder="no-label"/>
      </Item>
      <div className="agreement-section" style={{'display': 'flex', 'justifyContent': 'center'}}>
        <Item name="ddd" valuePropsName="checked" getValueFromEvent={(e)=> e.target.checked}>
          <input type="checkbox"/>
        </Item>
        <span className="agree-text">You agr·ee to subscribe<a href="#">user content</a></span>
      </div>
      <div className='viking-form-submit-area'>
        <Button type='submit' btnType='primary'>log in</Button>
      </div>
    </Form>
  )
}
