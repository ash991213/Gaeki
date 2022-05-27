import type { NextPage } from 'next';
import Loadding from '../components/game/loadding/';

const loadding: NextPage = () => {
    return (
        <Loadding>
            {/* <a className="wrap" href="http://localhost:4000/kakao/login"> */}
            {/* <a className="wrap" href="http://15.164.141.28/kakao/login"> */}
            {/* <a className="wrap" href="http://localhost:4000/api"> */}
            <a className="wrap" href="http://15.164.141.28/api">
                {/* http://15.164.141.28/ */}
                <div className="header">
                    <h1 className="logo">개발자 키우기 Logo~</h1>
                </div>
                <div className="loading">
                    <img src="./loading.gif" />
                </div>
                <div className="loading_bar">
                    <img src="./loading-bar.gif" />
                </div>
            </a>
        </Loadding>
    );
};

export default loadding;
