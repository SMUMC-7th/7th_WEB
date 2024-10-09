import * as S from "./AlbumInfo.style"

const AlbumInfo = (props) => {
    const {name, tracks, images}=props;
    const ImageHref = images[0]?.url;
    const tracksData = tracks?.items;
    console.log(tracksData);

    return <S.Container>
        <S.Title>{name}</S.Title>
        <S.Container2>
            <S.Img src = {ImageHref} ></S.Img>
            <S.Texts>
                {tracksData?.map((track, idx) => {
                    return <S.Text key={idx}>{idx+1}. {track.name}</S.Text>
                })}
            </S.Texts>
        </S.Container2>
    </S.Container>

}

export default AlbumInfo;