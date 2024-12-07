import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import {
    addLike,
    deletePost,
    getPostDetail,
    addDisLike,
} from '../../apis/post';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/LogInContext';
import { format, toZonedTime } from 'date-fns-tz';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';
import { IoMdHeart, IoMdHeartDislike } from 'react-icons/io';
import usePostStore from '../../feature/postSlice';
import { Viewer } from '@toast-ui/react-editor';

const PostDetail = () => {
    const { userId } = useAuthContext();
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const postId = Number(id);
    const { setPostDetail } = usePostStore();

    // 게시글 상세 정보 가져오기
    const { data, isLoading, isError } = useQuery({
        queryKey: ['postDetail', postId],
        queryFn: () => getPostDetail(postId),
        enabled: !!id,
    });

    //좋아요
    const { mutate: likeMutation } = useMutation({
        mutationFn: addLike,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['postDetail', postId],
            });
        },
        onError: (error) => {
            console.error('좋아요 실패:', error);
        },
    });

    //싫어요
    const { mutate: dislikeMutation } = useMutation({
        mutationFn: addDisLike,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['postDetail', postId],
            });
        },
        onError: (error) => {
            console.error('싫어요 실패:', error);
        },
    });

    //좋아요/싫어요 반영
    const handleReaction = (type: string) => {
        if (data?.author?.id === userId) {
            alert(
                `자신의 글에는 ${
                    type === 'like' ? '좋아요' : '싫어요'
                }를 누를 수 없습니다.`
            );
            return;
        }

        if (type === 'like') {
            likeMutation(postId);
        } else if (type === 'dislike') {
            dislikeMutation(postId);
        }
    };

    // 게시물 삭제
    const handleDelete = () => {
        if (postId) {
            deletePost(postId)
                .then(() => navigate('/'))
                .catch((error) => {
                    console.error(error);
                    alert(
                        '누군가가 좋아요 혹은 싫어요를 눌렀기 때문에 삭제가 불가능합니다'
                    );
                });
        }
    };

    if (isLoading) return <Loading />;
    if (isError || !data) return <Error />;

    const zonedDate = toZonedTime(data.createdAt, 'Asia/Seoul');
    const formattedDate = format(
        new Date(zonedDate),
        'yyyy년 MM월 dd일 HH시 mm분'
    );
    const postData = {
        title: data?.title,
        content: data?.content,
        imageUrl: data?.imageUrl,
    };

    return (
        <div className="mt-[60px] w-full flex items-center flex-col bg-slate-50 h-full">
            <div className="flex flex-col bg-white min-w-[400px] w-[60%] h-full relative">
                <div className="border-b border-gray w-full h-auto text-4xl flex p-[20px] font-bold">
                    {data.title}
                </div>
                <div className="pl-[20px] pt-[10px] pr-[20px] pb-[10px] flex gap-[10px] items-center">
                    <span className="font-bold">
                        {data.author.email.split('@')[0]}
                    </span>
                    <span>· {formattedDate}</span>

                    <div className="hidden max-[899px]:flex max-[899px]:ml-auto max-[899px]:gap-[20px]">
                        <div className="flex items-center">
                            <IoMdHeart
                                size={20}
                                onClick={() => handleReaction('like')}
                                style={{ cursor: 'pointer' }}
                            />
                            <span>{data.likeCount}</span>
                        </div>
                        <div className="flex items-center">
                            <IoMdHeartDislike
                                size={20}
                                onClick={() => handleReaction('dislike')}
                                style={{ cursor: 'pointer' }}
                            />
                            <span>{data.dislikeCount}</span>
                        </div>
                    </div>
                </div>
                {data.imageUrl && (
                    <img
                        src={`http://localhost:3000/${data.imageUrl}`}
                        alt="Post"
                        className="pl-[20px] pr-[20px]"
                    />
                )}
                <div className="p-[20px]">
                    <Viewer initialValue={data.content} />
                </div>

                {data?.authorId === userId && (
                    <div className="gap-[20px] flex w-full justify-center mb-[20px]">
                        <button
                            className="bg-slate-200 px-[20px] py-[5px] rounded-[8px]"
                            onClick={() => {
                                setPostDetail(postData);
                                navigate(`/edit/${id}`);
                            }}
                        >
                            수정
                        </button>
                        <button
                            className="bg-slate-200 px-[20px] py-[5px] rounded-[8px]"
                            onClick={handleDelete}
                        >
                            삭제
                        </button>
                    </div>
                )}
            </div>

            <div className="s:flex s:flex-col s:p-[20px] s:top-[180px] s:left-[calc((100%-60%)/2-110px)] s:justify-center s:gap-[30px] s:bg-white s:w-[70px] s:h-[160px] s:rounded-[40px] s:items-center s:fixed s:drop-shadow-sm hidden">
                <div className="flex items-cente gap-[3px]">
                    <IoMdHeart
                        size={30}
                        onClick={() => handleReaction('like')}
                        style={{ cursor: 'pointer' }}
                    />
                    <span>{data.likeCount}</span>
                </div>
                <div className="flex items-center gap-[3px]">
                    <IoMdHeartDislike
                        size={30}
                        onClick={() => handleReaction('dislike')}
                        style={{ cursor: 'pointer' }}
                    />
                    <span>{data.dislikeCount}</span>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
