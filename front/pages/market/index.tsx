import React from 'react'
import styled  from 'styled-components'
import Market1 from '../../components/market/market'

const Market = () => {
    return(
        <Market1>
            <div className='wrap'>
                <div className='item'>메인입니다</div>
                <div className='content'>
                    <div className='content_name'>
                        <div className='content_up'>
                            <div>체력</div>
                            <div>레벨</div>
                            <div>추가</div>
                        </div>
                        <div className='content_down'>
                            <div>
                                <img src='./hp.png'/>
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
                                <img src='./type.png'/>
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
                                <img src='./luck.png'/>
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
                                <img src='./patience.png'/>
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
                                <img src='./coding.png'/>
                            </div>
                            <div>획득능력</div>
                            <div>
                                <button className='upbt'>강화버튼</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <div className='stat'>클릭골드</div>
                    <div className='gold'>방치골드</div>
                    <div className='exp'>방치경험치</div>
                </div>
            </div>
        </Market1>
    )
}

export default Market;