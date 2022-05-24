import type { NextPage } from 'next';
import { useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import axios from 'axios';
import { LOGIN_REQUEST,LOGIN_SUCCESS } from '../src/reducers/login'
import Loadding from '../components/game/loadding/';
import 'bootstrap/dist/css/bootstrap.min.css';

const loadding: NextPage = () => {
    // 프론트에서 gapi 테스트
    if (typeof window !== 'undefined') {
        const { access_token } = qs.parse(window.location.hash.substr(1));
            console.log(access_token)
        const dispatch = useDispatch();
        
        useEffect(() => {
            // dispatch({ type: LOGIN_REQUEST, action:access_token });
            const getApi = async () => {
                const URI =  'https://www.googleapis.com/games/v1/achievements'
                try {
                    const user = await axios.get(URI,{
                        headers:{
                            'Authorization':`Bearer ${access_token}`
                        }
                    })
                    console.log('user:',user)
                } catch (e) {
                    console.log('ㅇ우우우우우우')
                    console.log(e)
                }
            };
            getApi();
        }, []);

        // const user = 

        // const [testRes, setTestRes] = useState(null);
        // const URI =  'https://www.googleapis.com/games/v1'
        // useEffect(() => {
        //     fetch(URI, {
        //     headers: { Authorization: "Bearer " + access_token },
        //     })
        //     .then((response) => response.json())
        //     .then((data) => setTestRes(data));
        // }, [access_token]);
    }
    
    return (
        <Loadding>
            <div className="wrap">
                <div className="header">
                    <h1 className="logo">개발자 키우기 Logo~</h1>
                </div>
                <div className="loading">
                    <img src="./loading.gif" />
                </div>
                <div className="loading_bar">
                    <img src="./loading-bar.gif" />
                </div>
            </div>
        </Loadding>
    );
};

export default loadding;
