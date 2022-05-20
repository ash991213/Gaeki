import React, { useReducer } from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import  Setting1  from '../../components/setting/setting'
// import{ settingType} from '../../src/reducers/setting'

interface settingType{
    setting:{
        effectbutton: boolean;
        backbutton: boolean;
        // backbutton:boolean;
    }
    
}

const Setting = () => {
    const dispatch = useDispatch();
    const checkSetting = useSelector((state:settingType) => state.setting);

    const effectButton = () => {
        console.log(checkSetting)
        dispatch({ type: 'EFFECT_BUTTON' ,payload :checkSetting})
    };

    const backButton = () => {
        dispatch({ type: 'BACK_BUTTON'  ,payload :checkSetting})
    };
    
    const {effectbutton, backbutton} = checkSetting
    return (

        <Setting1>
            <div className='wrap'>
                <h1 className='closebt'>x</h1>
                <div className='closebt'>
                </div>
                <div className='img'>
                    <img src='./설정.jpg'/>
                </div>    
                <div className='header'>설정</div>
                <div className='button'>
                    <div className='effectbutton'>
                        <div className='text1'>효과음</div>
                        <div className='button1' onClick={effectButton}><img src='./effect.png'/></div>
                    </div>
                        
                    <div className='backbutton'>
                        <div className='text1'>배경음</div>
                        <div className='button1' onClick={backButton}><img src='./back.png'/></div>
                    </div>
                </div>    
            </div>
        </Setting1>
    )
}

export default Setting;