import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';

type Props = {
  editorRef: React.RefObject<Editor> | null;
  imageHandler: (blob: File, callback: typeof Function) => void;
  content?: string;
};

const toolbar = [['heading', 'bold', 'italic', 'strike'], ['hr', 'quote', 'ul', 'ol'], ['image']];

function TuiEditor({ content, editorRef, imageHandler }: Props) {
  return (
    <div className='w-full'>
      <Editor
        initialValue={content ?? ' '}
        initialEditType='wysiwyg'
        autofocus={false}
        ref={editorRef}
        toolbarItems={toolbar}
        hideModeSwitch
        height='500px'
        hooks={{ addImageBlobHook: imageHandler }}
      />
    </div>
  );
}

export default TuiEditor;
