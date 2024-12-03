import { useRef, useState, useEffect } from 'react';
import { PiImageThin } from 'react-icons/pi';
import { uploadPngImg, patchPost } from '../../apis/post';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { LiaExchangeAltSolid } from 'react-icons/lia';
import { MdDeleteOutline } from 'react-icons/md';
import usePostStore from '../../feature/postSlice';
const EditPost = () => {
    const navigate = useNavigate();
    const params = useParams();
    const textarea1 = useRef<HTMLTextAreaElement | null>(null);
    const textarea2 = useRef<HTMLTextAreaElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const { postDetail } = usePostStore();

    const [uploadResponse, setUploadResponse] = useState<string | null>(null);

    const handleResize = (textarea: React.RefObject<HTMLTextAreaElement>) => {
        if (textarea.current) {
            textarea.current.style.height = 'auto'; // 기존 높이 초기화
            textarea.current.style.height =
                textarea.current.scrollHeight + 'px'; // 내용 길이에 따라 높이 설정
        }
    };

    const handleIconClick = () => {
        fileInputRef.current?.click();
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
        if (postDetail?.content && textarea2.current) {
            textarea2.current.value = postDetail.content; // 기본값 설정
            handleResize(textarea2); // 높이 조정
        }
        if (postDetail?.imageUrl) {
            setUploadResponse(postDetail.imageUrl);
        }
    }, [postDetail]);

    const { mutate: uploadPostMutation } = useMutation({
        mutationFn: patchPost,
        onSuccess: () => {
            navigate(`/post/${params.id}`);
        },
        onError: () => {
            alert('Post submission failed.');
        },
    });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const title = textarea1.current?.value || '';
        const content = textarea2.current?.value || '';
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
                <div onClick={handleIconClick} className="ml-5 cursor-pointer">
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
                            <div className="w-full relative">
                                <img
                                    src={`http://localhost:3000/${uploadResponse}`}
                                    alt="Uploaded preview"
                                    className="w-full pl-[20px] pr-[20px]"
                                />
                                <div className="absolute w-full pl-[20px] pr-[20px] hover:z-1 hover:bg-[rgba(0,0,0,0.8)] h-full inset-0 opacity-0 hover:opacity-100 flex justify-center items-center gap-[20px]">
                                    <LiaExchangeAltSolid
                                        size={30}
                                        color="white"
                                        strokeWidth={1}
                                        onClick={handleIconClick}
                                    />
                                    <MdDeleteOutline
                                        size={33}
                                        color="white"
                                        onClick={() => setUploadResponse(null)}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col w-full">
                                <span className="text-center">
                                    {'<== 미리보기 이미지 ==>'}
                                </span>
                                <div className="relative w-full">
                                    <img
                                        src={`http://localhost:3000/public/temp/${uploadResponse}`}
                                        alt="Temporary preview"
                                        className="w-full pl-[20px] pr-[20px]"
                                    />
                                    <div className="absolute w-full pl-[20px] pr-[20px] hover:z-1 hover:bg-[rgba(0,0,0,0.8)] h-full inset-0 opacity-0 hover:opacity-100 flex justify-center items-center gap-[20px]">
                                        <LiaExchangeAltSolid
                                            size={30}
                                            color="white"
                                            strokeWidth={1}
                                            onClick={handleIconClick}
                                        />
                                        <MdDeleteOutline
                                            size={33}
                                            color="white"
                                            onClick={() =>
                                                setUploadResponse(null)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                    <textarea
                        ref={textarea2}
                        className="resize-none w-full p-5 text-xl font-light focus:outline-none"
                        placeholder="내용을 입력하세요"
                        rows={10}
                        onChange={() => handleResize(textarea2)}
                    />
                </form>
            </div>
        </div>
    );
};

export default EditPost;
