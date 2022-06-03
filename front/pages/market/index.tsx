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
    const { user_idx, gold, stage, status, auto, sound_effect,auto_exp } = useSelector(
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
    const auto_vehicle = () => {
        dispatch({
            type: 'AUTO_VEHICLE_REQUEST',
            payload: { user, auto, gold },
        });
    };

    const exp_Dog = () => {
        dispatch({
            type:'EXP_DOG_REQUEST',payload:user
        });
    }

    const exp_Cat = () => {
        dispatch({
            type:'EXP_CAT_REQUEST',payload:user
        })
    }

    const exp_Fish = () => {
        dispatch({
            type:'EXP_FISH_REQUEST',payload:user
        })
    }

    const exp_Bird = () => {
        dispatch({
            type:'EXP_BIRD_REQUEST',payload:user
        })
    }

    useEffect(() => {
        if (user_idx !== null) {
            dispatch({ type: 'STATUS_REQUEST', payload: user });
            dispatch({ type: 'AUTO_REQUEST', payload: user });
            dispatch({ type: 'EXP_REQUEST', payload: user });
        }   
        if (desk !== null) {
            if (Auto === false) {
                setAuto(true);
                dispatch({
                    type: 'AUTO_GOLD_REQUEST',
                    payload: { auto, user },
                });
                dispatch({
                    type:'EXP_GUAGE_REQUEST',
                    payload:user
                    
                })
                setTimeout(() => {
                    setAuto(false);
                }, 10000);
            }
        }
    }, [user_idx, desk, Auto]);
    const clickHandle = () => {
        return (
            <div className="content_clickGold">
                <div className="content_name">
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
                            <span>{status.hp}</span> -&gt;{' '}
                            <span>{status.hp + 1}</span>
                        </div>
                        <div>
                            <button
                                className={
                                    gold >= status.hp * 100
                                        ? 'upbt'
                                        : 'closeBtn'
                                }
                                onClick={() => {
                                    hpUp();
                                }}
                                disabled={
                                    gold >= status.hp * 100 ? false : true
                                }
                            >
                                강화버튼 <br />
                                {status.hp * 100}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content_name">
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
                                    gold >= status.typing * 100
                                        ? 'upbt'
                                        : 'closeBtn'
                                }
                                onClick={() => {
                                    typingUp();
                                }}
                                disabled={
                                    gold >= status.typing * 100 ? false : true
                                }
                            >
                                강화버튼 <br />
                                {status.typing * 100}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content_name">
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
                            <span>{status.luck / 10}%</span> -&gt;{' '}
                            <span>{(status.luck / 10 + 0.1).toFixed(1)}%</span>
                        </div>
                        <div>
                            {status.luck !== 1000 ? (
                                <button
                                    className={
                                        gold >= status.luck * 100
                                            ? 'upbt'
                                            : 'closeBtn'
                                    }
                                    onClick={() => {
                                        luckUp();
                                    }}
                                    disabled={
                                        gold >= status.luck * 100 ? false : true
                                    }
                                >
                                    강화버튼 <br />
                                    {status.luck * 100}
                                </button>
                            ) : (
                                <button className="closeBtn" disabled={true}>
                                    Max <br /> Level
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="content_name">
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
                            <span>{status.coding / 1000}초</span> -&gt;{' '}
                            <span>{status.coding / 1000 - 1}초</span>
                        </div>
                        <div>
                            {status.coding !== 60000 ? (
                                <button
                                    className={
                                        gold >= (120000 - status.coding) * 2.5
                                            ? 'upbt'
                                            : 'closeBtn'
                                    }
                                    onClick={() => {
                                        codingUp();
                                    }}
                                    disabled={
                                        gold >= (120000 - status.coding) * 2.5
                                            ? false
                                            : true
                                    }
                                >
                                    강화버튼 <br />
                                    {(120000 - status.coding) * 2.5}
                                </button>
                            ) : (
                                <button className="closeBtn" disabled={true}>
                                    Max <br /> Level
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="content_name">
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
                            <span>{status.patience}</span> -&gt;{' '}
                            <span>{status.patience + 1}</span>
                        </div>
                        <div>
                            {stage >= 3 ? (
                                <button
                                    className={
                                        gold >= status.patience * 100
                                            ? 'upbt'
                                            : 'closeBtn'
                                    }
                                    onClick={() => {
                                        patienceUp();
                                    }}
                                    disabled={
                                        gold >= status.patience * 100
                                            ? false
                                            : true
                                    }
                                >
                                    강화버튼 <br />
                                    {status.patience * 100}
                                </button>
                            ) : (
                                <button className="closeBtn" disabled={true}>
                                    3 스테이지 <br />
                                    오픈
                                </button>
                            )}
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
                <div className="content_name2">
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
                                강화버튼
                                <div>{(auto.desk + 1) * 300}</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content_name2">
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
                                강화버튼
                                <div>{(auto.chair + 1) * 1500}</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content_name2">
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
                            <span>{auto.pc == 0 ? 0 : auto.pc * 250}</span>{' '}
                            -&gt;{' '}
                            <span>
                                {auto.pc == 0
                                    ? auto.pc + 250
                                    : auto.pc * 250 + 250}
                            </span>
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
                                강화버튼
                                <div>{(auto.pc + 1) * 7500}</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content_name2">
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
                                강화버튼
                                <div>{(auto.cook + 1) * 37500}</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content_name2">
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
                                강화버튼
                                <div>{(auto.homekeeper + 1) * 187500}</div>
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
                                {auto.vehicle == 0 ? 0 : auto.vehicle * 31250}
                            </span>{' '}
                            -&gt;{' '}
                            <span>
                                {auto.vehicle == 0
                                    ? auto.vehicle + 31250
                                    : auto.vehicle * 31250 + 31250}
                            </span>
                        </div>
                        <div>
                            <button
                                className={classNameOn(auto.vehicle, 937500)}
                                onClick={() => {
                                    auto_vehicle();
                                }}
                                disabled={
                                    gold >= (auto.vehicle + 1) * 937500
                                        ? false
                                        : true
                                }
                            >
                                강화버튼
                                <div>{(auto.vehicle + 1) * 937500}</div>
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
                <div className="content_name3">
                    <div className="content_up">
                        <div>강아지</div>
                        <div>레벨</div>
                        <div>강화</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading.gif" />
                        </div>
                        <div>
                            <div>10초당골드 증가 [{auto_exp.dog}]</div>
                            <span>
                                {auto_exp.dog==0?0:auto_exp.dog*100}
                            </span>{' '}
                            -&gt;{' '}
                            <span>
                                {auto_exp.dog==0?100:auto_exp.dog*100+100}
                            </span>
                        </div>
                        <div>
                            <button
                                className='upbt'
                                onClick = {()=>{exp_Dog()}}
                                disabled={
                                    gold>=(auto_exp.dog+1)*1000?false:true
                                }
                            >
                                강화버튼
                                <div>{(auto_exp.dog+1)*1000}</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content_name3">
                    <div className="content_up">
                        <div>고양이</div>
                        <div>레벨</div>
                        <div>강화</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading.gif" />
                        </div>
                        <div>
                            <div>10초당골드 증가 [{auto_exp.cat}]</div>
                            <span>
                                {auto_exp.cat==0?0:auto_exp.cat*1000}
                            </span>{' '}
                            -&gt;{' '}
                            <span>
                                {auto_exp.cat==0?1000:auto_exp.cat*1000+1000}
                            </span>
                        </div>
                        <div>
                            <button
                                className='upbt'
                                onClick = {()=>{exp_Cat()}}
                                disabled={
                                    gold>=(auto_exp.cat+1)*10000?false:true
                                }
                            >
                                강화버튼
                                <div>{(auto_exp.cat+1)*10000}</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content_name3">
                    <div className="content_up">
                        <div>물고기</div>
                        <div>레벨</div>
                        <div>강화</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading.gif" />
                        </div>
                        <div>
                            <div>10초당골드 증가 [{auto_exp.fish}]</div>
                            <span>
                                {auto_exp.fish==0?0:auto_exp.fish*5000}
                            </span>{' '}
                            -&gt;{' '}
                            <span>
                                {auto_exp.fish==0?5000:auto_exp.fish*5000+5000}
                            </span>
                        </div>
                        <div>
                            <button
                                className='upbt'
                                onClick = {()=>{exp_Fish()}}
                                disabled={
                                    gold>=(auto_exp.fish+1)*50000?false:true
                                }
                            >
                                강화버튼
                                <div>{(auto_exp.fish+1)*50000}</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content_name3">
                    <div className="content_up">
                        <div>새</div>
                        <div>레벨</div>
                        <div>강화</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading.gif" />
                        </div>
                        <div>
                            <div>10초당골드 증가 [{auto_exp.bird}]</div>
                            <span>
                                {auto_exp.bird==0?0:auto_exp.bird*10000}
                            </span>{' '}
                            -&gt;{' '}
                            <span>
                                {auto_exp.bird==0?10000:auto_exp.bird*10000+10000}
                            </span>
                        </div>
                        <div>
                            <button
                                className='upbt'
                                onClick = {()=>{exp_Bird()}}
                                disabled={
                                    gold>=(auto_exp.bird+1)*100000?false:true
                                }
                            >
                                강화버튼
                                <div>{(auto_exp.bird+1)*100000}</div>
                            </button>
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
            useEffect(() => {
                setTimeout(removeGif, 2000);
            });
            return <PopGifLayer></PopGifLayer>;
        }
        root.render(<CallbackAfter />);
        return removeGif;
    };

    interface PopGifProps {}
    const PopGifLayer: React.FC<PopGifProps> = () => {
        return (
            <img
                src="./movingPeng.gif"
                style={{
                    position: 'absolute',
                    display: 'block',
                }}
            ></img>
        );
    };
    const Gold_Click = (e: any) => {
        if (stage < 3) {
            dispatch({
                type: 'GOLD_CLICK_REQUEST',
                payload: { user, typing: status.typing, luck: status.luck },
            });
            const audio = new Audio('키보드 효과음 2.mp3');
            if (sound_effect === true) {
                audio.volume = 0.5;
                audio.play();
            }
        } else {
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
                        <span>클릭골드</span>
                    </div>
                    <div
                        className={marketIgnoreMenu()}
                        onClick={() => {
                            ignoreGold();
                        }}
                    >
                        <span>방치골드</span>
                    </div>
                    <div
                        className={marketIgnoreExpMenu()}
                        onClick={() => {
                            ignoreExp();
                        }}
                    >
                        <span className="fontNoWrap">방치경험치</span>
                    </div>
                </div>
            </div>
        </Market1>
    );
};

export default Market;
