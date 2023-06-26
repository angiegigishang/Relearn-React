import React from "react";
import { storiesOf} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AutoComplete } from "./autoComplete";

const SimpleComplete = () => {
  const lakers = ['bradley', 'prope', 'caruso', 'cook', 'cousins', 'james', 'apple', 'banana', 'good', 'bad', 'well', 'excellent']
  const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query))
  }
  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
    />
  )
}

storiesOf('AutoComplete Component', module).add('AutoComplete', SimpleComplete)