import React from 'react';
import Button from './button';
import preview from '../../../.storybook/preview';

import { ComponentMeta, ComponentStory } from '@storybook/react';


const buttonMeta: ComponentMeta<typeof Button> = {
  title: 'chapter4: Button',
  component: Button
}

export default buttonMeta;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
)

export const Default = Template.bind({})

Default.args = {
  children: 'Default Button'
}
Default.storyName = 'Defalut Buton'
Default.decorators = [
  (Story) => (
    <div style={{margin: '50px'}}>
      <Story/>
    </div>
  )
]

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  children: 'Large Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  children: 'Small Button'
}

export const Primary = Template.bind({})
Primary.args = {
  btnType: 'primary',
  children: 'Primary Button'
}

export const Danger = Template.bind({})
Danger.args = {
  btnType: 'danger',
  children: 'Danger Button'
}

export const Link = Template.bind({})
Link.args = {
  btnType: 'link',
  children: 'Link Button'
}



// export const Default: ComponentStory<typeof Button> = (args) => (
//   <>
//     <Button {...args}>Default Button</Button>
//     <Button size="lg" {...args}>Default Button</Button>
//   </>
// )

// export const ButtonWithSize: ComponentStory<typeof Button> = (args) => (
//   <>
//     <Button size="lg" {...args}>large button</Button>
//     <Button size="sm" {...args}>small button</Button>
//   </>
// )

// ButtonWithSize.storyName = 'Different size'

// export const ButtonWithType: ComponentStory<typeof Button> = (args) => (
//   <>
//     <Button btnType="primary">primary button</Button>
//     <Button btnType="danger">danger button</Button>
//     <Button btnType="link" href="http://baidu.com">link button</Button>
//   </>
// )

// ButtonWithType.storyName = 'Different Type'