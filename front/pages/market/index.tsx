import React, { useEffect, useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { useDispatch, useSelector } from 'react-redux';
import Market1 from '../../components/market/market';

interface marketType {
    market: {
        clickgold: boolean;
        ignoregold: boolean;
        ignoreexp: boolean;
        market: {
            stat: {
                typing: number;
            };
        };
        playTime: number;
    };
}

let container: null | HTMLDivElement = null;

declare global {
    interface Window {
        MyNamespace: any;
    }
}

const Market = () => {
    const dispatch = useDispatch();
    const checkMarket = useSelector((state: marketType) => state.market);
    const user = useSelector((state: any) => state.user);
    const { user_idx, gold, stage, status, auto, sound_effect } = useSelector(
        (state: any) => state.user
    );
    const [Auto, setAuto] = useState(false);
    const { desk } = useSelector((state: any) => state.user.auto);

    const clickGold = () => {
        dispatch({ type: 'CLICK_GOLD' });
    };

    const ignoreGold = () => {
        dispatch({ type: 'IGNORE_GOLD' });
    };

    const ignoreExp = () => {
        dispatch({ type: 'IGNORE_EXP' });
    };

    const hpUp = () => {
        dispatch({ type: 'HP_UP_REQUEST', payload: { user, status } });
    };

    const typingUp = () => {
        dispatch({ type: 'TYPING_UP_REQUEST', payload: { user, status } });
    };

    const luckUp = () => {
        dispatch({ type: 'LUCK_UP_REQUEST', payload: { user, status } });
    };

    const codingUp = () => {
        dispatch({ type: 'CODING_UP_REQUEST', payload: { user, status } });
    };

    const patienceUp = () => {
        dispatch({ type: 'PATIENCE_UP_REQUEST', payload: { user, status } });
    };

    const auto_desk = () => {
        dispatch({ type: 'AUTO_DESK_REQUEST', payload: { user, auto, gold } });
    };
    const auto_chair = () => {
        dispatch({ type: 'AUTO_CHAIR_REQUEST', payload: { user, auto, gold } });
    };
    const auto_pc = () => {
        dispatch({ type: 'AUTO_PC_REQUEST', payload: { user, auto, gold } });
    };
    const auto_cook = () => {
        dispatch({ type: 'AUTO_COOK_REQUEST', payload: { user, auto, gold } });
    };
    const auto_homekeeper = () => {
        dispatch({
            type: 'AUTO_HOMEKEEPER_REQUEST',
            payload: { user, auto, gold },
        });
    };
    const auto_cheer = () => {
        dispatch({
            type: 'AUTO_CHEER_REQUEST',
            payload: { user, auto, gold },
        });
    };
    const auto_vehicle = () => {
        dispatch({
            type: 'AUTO_VEHICLE_REQUEST',
            payload: { user, auto, gold },
        });
    };

    useEffect(() => {
        if (user_idx !== null) {
            dispatch({ type: 'STATUS_REQUEST', payload: user });
            dispatch({ type: 'AUTO_REQUEST', payload: user });
        }
        if (desk !== null) {
            if (Auto === false) {
                setAuto(true);
                dispatch({
                    type: 'AUTO_GOLD_REQUEST',
                    payload: { auto, user },
                });
                setTimeout(() => {
                    setAuto(false);
                }, 100034540);
            }
        }
    }, [user_idx, desk, Auto]);

    const clickHandle = () => {
        return (
            <div className="content_clickGold">
                <div>
                    <div className="content_up">
                        <div>체력</div>
                        <div>레벨{status.hp}</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./hp.png" />
                        </div>
                        <div>
                            <div>피로도 맥스치 증가</div>
                            <div>
                                <span>{status.hp}</span> -&gt;{' '}
                                <span>{status.hp + 1}</span>
                            </div>
                        </div>
                        <div>
                            <button
                                className={
                                    gold >= status.hp * 30 ? 'upbt' : 'closeBtn'
                                }
                                onClick={() => {
                                    hpUp();
                                }}
                                disabled={gold >= status.hp * 30 ? false : true}
                            >
                                강화 <br />
                                {status.hp * 30}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content_up">
                        <div>타수</div>
                        <div>레벨{status.typing}</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./type.png" />
                        </div>
                        <div>
                            <div>클릭당 골드증가</div>
                            <div>
                                <span>{status.typing}</span> -&gt;{' '}
                                <span>{status.typing + 1}</span>
                            </div>
                        </div>
                        <div>
                            <button
                                className={
                                    gold >= status.typing * 70
                                        ? 'upbt'
                                        : 'closeBtn'
                                }
                                onClick={() => {
                                    typingUp();
                                }}
                                disabled={
                                    gold >= status.typing * 70 ? false : true
                                }
                            >
                                강화 <br />
                                {status.typing * 70}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content_up">
                        <div>운</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./luck.png" />
                        </div>
                        <div>
                            <div>행운 증가</div>
                            <div>
                                <span>{status.luck / 10}%</span> -&gt;{' '}
                                <span>
                                    {(status.luck / 10 + 0.1).toFixed(1)}%
                                </span>
                            </div>
                        </div>
                        <div>
                            {status.luck !== 1000 ? (
                                <button
                                    className={
                                        gold >= status.luck * 30
                                            ? 'upbt'
                                            : 'closeBtn'
                                    }
                                    onClick={() => {
                                        luckUp();
                                    }}
                                    disabled={
                                        gold >= status.luck * 30 ? false : true
                                    }
                                >
                                    강화 <br />
                                    {status.luck * 30}
                                </button>
                            ) : (
                                <button className="closeBtn" disabled={true}>
                                    Max <br /> Level
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content_up">
                        <div>코딩력</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./coding.png" />
                        </div>
                        <div>
                            <div>버그 발생 시간 감소</div>
                            <div>
                                <span>{status.coding / 1000}초</span> -&gt;
                                {status.coding !== 60000 ? (
                                    <span>{status.coding / 1000 - 1}초</span>
                                ) : null}
                            </div>
                        </div>
                        <div>
                            {status.coding !== 60000 ? (
                                <button
                                    className={
                                        gold >= (121000 - status.coding) * 200
                                            ? 'upbt'
                                            : 'closeBtn'
                                    }
                                    onClick={() => {
                                        codingUp();
                                    }}
                                    disabled={
                                        gold >= (121000 - status.coding) * 200
                                            ? false
                                            : true
                                    }
                                >
                                    강화 <br />
                                    {(121000 - status.coding) * 200}
                                </button>
                            ) : (
                                <button className="closeBtn" disabled={true}>
                                    Max <br /> Level
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content_up">
                        <div>인내력</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./patience.png" />
                        </div>
                        <div>
                            <div>획득 경험치 증가</div>
                            <div>
                                <span>{status.patience}</span> -&gt;{' '}
                                <span>{status.patience + 1}</span>
                            </div>
                        </div>
                        <div>
                            <button
                                className={
                                    gold >= status.patience * 70
                                        ? 'upbt'
                                        : 'closeBtn'
                                }
                                onClick={() => {
                                    patienceUp();
                                }}
                                disabled={
                                    gold >= status.patience * 70 ? false : true
                                }
                            >
                                강화
                                <br />
                                {status.patience * 70}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    const ignoreHandle = () => {
        const classNameOn = (asdf: any, qwer: any) => {
            let Btn;
            if (gold >= (asdf + 1) * qwer) Btn = 'upbt';
            else Btn = 'closeBtn';
            return Btn;
        };

        return (
            <div className="content_ignoreGold">
                <div>
                    <div className="content_up">
                        <div>책상</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading.gif" />
                        </div>
                        <div>
                            <div>10초당골드 증가 [{auto.desk}]</div>
                            <div>
                                <span>
                                    {auto.desk == 0 ? 0 : auto.desk * 10}
                                </span>{' '}
                                -&gt;{' '}
                                <span>
                                    {auto.desk == 0
                                        ? auto.desk + 10
                                        : auto.desk * 10 + 10}
                                </span>
                            </div>
                        </div>
                        <div>
                            <button
                                className={classNameOn(auto.desk, 300)}
                                onClick={() => {
                                    auto_desk();
                                }}
                                disabled={
                                    gold >= (auto.desk + 1) * 300 ? false : true
                                }
                            >
                                강화
                                <div>{(auto.desk + 1) * 300}</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content_up">
                        <div>의자</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading.gif" />
                        </div>
                        <div>
                            <div>10초당골드 증가[{auto.chair}]</div>
                            <div>
                                <span>
                                    {auto.chair == 0 ? 0 : auto.chair * 50}
                                </span>{' '}
                                -&gt;{' '}
                                <span>
                                    {auto.chair == 0
                                        ? auto.chair + 50
                                        : auto.chair * 50 + 50}
                                </span>
                            </div>
                        </div>
                        <div>
                            <button
                                className={classNameOn(auto.chair, 1500)}
                                onClick={() => {
                                    auto_chair();
                                }}
                                disabled={
                                    gold >= (auto.chair + 1) * 1500
                                        ? false
                                        : true
                                }
                            >
                                강화
                                <div>{(auto.chair + 1) * 1500}</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content_up">
                        <div>노트북</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading.gif" />
                        </div>
                        <div>
                            <div>10초당골드 증가[{auto.pc}]</div>
                            <div>
                                <span>{auto.pc == 0 ? 0 : auto.pc * 250}</span>{' '}
                                -&gt;{' '}
                                <span>
                                    {auto.pc == 0
                                        ? auto.pc + 250
                                        : auto.pc * 250 + 250}
                                </span>
                            </div>
                        </div>
                        <div>
                            <button
                                className={classNameOn(auto.pc, 7500)}
                                onClick={() => {
                                    auto_pc();
                                }}
                                disabled={
                                    gold >= (auto.pc + 1) * 7500 ? false : true
                                }
                            >
                                강화
                                <div>{(auto.pc + 1) * 7500}</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content_up">
                        <div>요리사</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading.gif" />
                        </div>
                        <div>
                            <div>10초당골드 증가[{auto.cook}]</div>
                            <div>
                                <span>
                                    {auto.cook == 0 ? 0 : auto.cook * 1250}
                                </span>{' '}
                                -&gt;{' '}
                                <span>
                                    {auto.cook == 0
                                        ? auto.cook + 1250
                                        : auto.cook * 1250 + 1250}
                                </span>
                            </div>
                        </div>
                        <div>
                            <button
                                className={classNameOn(auto.cook, 37500)}
                                onClick={() => {
                                    auto_cook();
                                }}
                                disabled={
                                    gold >= (auto.cook + 1) * 37500
                                        ? false
                                        : true
                                }
                            >
                                강화
                                <div>{(auto.cook + 1) * 37500}</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content_up">
                        <div>홈키퍼</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading.gif" />
                        </div>
                        <div>
                            <div>10초당골드 증가[{auto.homekeeper}]</div>
                            <div>
                                <span>
                                    {auto.homekeeper == 0
                                        ? 0
                                        : auto.homekeeper * 6250}
                                </span>{' '}
                                -&gt;{' '}
                                <span>
                                    {auto.homekeeper == 0
                                        ? auto.homekeeper + 6250
                                        : auto.homekeeper * 6250 + 6250}
                                </span>
                            </div>
                        </div>
                        <div>
                            <button
                                className={classNameOn(auto.homekeeper, 187500)}
                                onClick={() => {
                                    auto_homekeeper();
                                }}
                                disabled={
                                    gold >= (auto.homekeeper + 1) * 187500
                                        ? false
                                        : true
                                }
                            >
                                강화
                                <div>{(auto.homekeeper + 1) * 187500}</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content_up">
                        <div>치어리더</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading.gif" />
                        </div>
                        <div>
                            <div>10초당골드 증가[{auto.cheer}]</div>
                            <span>
                                {auto.cheer == 0 ? 0 : auto.cheer * 31250}
                            </span>{' '}
                            -&gt;{' '}
                            <span>
                                {auto.cheer == 0
                                    ? auto.cheer + 31250
                                    : auto.cheer * 31250 + 31250}
                            </span>
                        </div>
                        <div>
                            <button
                                className={classNameOn(auto.cheer, 937500)}
                                onClick={() => {
                                    auto_cheer();
                                }}
                                disabled={
                                    gold >= (auto.cheer + 1) * 937500
                                        ? false
                                        : true
                                }
                            >
                                강화버튼
                                <div>{(auto.cheer + 1) * 937500}</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content_name2">
                    <div className="content_up">
                        <div>탈것</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading.gif" />
                        </div>
                        <div>
                            <div>10초당골드 증가[{auto.vehicle}]</div>
                            <span>
                                {auto.vehicle == 0 ? 0 : auto.vehicle * 156250}
                            </span>{' '}
                            -&gt;{' '}
                            <span>
                                {auto.vehicle == 0
                                    ? auto.vehicle + 156250
                                    : auto.vehicle * 156250 + 156250}
                            </span>
                        </div>
                        <div>
                            <button
                                className={classNameOn(auto.vehicle, 4687500)}
                                onClick={() => {
                                    auto_vehicle();
                                }}
                                disabled={
                                    gold >= (auto.vehicle + 1) * 4687500
                                        ? false
                                        : true
                                }
                            >
                                강화버튼
                                <div>{(auto.vehicle + 1) * 4687500}</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const ignoreExHandle = () => {
        return (
            <div className="content_ignoreExp">
                <div>
                    <div className="content_up">
                        <div>방치</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading-bar.gif" />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className="upbt">강화</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content_up">
                        <div>방치</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading-bar.gif" />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className="upbt">강화</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content_up">
                        <div>방치</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading-bar.gif" />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className="upbt">강화</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content_up">
                        <div>방치</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading-bar.gif" />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className="upbt">강화</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content_up">
                        <div>방치</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading-bar.gif" />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className="upbt">강화</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const sum = () => {
        if (checkMarket.clickgold === true) {
            return clickHandle();
        } else if (checkMarket.ignoregold === true) {
            return ignoreHandle();
        } else if (checkMarket.ignoreexp === true) {
            return ignoreExHandle();
        } else {
            {
                null;
            }
        }
    };
    const marketClickMenu = () => {
        if (checkMarket.clickgold === true) {
            return 'stat alignCenter';
        } else {
            return 'stat alignCenter';
        }
    };
    const marketIgnoreMenu = () => {
        if (checkMarket.ignoregold === true) {
            return 'gold alignCenter';
        } else {
            return 'gold alignCenter';
        }
    };
    const marketIgnoreExpMenu = () => {
        if (checkMarket.ignoreexp === true) {
            return 'exp alignCenter';
        } else {
            return 'exp alignCenter';
        }
    };

    const clickIcon = () => {
        if (checkMarket.clickgold === true) {
            return <img src="./footer/toClick.gif"></img>;
        } else {
            return <img src="./footer/toClick-stop.gif"></img>;
        }
    };

    const autoGold = () => {
        if (checkMarket.ignoregold === true) {
            return <img src="./footer/spin-coin.gif"></img>;
        } else {
            return <img src="./footer/spin-coin-stop.gif"></img>;
        }
    };

    const autoExp = () => {
        if (checkMarket.ignoreexp === true) {
            return <img src="./footer/auto-exp.gif"></img>;
        } else {
            return <img src="./footer/auto-exp-stop.gif"></img>;
        }
    };

    let count = 0;
    const handleClick = (e: any) => {
        count++;
        const clickX = e.clientX;
        const clickY = e.clientY;
        container = document.createElement('span') as HTMLDivElement;
        const nodeName = `lay${count}`;
        container.className = nodeName;
        container.style.position = 'fixed';
        container.style.top = clickY - 20 + 'px';
        container.style.left = clickX - 20 + 'px';
        container.style.zIndex = '5';

        const collection = document.getElementsByClassName('background');
        collection[0].prepend(container);

        const div = document.createElement('span');
        container.appendChild(div);
        const removeGif = () => {
            root.unmount();
            if (div?.parentNode) {
                div.parentNode.removeChild(div);
            }
        };

        const root = createRoot(div);

        function CallbackAfter() {
            setTimeout(removeGif, 2000);
            return <PopGifLayer></PopGifLayer>;
        }

        root.render(<CallbackAfter />);
        return removeGif;
    };

    interface PopGifProps {}
    const PopGifLayer: React.FC<PopGifProps> = () => {
        let randomNum = (min: number, max: number): number => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        let ranTempNum = randomNum(1, 10);

        let srcLink = `./click-popup/click-pop${ranTempNum}.gif`;

        return (
            <img
                src={srcLink}
                style={{
                    position: 'absolute',
                    display: 'block',
                }}
            ></img>
        );
    };
    const Gold_Click = (e: any) => {
        dispatch({
            type: 'GOLDEXP_CLICK_REQUEST',
            payload: {
                user,
            },
        });
        const audio = new Audio('키보드 효과음 2.mp3');
        if (sound_effect === true) {
            audio.volume = 0.5;
            audio.play();
        }
        handleClick(e);
    };

    return (
        <Market1>
            <div
                className="wrap"
                onClick={(e) => {
                    Gold_Click(e);
                }}
            >
                <div className="item"></div>
                <div className="content1">{sum()}</div>
                <div className="footer">
                    <div
                        className={marketClickMenu()}
                        onClick={() => {
                            clickGold();
                        }}
                    >
                        {clickIcon()}
                        <span>클릭골드</span>
                    </div>
                    <div
                        className={marketIgnoreMenu()}
                        onClick={() => {
                            ignoreGold();
                        }}
                    >
                        {autoGold()}
                        <span>방치골드</span>
                    </div>
                    <div
                        className={marketIgnoreExpMenu()}
                        onClick={() => {
                            ignoreExp();
                        }}
                    >
                        {autoExp()}
                        <span className="fontNoWrap">방치경험치</span>
                    </div>
                </div>
            </div>
        </Market1>
    );
};

export default Market;
