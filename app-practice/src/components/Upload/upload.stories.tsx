import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Upload } from './upload';
import { StoryFn} from '@storybook/react';
import { UploadFile } from './upload';

const defaultFileList: UploadFile[] = [
  {
    uid: '123',
    size: 1234,
    name: 'hello.md',
    status: 'uploading',
    percent: 30
  },
  {
    uid: '124',
    size: 1234,
    name: 'hello.md',
    status: 'success',
    percent: 30
  },
  {
    uid: '125',
    size: 1234,
    name: 'hello.md',
    status: 'error',
    percent: 30
  }
]


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

const checkFileSiza = (file: File) => {
  if (Math.round(file.size / 1024) > 1) {
    alert('file too big')
    return false
  }
  return true
}

const filePromise = (file: File) => {
  const newFile = new File([file], 'new_name.docx', {type: file.type})
  return Promise.resolve(newFile)
}

export default menuMeta;

export const MyStory: StoryFn = () => <Upload
  //action="https://jsonplaceholder.typicode.com/posts"
  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
  // onProgress={action('progress')}
  // onSuccess={action('success')}
  // onError={action('error')}
  onChange={action('changed')}
  //beforeUpload={filePromise}
  //beforeUpload={checkFileSiza}
  defaultFileList={defaultFileList}
  onRemove={action('removed')}
  name="fileName"
  data={{'key': 'value'}}
  headers={{'X-Powered-By': 'test-angie'}}
  accept=".pdf"
  multiple = {true}
  drag={true}
/>;
MyStory.storyName = 'Upload Function' 