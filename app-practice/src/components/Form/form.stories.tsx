import React from "react";
import { ComponentMeta } from "@storybook/react";
import Form from "./form";
import Item from "./formItem";
import Input from "../Input";
import Button from "../Button/button";

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

export const BasicForm = () =>  {
  return (
    <Form>
      <Item label="user name" name="aaa">
        <Input/>
      </Item>
      <Item label="password" name="bbb">
        <Input type='password'/>
      </Item>
      <Item name="ccc">
        <Input placeholder="no-label"/>
      </Item>
      <div className="agreement-section" style={{'display': 'flex', 'justifyContent': 'center'}}>
        <Item name="ddd">
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
