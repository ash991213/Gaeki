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

    const stageImage = () => {
        return (
            <>
                <div className={`user_chair_desk${stage}`}>
                    <img src={`/사람/${stage} 스테이지 사람.gif`} />
                </div>
                <div className="pet_cat">
                    <img src={`/고양이/${stage} 스테이지 고양이.gif`} />
                </div>
                <div className="pet_dog">
                    <img src={`/강아지/${stage} 스테이지 강아지.gif`} />
                </div>
                <div className="pet_bird">
                    <img src={`/새/${stage} 스테이지 새.gif`} />
                </div>
                <div className="pet_fish">
                    <img src={`/물고기/${stage} 스테이지 물고기.gif`} />
                </div>
                <div className="cheer">
                    <img src={`/알바생/${stage} 스테이지 알바생.gif`} />
                </div>
                <div className={`cook${stage}`}>
                    <img src={`/요리사/${stage} 스테이지 요리사.gif`} />
                </div>
                <div className={`homekeeper${stage}`}>
                    <img src={`/집사/${stage} 스테이지 집사.gif`} />
                </div>
                <div className={`vehicle${stage}`}>
                    <img src={`/탈것/${stage} 스테이지 탈것.gif`} />
                </div>
            </>
        );
    };

    const userStage = () => {
        if (stage === 1) return '서울역';
        if (stage === 2) return '고시원';
        if (stage === 3) return '원룸';
        if (stage === 4) return '아파트';
        if (stage === 5) return '팬트하우스';
        if (stage === 6) return '단독주택';
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
                    }, 10000);
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
            <img className="back" src={`/배경/${stage}스테이지 배경.png`} />
            <div className="header">
                <div className="header_left">
                    <div className="user">
                        <div className="user_wrap">
                            <div className="user_image">
                                <img src={image} />
                            </div>
                            <div className="user_info">
                                <p className="user_name">닉네임 : {nickname}</p>
                                {/* <p className="user_gold">골드 : {gold} </p> */}
                            </div>
                        </div>
                        <div className="user_progress">
                            <div className="user_exp">
                                <div>exp</div>
                                <div className="progress_gauge">
                                    {stage !== 6 ? (
                                        <>
                                            <div className="exp">
                                                {(
                                                    (exp /
                                                        (100000 +
                                                            (stage - 1) *
                                                                25000)) *
                                                    100
                                                ).toFixed(2)}
                                                %
                                            </div>
                                            <progress
                                                className="exp_progress"
                                                value={exp}
                                                max={
                                                    100000 + (stage - 1) * 25000
                                                }
                                            ></progress>
                                        </>
                                    ) : (
                                        <>
                                            <div className="exp">Max Level</div>
                                            <progress
                                                className="exp_progress"
                                                value={1}
                                                max={1}
                                            ></progress>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stage">
                        <span>STAGE</span>
                        <span>{userStage()}</span>
                    </div>
                </div>
                <div className="header_right">
                    <div className="service">
                        <div className="ranking" onClick={openRanking}>
                            <img src="./랭킹.png" />
                        </div>
                        <div className="setting" onClick={openSetting}>
                            <img src="./세팅.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="background">
                    <div className="user_gauge">
                        <div className="gauge_name">
                            피로도 : {((gauge / (100 + hp)) * 100).toFixed(2)}%
                        </div>
                        <div className="progress">
                            <progress
                                className="gauge_progress"
                                value={gauge}
                                max={100 + hp}
                            ></progress>
                        </div>
                    </div>
                    <div className="main">{stageImage()}</div>
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
