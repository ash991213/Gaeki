import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameTemplate from '../../components/game/main/gameMain';
import Ranking from '../ranking';
import Setting from '../setting';
import Market from '../market';
import Bug from '../bug';

const Game = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const { user_idx } = useSelector((state: any) => state.user);
    const { nickname, image, stage, gauge, gold, exp } = user;
    const { hp, coding } = useSelector((state: any) => state.user.status);
    const { background_sound } = useSelector((state: any) => state.user);
    const [ranking, setRanking] = useState(false);
    const [setting, setSetting] = useState(false);
    const [bug, bugSetting] = useState(false);
    const [hpdown, setHpdown] = useState(false);
    const [openBug, setOpenBug] = useState(false);
    const [musicOn, setMusicOn] = useState(false);
    const [music]: any = useState(
        typeof Audio !== 'undefined' && new Audio('배경소리.mp3')
    );

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

    const openbug = () => {
        bugSetting(true);
    };

    const closebug = () => {
        dispatch({
            type: 'BUG_REQUEST',
            payload: user,
        });
        bugSetting(false);
    };

    const backMusic = () => {
        if (background_sound === true) {
            if (musicOn === false) {
                music.play();
                music.loop = true;
                music.volume = 0.5;
                console.log('노래 on');
                setMusicOn(true);
            }
        } else {
            if (musicOn === true) {
                console.log('노래 off');
                console.log(music);
                music.volume = 0;
                setMusicOn(false);
            }
        }
    };

    useEffect(() => {
        if (user_idx === null) {
            dispatch({
                type: 'USER_INFO_REQUEST',
                payload: window.location.search.split('=')[1],
            });
        } else {
            if (gauge !== 0) {
                if (hpdown === false) {
                    setHpdown(true);
                    dispatch({
                        type: 'HP_DOWN_REQUEST',
                        payload: {
                            user_idx,
                            gauge,
                        },
                    });
                    setTimeout(() => {
                        setHpdown(false);
                    }, 5000);
                }
            }
        }
        if (openBug === false) {
            if (bug === false && coding !== null) {
                setOpenBug(true);
                setTimeout(() => {
                    openbug();
                    setOpenBug(false);
                }, coding);
            }
        }
        backMusic();
    }, [user_idx, bug, coding, hpdown, openBug, background_sound]);

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
                                <div className="progress_gauge">
                                    <div>{(exp / 1000).toFixed(2)}%</div>
                                    <progress
                                        className="exp_progress"
                                        value={exp}
                                        max="100000"
                                    ></progress>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stage">
                        STAGE
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
                        <div>
                            피로도 : {((gauge / (100 + hp)) * 100).toFixed(2)}%
                        </div>
                        <div>
                            <progress
                                className="gauge_progress"
                                value={gauge}
                                max={100 + hp}
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
            {bug ? <Bug closebug={closebug} /> : null}
            <Market />
        </GameTemplate>
    );
};

export default Game;
