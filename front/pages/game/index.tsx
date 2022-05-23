import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameTemplate from '../../components/game/main/gameMain';
import { ProgressBar } from 'react-bootstrap';

const Game = () => {
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
                        <div className="ranking">
                            <img src="" />
                        </div>
                        <div className="setting">
                            <img src="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
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
        </GameTemplate>
    );
};

export default Game;
