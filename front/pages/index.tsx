import type { NextPage } from 'next';
import Loadding from '../components/game/loadding/';

const loadding: NextPage = () => {
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
