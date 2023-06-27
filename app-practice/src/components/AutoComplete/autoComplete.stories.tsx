import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryFn} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AutoComplete } from "./autoComplete";

//不知道为什么这么写就生效了
const menuMeta: ComponentMeta<typeof AutoComplete> = {
  title: 'AutoComplete',
  id: 'AutoComplete',
  component: AutoComplete,
  parameters: {
    controls: {
      matchers: {
        date: /mode$/,
      }
    }
  }
}

export default menuMeta;

const lakers = ['bradley', 'prope', 'caruso', 'cook', 'cousins', 'james', 'apple', 'banana', 'good', 'bad', 'well', 'excellent']
const handleFetch = (query: string) => {
  return lakers.filter(name => name.includes(query))
}

export const MyStory: StoryFn = () => <AutoComplete fetchSuggestions={handleFetch} onSelect={action('selected')}/>;
MyStory.storyName = 'Default Menu'
