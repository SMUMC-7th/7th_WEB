import { useRef, useState } from 'react';
import TuiEditor from '../components/TuiEditor';
import type { Editor } from '@toast-ui/react-editor';
import { getImageUrl } from '../apis/post';
import { useGetWritePost } from '../hooks/useGetPost';
import { TPostBody } from '../type/post';

function WritePost() {
  const [title, setTitle] = useState('');
  const editorRef = useRef<Editor>(null);

  const handleImage = async (file: File, callback: typeof Function) => {
    if (file.type !== 'image/png') {
      alert('.png 파일만 가능합니다.');
      return;
    }
    const imageUrl = await getImageUrl(file);

    callback(imageUrl);
  };

  const getContents = () => {
    const markdownContent = editorRef.current?.getInstance().getMarkdown();
    const imageUrlMatch = markdownContent?.match(/\!\[\]\((.*?)\)/);
    const content = markdownContent?.replace(/\!\[\]\(.*?\)/, '').trim();
    const imageUrl = imageUrlMatch ? imageUrlMatch[1] : '';

    return { content, imageUrl };
  };

  const { mutate, isPending, isError } = useGetWritePost();

  const onSubmit = (data: TPostBody) => {
    mutate({
      title: data.title,
      content: data.content,
      imageUrl: data.imageUrl,
    });
  };

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full h-16 bg-white flex flex-row-reverse items-center px-5'>
        <button
          className='w-24 h-10 bg-green-primary hover:bg-green-secondary text-white rounded-md'
          onClick={() => {
            const { content, imageUrl } = getContents();
            onSubmit({ title, content, imageUrl });
          }}
        >
          게시글 발행
        </button>
      </div>
      <div className='pageLayout flex flex-cols'>
        <input
          type='text'
          placeholder='제목을 입력하세요.'
          className='text-3xl px-3 py-2'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TuiEditor editorRef={editorRef} imageHandler={handleImage} />
      </div>
    </div>
  );
}

export default WritePost;
