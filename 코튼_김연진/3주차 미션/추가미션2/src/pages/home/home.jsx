import * as S from "./home.style"
import {useEffect} from "react";
// import {useNavigate} from "react-router-dom"
import { useState } from 'react';

const HomePage = ()=> {
    // const nav = useNavigate()
    const [token, setToken] = useState('')

    const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
    const REDIRECT_URI = 'http://localhost:5173'
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = 'token'

    useEffect(() => {
    const hash = location.hash
    let token = localStorage.getItem('accessToken')

    if (!token && hash) {
        token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1]

        location.hash = ''
        localStorage.setItem('accessToken', token)
    }

    setToken(token)
    }, [])

    const logout = () => {
        setToken('')
        localStorage.removeItem('accessToken')
    }
    return (
        <S.Container>
            <S.Title>spotify Open api</S.Title>
                {!token ?(
                    <S.Buttons>
                        <S.Button3 to={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</S.Button3>
                    </S.Buttons>
                ):(
                    <S.Buttons>
                        <S.Button2 onClick={logout}>Logout</S.Button2>
                        <S.Button1 to={'/userInfo'}>유저</S.Button1>
                        <S.Button1 to={'/artist'}>아티스트</S.Button1>
                        <S.Button1 to={'/album'}>앨범</S.Button1>
                        <S.Button1 to={'/test'}>test</S.Button1>
                    </S.Buttons>
                )}
        </S.Container>
    )
}

export default HomePage