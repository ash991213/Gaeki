import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameTemplate from '../../components/game/main/gameMain';
import Ranking from '../ranking';
import Setting from '../setting';
import Market from '../market';

const Game = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const user_idx = useSelector((state: any) => state.user.user_idx);
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

    useEffect(() => {
        if (user_idx === null) {
            dispatch({
                type: 'USER_INFO_REQUEST',
                payload: window.location.search.split('=')[1],
            });
        } else {
            let count = 0;
            setInterval(() => {
                count++;
                dispatch({
                    type: 'HP_DOWN_REQUEST',
                    payload: {
                        user_idx,
                        gauge: gauge - count,
                    },
                });
            }, 1000);
        }
    }, [user_idx]);

    const { nickname, image, stage, gauge, gold, exp } = user;

    return (
        <GameTemplate>
            <div className="header">
                <div className="header_left">
                    <div className="user">
                        <div className="user_wrap">
                            <div className="user_image">
                                <img src={image} />
                            </div>
                            <div className="user_info">
                                <p className="user_name">닉네임 : {nickname}</p>
                                <p className="user_gold">골드 : {gold} </p>
                            </div>
                        </div>
                        <div className="user_progress">
                            <div className="user_exp">
                                <div>exp</div>
                                <progress
                                    className="exp_progress"
                                    value={exp}
                                    max="100"
                                ></progress>
                            </div>
                        </div>
                    </div>
                    <div className="stage">
                        stage
                        <div>{stage}</div>
                    </div>
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
                                value={gauge}
                                max="100"
                            ></progress>
                        </div>
                    </div>
                    <div className="main">
                        <div className="user_chair_desk">
                            <img src="loading.gif" />
                        </div>
                        <div className="pet_cat">
                            <img src="loading.gif" />
                        </div>
                        <div className="pet_dog">
                            <img src="loading.gif" />
                        </div>
                        <div className="pet_bird">
                            <img src="loading.gif" />
                        </div>
                        <div className="pet_fish">
                            <img src="loading.gif" />
                        </div>
                        <div className="cheer">
                            <img src="loading.gif" />
                        </div>
                        <div className="cook">
                            <img src="loading.gif" />
                        </div>
                        <div className="homekeeper">
                            <img src="loading.gif" />
                        </div>
                        <div className="vehicle">
                            <img src="loading.gif" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="stat">{/* <img src="./설정.jpg" /> */}</div>
                <div className="auto_gold">
                    {/* <img src="./설정.jpg" /> */}
                </div>
                <div className="auto_exp">{/* <img src="./설정.jpg" /> */}</div>
            </div>
            {ranking ? <Ranking closeRanking={closeRanking} /> : null}
            {setting ? <Setting closeSetting={closeSetting} /> : null}
            <Market />
        </GameTemplate>
    );
};

export default Game;
