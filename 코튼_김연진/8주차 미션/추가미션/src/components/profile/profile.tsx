interface CreditMember {
    id: number;
    profile_path: string;
    name: string;
    character?: string;
    job?: string;
}
function Profile({ profile_path, name, character, job }: CreditMember) {
    const imageSrc = profile_path
        ? `https://image.tmdb.org/t/p/original${profile_path}`
        : 'https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png';
    return (
        <div className="flex items-center gap-[8px] h-[100px] w-[200px] relative mb-[5px]">
            <img
                className="max-h-[60px] max-w-[60px] min-h-[60px] min-w-[60px] object-cover rounded-[100%] border-x-[0.5px] border-white"
                src={imageSrc}
                alt={
                    profile_path
                        ? `${name}의 프로필 이미지`
                        : '기본 프로필 이미지'
                }
            />
            <div className="flex flex-col">
                <div className="flex w-[110px] text-white text-[14px] items-center font-bold">
                    {name}
                </div>

                <div className="flex w-[110px] text-[#c0c0c0] text-[12px] items-center whitespace-wrap">
                    {character || job}
                </div>
            </div>
        </div>
    );
}

export default Profile;
