import { useRef, useState, useEffect } from 'react';
import { PiImageThin } from 'react-icons/pi';
import { uploadPngImg, patchPost } from '../../apis/post';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import usePostStore from '../../feature/postSlice';
import { Editor } from '@toast-ui/react-editor';
import color from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import { queryClient } from '../../main';

const EditPost = () => {
    const params = useParams();
    const textarea1 = useRef<HTMLTextAreaElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const editorRef = useRef<Editor>(null);

    const { postDetail } = usePostStore();
    console.log(postDetail);
    const [uploadResponse, setUploadResponse] = useState<string | null>(null);

    const handleResize = (textarea: React.RefObject<HTMLTextAreaElement>) => {
        if (textarea.current) {
            textarea.current.style.height = 'auto'; // 기존 높이 초기화
            textarea.current.style.height =
                textarea.current.scrollHeight + 'px'; // 내용 길이에 따라 높이 설정
        }
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
                `http://localhost:3000/public/temp/${imageUrl}`,
                'Uploaded Image'
            );
        } catch (error) {
            console.error('이미지 업로드 실패:', error);
            alert('이미지 업로드 중 오류가 발생했습니다.');
        }
    };

    const handleFileChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (file && file.type === 'image/png') {
            try {
                const response = await uploadPngImg(file);
                setUploadResponse(response.imageUrl);
            } catch (error) {
                console.error(error);
                alert('Upload failed. Please try again.');
            }
        } else {
            alert('Please upload a valid PNG file.');
        }
    };

    useEffect(() => {
        if (postDetail?.title && textarea1.current) {
            textarea1.current.value = postDetail.title; // 기본값 설정
            handleResize(textarea1); // 높이 조정
        }
        if (postDetail?.imageUrl) {
            setUploadResponse(postDetail.imageUrl);
        }
    }, [postDetail]);

    const { mutate: uploadPostMutation } = useMutation({
        mutationFn: patchPost,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['postDetail', params.id],
            }); // 서버에서 수정된 데이터를 다시 불러오기
            window.location.href = `/post/${params.id}`;
        },
        onError: () => {
            alert('Post submission failed.');
        },
    });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const title = textarea1.current?.value || '';
        const content = editorRef.current?.getInstance().getHTML() || '';

        if (!title.trim() || !content.trim()) {
            alert('Title and content cannot be empty.');
            return;
        }

        const postData = {
            title,
            content,
            imageUrl: uploadResponse || undefined,
        };

        const postId = Number(params.id);
        if (!postId) {
            alert('Invalid post ID.');
            return;
        }
        uploadPostMutation({ postId, postData });
    };

    return (
        <div className="flex flex-col items-center h-full bg-slate-50">
            <div className="flex w-full bg-white h-12 fixed top-[60px] items-center border-b border-gray z-10">
                <div className="ml-5 cursor-pointer">
                    <PiImageThin size={25} />
                </div>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png"
                    className="hidden"
                    onChange={handleFileChange}
                />
                {uploadResponse && (
                    <div className="text-green-500">{uploadResponse}</div>
                )}

                <button
                    type="submit"
                    onClick={onSubmit}
                    className="mr-5 ml-auto bg-blue-400 h-9 px-5 rounded text-white"
                >
                    발행
                </button>
            </div>

            <div className="w-full flex flex-col items-center mt-24 h-full">
                <form
                    onSubmit={onSubmit}
                    className="w-3/5 flex flex-col bg-white border border-gray min-h-full"
                >
                    <textarea
                        ref={textarea1}
                        className="resize-none w-full p-5 text-2xl font-light focus:outline-none"
                        placeholder="제목을 입력하세요"
                        maxLength={60}
                        rows={1}
                        onChange={() => handleResize(textarea1)}
                    />
                    <hr className="border-gray w-[95%]" />
                    {uploadResponse != null &&
                        (uploadResponse.includes('public') ? (
                            <img
                                src={`http://localhost:3000/${uploadResponse}`}
                                alt="Uploaded preview"
                                className="w-[100px] h-[100px] object-cover"
                            />
                        ) : (
                            <img
                                src={`http://localhost:3000/public/temp/${uploadResponse}`}
                                alt="Temporary preview"
                                className="w-full pl-[20px] pr-[20px]"
                            />
                        ))}
                    <Editor
                        ref={editorRef}
                        initialValue={postDetail?.content || ''}
                        initialEditType="wysiwyg"
                        hideModeSwitch={true}
                        plugins={[color]}
                        height="100%"
                        hooks={{ addImageBlobHook: handleImageUpload }}
                    ></Editor>
                </form>
            </div>
        </div>
    );
};

export default EditPost;
