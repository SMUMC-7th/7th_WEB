import { useRef, useState } from 'react';
import { PiImageThin } from 'react-icons/pi';
import { uploadPngImg, uploadPost } from '../../apis/post';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';
import color from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

const Write = () => {
    const navigate = useNavigate();
    const textarea1 = useRef<HTMLTextAreaElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [uploadResponse, setUploadResponse] = useState<string | null>(null);
    const editorRef = useRef<Editor>(null);

    const handleResize = (textarea: React.RefObject<HTMLTextAreaElement>) => {
        if (textarea.current) {
            textarea.current.style.height = 'auto';
            textarea.current.style.height =
                textarea.current.scrollHeight + 'px';
        }
    };

    const handleIconClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageUpload = async (
        blob: File,
        callback: (url: string, altText?: string) => void
    ) => {
        if (blob.type !== 'image/png') {
            alert('PNG 파일만 업로드 가능합니다.');
            return;
        }
        try {
            const response = await uploadPngImg(blob);
            const imageUrl = response.imageUrl;
            setUploadResponse(imageUrl);
            console.log(response);
            callback(
                `http://localhost:3000/public/image/${imageUrl}`,
                'Uploaded Image'
            );
        } catch (error) {
            console.error('이미지 업로드 실패:', error);
            alert('이미지 업로드 중 오류가 발생했습니다.');
        }
    };

    const { mutate: uploadPostMutation } = useMutation({
        mutationFn: uploadPost,
        onSuccess: () => {
            navigate('/');
        },
        onError: (error) => {
            console.log(error);
            alert('블로그 작성에 실패했습니다');
        },
    });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const title = textarea1.current?.value || '';
        const content = editorRef.current?.getInstance().getHTML() || '';
        if (!title.trim() || !content) {
            alert('제목과 본문을 반드시 입력해주세요');
            return;
        }
        const postData = {
            title,
            content,
            imageUrl: uploadResponse || null,
        };

        uploadPostMutation(postData);
    };

    return (
        <div className="flex flex-col items-center bg-slate-50 h-full">
            <div className="flex w-[90%] bg-slate-50 h-[50px] fixed top-[62px] items-center z-10">
                <div onClick={handleIconClick} className="ml-5 cursor-pointer">
                    <PiImageThin size={25} />
                </div>
                {uploadResponse && (
                    <div className="text-green-500">{uploadResponse}</div>
                )}
                <button
                    type="submit"
                    onClick={onSubmit}
                    className="mr-5 ml-auto bg-[#768da3] h-9 px-5 rounded font-[300] text-white"
                >
                    발행
                </button>
            </div>
            <hr className="border-gray w-[100vw] fixed top-[112px]" />
            <div className="w-full flex flex-col items-center mt-[110px] h-full">
                <form
                    onSubmit={onSubmit}
                    className="w-3/5 min-w-[400px] flex flex-col bg-white border-b border-l border-r border-gray h-full"
                    data-color-mode="light"
                >
                    <textarea
                        ref={textarea1}
                        className="resize-none w-full p-5 text-2xl font-light focus:outline-none"
                        placeholder="제목을 입력하세요"
                        maxLength={60}
                        rows={1}
                        onChange={() => handleResize(textarea1)}
                    />
                    <hr className="border-gray w-full" />
                    {uploadResponse && (
                        <img
                            className="w-[100px] h-[100px] object-cover"
                            src={`http://localhost:3000/public/temp/${uploadResponse}`}
                        ></img>
                    )}
                    <Editor
                        ref={editorRef}
                        initialEditType="wysiwyg"
                        hideModeSwitch={true}
                        plugins={[color]}
                        initialValue=" "
                        height="100%"
                        hooks={{ addImageBlobHook: handleImageUpload }}
                    ></Editor>
                </form>
            </div>
        </div>
    );
};

export default Write;
