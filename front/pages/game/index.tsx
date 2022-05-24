import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameTemplate from '../../components/game/main/gameMain';
import Ranking from '../ranking';
import Setting from '../setting';

const Game = () => {
    const dispatch = useDispatch();

    const [ranking, setRanking] = useState(false);
    const [setting, setSetting] = useState(false);

    const openRanking = () => {
        setRanking(true);
    };

    const closeRanking = () => {
        setRanking(false);
    };

    const openSetting = () => {
        setSetting(true);
    };

    const closeSetting = () => {
        setSetting(false);
    };

    return (
        <GameTemplate>
            <div className="header">
                <div className="header_left">
                    <div className="user">
                        <div className="user_wrap">
                            <div className="user_image"></div>
                            <div className="user_info">
                                <p className="user_name">닉네임 : 테스트 </p>
                                <p className="user_gold">골드 : 123456789 </p>
                            </div>
                        </div>
                        <div className="user_progress">
                            <div className="user_exp">
                                <div>exp</div>
                                <progress
                                    className="exp_progress"
                                    value="50"
                                    max="100"
                                ></progress>
                            </div>
                        </div>
                    </div>
                    <div className="stage">stage</div>
                </div>
                <div className="header_right">
                    <div className="service">
                        <div className="ranking" onClick={openRanking}>
                            <img src="./loading.gif" />
                        </div>
                        <div className="setting" onClick={openSetting}>
                            <img src="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="background">
                    <div className="user_gauge">
                        <div>피로도</div>
                        <div>
                            <progress
                                className="gauge_progress"
                                value="50"
                                max="100"
                            ></progress>
                        </div>
                    </div>
                    <div className="main">
                        <div className="user_chair_desk">의자 유저 책상</div>
                        <div className="pet_cat">고양이</div>
                        <div className="pet_dog">강아지</div>
                        <div className="pet_bird">새</div>
                        <div className="pet_fish">물고기</div>
                        <div className="part_cheer">응원</div>
                        <div className="part_cook">요리사</div>
                        <div className="part_homekeeper">가정부</div>
                        <div className="move">이동수단</div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="stat">
                    <img src="./설정.jpg" />
                </div>
                <div className="auto_gold">
                    <img src="./설정.jpg" />
                </div>
                <div className="auto_exp">
                    <img src="./설정.jpg" />
                </div>
            </div>
            {ranking ? <Ranking closeRanking={closeRanking} /> : null}
            {setting ? <Setting closeSetting={closeSetting} /> : null}
        </GameTemplate>
    );
};

export default Game;
