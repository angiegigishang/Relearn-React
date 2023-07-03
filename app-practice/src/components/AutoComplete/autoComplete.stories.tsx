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

const lakersWithNumber = [
  {value: 'bradley', number: 11},
  {value: 'pope', number: 1},
  {value: 'caruso', number: 4},
  {value: 'cook', number: 5},
  {value: 'cc', number: 6},
  {value: 'apple', number: 7},
  {value: 'rose', number: 6},
  {value: 'good', number: 9},
]

const handleFetch = (query: string) => {
  return lakers.filter(name => name.includes(query))
}

const renderOption = (item: string) => {
  return (
    <h2>Name: {item}</h2>
  )
}

export const MyStory: StoryFn = () => <AutoComplete 
                                        fetchSuggestions={handleFetch} 
                                        onSelect={action('selected')}
                                        renderOption={renderOption}
                                      />;
MyStory.storyName = 'Default Menu'
