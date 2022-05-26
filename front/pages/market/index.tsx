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

let container: null | HTMLDivElement = null

declare global {
    interface Window {
        MyNamespace: any;
    }
}

const Market = () => {
    const dispatch = useDispatch();
    const checkMarket = useSelector((state: marketType) => state.market);
    const user = useSelector((state: any) => state.user);
    const { user_idx, gold } = useSelector((state: any) => state.user);
    const { status } = useSelector((state: any) => state.user);

    const clickGold = () => {
        dispatch({ type: 'CLICK_GOLD' });
    };

    const ignoreGold = () => {
        dispatch({ type: 'IGNORE_GOLD' });
    };

    const ignoreExp = () => {
        dispatch({ type: 'IGNORE_EXP' });
    };

    const typingUp = () => {
        dispatch({ type: 'TYPING_UP_REQUEST', payload: { user, status } });
    };

    useEffect(() => {
        if (user_idx !== null) {
            dispatch({ type: 'STATUS_REQUEST', payload: user });
        }
    }, [user_idx]);

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
                            <div>체력 증가</div>
                            <span>{status.hp}</span> -&gt;{' '}
                            <span>{status.hp * 3}</span>
                        </div>
                        <div>
                            <button className="upbt">강화버튼</button>
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
                                <span>{status.typing * 2}</span>
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
                            <span>{status.luck}</span> -&gt;{' '}
                            <span>{status.luck * 3}</span>
                        </div>
                        <div>
                            <button className="upbt">강화버튼</button>
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
                            <span>{status.patience * 3}</span>
                        </div>
                        <div>
                            <button className="upbt">강화버튼</button>
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
                            <div>버그 수정률 증가</div>
                            <span>{status.coding}</span> -&gt;{' '}
                            <span>{status.coding * 3}</span>
                        </div>
                        <div>
                            <button className="upbt">강화버튼</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const ignoreHandle = () => {
        return (
            <div className="content_ignoreGold">
                <div className="content_name">
                    <div className="content_up">
                        <div>책상</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading.gif" />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className="upbt">강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className="content_name">
                    <div className="content_up">
                        <div>의자</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading.gif" />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className="upbt">강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className="content_name">
                    <div className="content_up">
                        <div>노트북</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading.gif" />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className="upbt">강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className="content_name">
                    <div className="content_up">
                        <div>펫</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading.gif" />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className="upbt">강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className="content_name">
                    <div className="content_up">
                        <div>알바생</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className="content_down">
                        <div>
                            <img src="./loading.gif" />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className="upbt">강화버튼</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const ignoreExHandle = () => {
        return (
            <div className="content_ignoreExp">
                <div className="content_name">
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
                            <button className="upbt">강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className="content_name">
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
                            <button className="upbt">강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className="content_name">
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
                            <button className="upbt">강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className="content_name">
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
                            <button className="upbt">강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className="content_name">
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
                            <button className="upbt">강화버튼</button>
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
            return "stat alignCenter menuOpacity"
        } else {
            return "stat alignCenter"
        }
    }
    const marketIgnoreMenu = () => {
        if (checkMarket.ignoregold === true) {
            return "gold alignCenter menuOpacity"
        } else {
            return "gold alignCenter"
        }
    }
    const marketIgnoreExpMenu = () => {
        if (checkMarket.ignoreexp === true) {
            return "exp alignCenter menuOpacity"
        } else {
            return "exp alignCenter"
        }
    }

    
    let count = 0;
    // 클릭시 손가락 위치에 이미지 뜸
    const handleClick = (e: any) => {
        console.log('x축:',e.clientX,'-- y축:',e.clientY)
        count++
        const clickX = e.clientX
        const clickY = e.clientY
        container = document.createElement("span") as HTMLDivElement
        const nodeName = `lay${count}`
        container.className=nodeName
        container.style.position = "absolute"
        container.style.top=clickY-20+"px"
        container.style.left=clickX-20+"px"
        container.style.zIndex='6'

        const collection = document.getElementsByClassName("background");
        console.log(collection[0])
        collection[0].prepend(container)

        const div = document.createElement("span");
        container.appendChild(div)
        const removeGif = () => {
            root.unmount()
            console.log(div.parentNode)
            if (div?.parentNode) {
                div.parentNode.removeChild(div)
            }
        }
        
        const root = createRoot(div);
        
        function CallbackAfter () {
            useEffect(() => {
                setTimeout(removeGif, 2000)
            });
            return <PopGifLayer></PopGifLayer>
        }
        root.render(<CallbackAfter />)
        return removeGif
    } 
      
    interface PopGifProps {}
    const PopGifLayer: React.FC<PopGifProps> = () => {
        return (

            <img
            src='./movingPeng.gif'
            style={{
                position:"absolute",
                display:"block",
            }}
            >
            </img>
        )
    }
    return (
        <Market1>
            <div className="wrap" onClick={handleClick}>

    const Gold_Click = () => {
        dispatch({
            type: 'GOLD_CLICK_REQUEST',
            payload: { user, typing: status.typing },
        });
    };

    return (
        <Market1>
            <div
                className="wrap"
                onClick={() => {
                    Gold_Click();
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
