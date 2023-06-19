import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Menu from './menu';
import SubMenu from "./subMenu";
import MenuItem from "./menuItem";

const menuMeta: ComponentMeta<typeof Menu> = {
  title: 'Chapter 6',
  id: 'Menu',
  component: Menu,
  // subcomponents: {
  //   'SubMenu': SubMenu,
  //   'MenuItem': MenuItem
  // },
  args: {
    defaultIndex: '1'
  },
  argTypes: {
    defaultIndex: {
      control: 'color',
      description: 'normal test'
    }
  }
}

export default menuMeta

const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>
    <MenuItem>
      cool link 1
    </MenuItem>
    <MenuItem>
      cool link 2
    </MenuItem>
    <MenuItem disabled>
      disabled
    </MenuItem>
    <SubMenu title="dropDown">
      <MenuItem>
        drop down 1
      </MenuItem>
      <MenuItem>
        drop down 2
      </MenuItem>
      <MenuItem>
        drop down 3
      </MenuItem>
    </SubMenu>
  </Menu>
)

export const DefaultMenu = Template.bind({})
DefaultMenu.storyName = 'Default Menu'

export const ClickMenu = Template.bind({})
ClickMenu.args = {
  defaultIndex: '1',
  mode: 'vertical'
}

// ClickMenu.argTypes = {
//   defaultIndex: {
//     control: 'color'
//   }
// }

ClickMenu.storyName = 'Vertical Click'