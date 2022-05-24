import React, { useReducer } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import Market1 from '../../components/market/market'


interface marketType {
    market: {
        clickgold: boolean,
        ignoregold: boolean,
        ignoreexp: boolean,
    }
}

const Market = () => {
    const dispatch = useDispatch();
    const checkMarket = useSelector((state: marketType) => state.market);

    const clickGold = () => {
        dispatch({ type: 'CLICK_GOLD', })
    };

    const ignoreGold = () => {
        dispatch({ type: 'IGNORE_GOLD', })
    };

    const ignoreExp = () => {
        dispatch({ type: 'IGNORE_EXP', })
    };

    const clickHandle = () => {
        return (
            <div className='content'>
                <div className='content_name'>
                    <div className='content_up'>
                        <div>체력</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className='content_down'>
                        <div>
                            <img src='./hp.png' />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className='upbt'>강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className='content_name'>
                    <div className='content_up'>
                        <div>타수</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className='content_down'>
                        <div>
                            <img src='./type.png' />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className='upbt'>강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className='content_name'>
                    <div className='content_up'>
                        <div>운</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className='content_down'>
                        <div>
                            <img src='./luck.png' />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className='upbt'>강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className='content_name'>
                    <div className='content_up'>
                        <div>인내력</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className='content_down'>
                        <div>
                            <img src='./patience.png' />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className='upbt'>강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className='content_name'>
                    <div className='content_up'>
                        <div>코딩력</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className='content_down'>
                        <div>
                            <img src='./coding.png' />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className='upbt'>강화버튼</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    const ignoreHandle = () => {
        return (
            <div className='content'>
                <div className='content_name'>
                    <div className='content_up'>
                        <div>책상</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className='content_down'>
                        <div>
                            <img src='./hp.png' />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className='upbt'>강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className='content_name'>
                    <div className='content_up'>
                        <div>의자</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className='content_down'>
                        <div>
                            <img src='./type.png' />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className='upbt'>강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className='content_name'>
                    <div className='content_up'>
                        <div>노트북</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className='content_down'>
                        <div>
                            <img src='./luck.png' />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className='upbt'>강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className='content_name'>
                    <div className='content_up'>
                        <div>펫</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className='content_down'>
                        <div>
                            <img src='./patience.png' />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className='upbt'>강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className='content_name'>
                    <div className='content_up'>
                        <div>알바생</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className='content_down'>
                        <div>
                            <img src='./coding.png' />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className='upbt'>강화버튼</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    const ignoreEx = () => {
        return (
            <div className='content'>
                <div className='content_name'>
                    <div className='content_up'>
                        <div>방치</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className='content_down'>
                        <div>
                            <img src='./hp.png' />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className='upbt'>강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className='content_name'>
                    <div className='content_up'>
                        <div>방치</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className='content_down'>
                        <div>
                            <img src='./type.png' />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className='upbt'>강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className='content_name'>
                    <div className='content_up'>
                        <div>방치</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className='content_down'>
                        <div>
                            <img src='./luck.png' />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className='upbt'>강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className='content_name'>
                    <div className='content_up'>
                        <div>방치</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className='content_down'>
                        <div>
                            <img src='./patience.png' />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className='upbt'>강화버튼</button>
                        </div>
                    </div>
                </div>
                <div className='content_name'>
                    <div className='content_up'>
                        <div>방치</div>
                        <div>레벨</div>
                        <div>추가</div>
                    </div>
                    <div className='content_down'>
                        <div>
                            <img src='./coding.png' />
                        </div>
                        <div>획득능력</div>
                        <div>
                            <button className='upbt'>강화버튼</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    const sum = () => {

        if (checkMarket.clickgold === true) {
            return clickHandle()
        } else if (checkMarket.ignoregold === true) {
            return ignoreHandle()
        } else if (checkMarket.ignoreexp === true) {
            return ignoreEx()    
        } else {
            {
                null
            }
        }

    }

    return (

        <Market1>
            <div className='wrap'>
                <div className='item'>메인입니다</div>
                <div className='content1'>
                    {/* {checkMarket.clickgold?clickHandle():null} */}
                    {/* {checkMarket.ignoregold?ignoreGold():null} */}
                    {sum()}
                </div>

                <div className='footer'>
                    <div className='stat' onClick={() => { clickGold() }}>클릭골드</div>
                    <div className='gold' onClick={() => { ignoreGold() }}>방치골드</div>
                    <div className='exp' onClick={() => { ignoreExp() }}>방치경험치</div>
                </div>
            </div>
        </Market1>
    )
}

export default Market;
