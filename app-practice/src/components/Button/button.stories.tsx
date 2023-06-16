import React from 'react';
import Button from './button';
import preview from '../../../.storybook/preview';

import { ComponentMeta, ComponentStory } from '@storybook/react';


const buttonMeta: ComponentMeta<typeof Button> = {
  title: 'chapter4: Button',
  component: Button
}

export default buttonMeta;

export const Default: ComponentStory<typeof Button> = (args) => (
  <>
    <Button {...args}>Default Button</Button>
    <Button size="lg" {...args}>Default Button</Button>
  </>
)

Default.storyName = 'Defalut Buton'

export const ButtonWithSize: ComponentStory<typeof Button> = () => (
  <>
    <Button size="lg">large button</Button>
    <Button size="sm">small button</Button>
  </>
)

ButtonWithSize.storyName = 'Different size'

export const ButtonWithType: ComponentStory<typeof Button> = () => (
  <>
    <Button btnType="primary">primary button</Button>
    <Button btnType="danger">danger button</Button>
    <Button btnType="link" href="http://baidu.com">link button</Button>
  </>
)

ButtonWithType.storyName = 'Different Type'