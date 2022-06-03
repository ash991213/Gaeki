import type { NextPage } from 'next';
import Loadding from '../components/game/loadding/';
import { useEffect, useState } from 'react';

const loadding: NextPage = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading === false) {
            setTimeout(() => {
                setLoading(true);
            }, 5000);
        }
    });

    return (
        <Loadding>
<<<<<<< HEAD
            {/* <a className="wrap" href="http://localhost:4000/kakao/login"> */}
            {/* <a className="wrap" href="http://15.164.141.28/kakao/login"> */}
            {/* <a className="wrap" href="http://localhost:4000/api"> */}
            <a className="wrap" href="http://15.164.141.28:81/kakao/login">
                {/* http://15.164.141.28/ */}
                <div className="header">
                    <h1 className="logo">개발자 키우기 Logo~</h1>
                </div>
                <div className="loading">
                    <img src="./loading.gif" />
                </div>
                <div className="loading_bar">화면을 터치해주세요</div>
            </a>
=======
            {loading === true ? (
                <a className="wrap" href="http://localhost:4000/kakao/login">
                    <div className="header">
                        <h1 className="logo">
                            <img className="logo1" src="./게임 로고.gif" />
                            <img className="logo2" src="./게임 로고2.gif" />
                        </h1>
                    </div>
                    <div className="loading_bar">화면을 터치해주세요</div>
                </a>
            ) : (
                <span className="wrap">
                    <div className="header">
                        <h1 className="logo">
                            <img className="logo1" src="./게임 로고.gif" />
                            <img className="logo2" src="./게임 로고2.gif" />
                        </h1>
                    </div>
                    <div className="loading">
                        <img src="./로딩바.gif" />
                    </div>
                </span>
            )}
>>>>>>> b6aa464ca338aba2f1df588cfd6ba0e9c00a1b3a
        </Loadding>
    );
};

export default loadding;
