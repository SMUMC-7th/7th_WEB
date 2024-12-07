import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

type Props = {
  content: string;
  style?: string;
};

function TuiViewer({ content }: Props) {
  return <Viewer initialValue={content} />;
}

export default TuiViewer;
