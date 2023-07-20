import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Upload } from './upload';
import { StoryFn} from '@storybook/react';


// const SimpleUpload = () => {
//   return (
//     <Upload
//       action="https://jsonplaceholder.typicode.com/posts"
//     />
//   )
// }

// storiesOf('Upload component', module)
//   .add('Upload', SimpleUpload)

const menuMeta: ComponentMeta<typeof Upload> = {
  title: 'Upload',
  id: 'Upload',
  component: Upload,
  parameters: {
    controls: {
      matchers: {
        date: /mode$/,
      }
    }
  }
}

export default menuMeta;

export const MyStory: StoryFn = () => <Upload
  action="https://jsonplaceholder.typicode.com/posts"
  onProgress={action('progress')}
  onSuccess={action('success')}
  onError={action('error')}
/>;
MyStory.storyName = 'Upload Function' 