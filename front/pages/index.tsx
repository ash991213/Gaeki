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
            {loading === true ? (
                <a className="wrap" href="http://http://15.164.141.28//kakao/login">
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
        </Loadding>
    );
};

export default loadding;
