import { useRef, useState } from 'react';
import { PiImageThin } from 'react-icons/pi';
import { uploadPngImg, uploadPost } from '../../apis/post';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { LiaExchangeAltSolid } from 'react-icons/lia';
import { MdDeleteOutline } from 'react-icons/md';

const Write = () => {
    const navigate = useNavigate();
    const textarea1 = useRef<HTMLTextAreaElement | null>(null);
    const textarea2 = useRef<HTMLTextAreaElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const [uploadResponse, setUploadResponse] = useState<string | null>(null);
    // const [errorMessage, alert] = useState<string | null>(null);

    const handleResize = (textarea: React.RefObject<HTMLTextAreaElement>) => {
        if (textarea.current) {
            textarea.current.style.height = 'auto';
            textarea.current.style.height =
                textarea.current.scrollHeight + 'px';
        }
        //textarea.current.scrollHeight는 텍스트 영역에 입력된 텍스트가 차지하는 높이를 계산하여 반환, 이를 픽셀 단위로 지정하여 텍스트 영역의 높이가 자동으로 늘어나게 됨.
    };

    const handleIconClick = () => {
        fileInputRef.current?.click();
        //input박스가 안예뻐서 icon이 클릭되면 input이 클릭된 것과 똑같은 기능을 하게 하려고 설정
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
                alert('업로드에 실패했습니다. 다시 업로드 해주세요');
            }
        } else {
            alert('PNG 파일을 업로드 해주세요');
        }
    };

    const { mutate: uploadPostMutation } = useMutation({
        mutationFn: uploadPost,
        onSuccess: () => {
            navigate('/');
        },
        onError: () => {
            alert('블로그 작성에 실패했습니다');
        },
    });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const title = textarea1.current?.value || '';
        const content = textarea2.current?.value || '';
        if (!title.trim() || !content.trim()) {
            alert('제목과 본문을 반드시 입력해주세요');
            return;
        }

        const postData = {
            title,
            content,
            imageUrl: uploadResponse || undefined,
        };

        uploadPostMutation(postData);
    };

    return (
        <div className="flex flex-col items-center h-full bg-slate-50 ">
            <div className="flex w-[90%] bg-slate-50 h-[50px] fixed top-[62px] items-center z-10">
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
                    className="mr-5 ml-auto bg-[#768da3] h-9 px-5 rounded font-[300] text-white"
                >
                    발행
                </button>
            </div>
            <hr className="border-gray w-[100vw] fixed top-[112px]" />
            <div className="w-full flex flex-col items-center mt-[110px] h-full">
                <form
                    onSubmit={onSubmit}
                    className="w-3/5 min-w-[400px] flex flex-col bg-white border-b border-l border-r border-gray min-h-full"
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
                        <div className="relative w-full">
                            <img
                                src={`http://localhost:3000/public/temp/${uploadResponse}`}
                                alt="Temporary preview"
                                className="w-full z-0"
                            />
                            <div className="absolute w-full hover:z-1 hover:bg-[rgba(0,0,0,0.8)] h-full inset-0 opacity-0 hover:opacity-100 flex justify-center items-center gap-[20px] z-0">
                                <LiaExchangeAltSolid
                                    size={30}
                                    color="white"
                                    strokeWidth={1}
                                    onClick={handleIconClick}
                                />
                                <MdDeleteOutline
                                    size={33}
                                    color="white"
                                    onClick={() => {
                                        setUploadResponse(null);
                                        if (fileInputRef.current) {
                                            fileInputRef.current.value = ''; // 파일 입력 비우기
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    )}
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

export default Write;
