import * as S from "./test.style";
import testuseCustomFetch from '../../hooks/testuseCustomFetch';
import loadingJson from '../../../public/lottie/Animation - 1728478059105.json';
import errorJson from '../../../public/lottie/Animation - 1728478966350.json';
import Lottie from 'react-lottie-player';
import axios from "axios";
import { useState } from "react";

const Test = () => {
    const { data: users, isLoading, isError } = testuseCustomFetch(`/users`);
    const [text, setText] = useState('');

    const userdata = users?.data;
    if (isLoading) {
        return <S.Alert><Lottie loop animationData={loadingJson} play /></S.Alert>;
    }
    if (isError) {
        return <S.Alert><Lottie loop animationData={errorJson} play /></S.Alert>;
    }

    // 삭제 핸들러
    const handleDelete = async (id) => {
        try {
            console.log(id);
            await axios.delete(`https://koreanjson.com/users/${id}`);
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleAdd = async(e) => {
        e.preventDefault();
        try {
            const newUser = {name:text};
            await axios.post(`https://koreanjson.com/users`, newUser);
            setText('');
        } catch(error){
            console.error("Error deleting user:", error);
        }
    }
    
    const handleInputChange = (e) => {
        setText(e.target.value);
    };


    return (
        <S.Container>
            <S.Texts>
                {userdata?.map(user => (
                    <S.Text key={user.id} onClick={() => handleDelete(user.id)}>
                        {user.name}
                    </S.Text>
                ))}
            </S.Texts>
            <S.Form onSubmit={handleAdd}>
                <S.Inputbox onChange={handleInputChange}></S.Inputbox>
                <S.Button type="submit">추가</S.Button>
            </S.Form>
        </S.Container>
    );
}

export default Test;