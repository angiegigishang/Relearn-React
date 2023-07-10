import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryFn} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AutoComplete,DataSourceType } from "./autoComplete";


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

// const handleFetch = (query: string) => {
//   return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
// }

// const handleFetch = (query: string) => {
//   return lakersWithNumber.filter(player => player.value.includes(query))
// }

const handleFetch = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res => res.json())
    .then(({items}) => {
      console.log(items)
      // return items.slice(0, 10).map(item => ({
      //   value: item.login, ...item
      // }))
      const formatItems = items.slice(0,10).map(item => ({ value: item.login, ...item}))
    })
}

const renderOption = (item: DataSourceType<any>) => {
  return (
    <>
    <h2>Name: {item.login}</h2>
    <p>url: {item.url}</p>
    </>
  )
}

export const MyStory: StoryFn = () => <AutoComplete 
                                        fetchSuggestions={handleFetch} 
                                        onSelect={action('selected')}
                                        renderOption={renderOption}
                                      />;
MyStory.storyName = 'Default Menu'
