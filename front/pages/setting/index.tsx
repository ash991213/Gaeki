import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Responsive from '../../components/setting/setting';

interface settingType {
    setting: {
        sound_effect: boolean;
        background_sound: boolean;
    };
}

const Setting = ({ closeSetting }: any) => {
    const dispatch = useDispatch();
    const { user_idx, background_sound, sound_effect } = useSelector(
        (state: any) => state.user
    );

    const effectButton = () => {
        dispatch({ type: 'EFFECT_BUTTON_REQUEST', user_idx, sound_effect });
    };

    const backButton = () => {
        dispatch({ type: 'BACK_BUTTON_REQUEST', user_idx, background_sound });
    };

    return (
        <Responsive>
            <div className="wrap">
                <button className="closebt" onClick={() => closeSetting()}>
                    x
                </button>
                <div>
                    <span className="settingHead">설정</span>
                    <div className="imgwrap">
                        <img src="./설정.jpg" />
                    </div>
                    <div className="button">
                        <div className="effectbutton">
                            <div className="text1">효과음</div>
                            <div className="button1" onClick={effectButton}>
                                {sound_effect === true ? (
                                    <img src="./effect.png" />
                                ) : (
                                    <img src="./back.png" />
                                )}
                            </div>
                        </div>
                        <div className="backbutton">
                            <div className="text1">배경음</div>
                            <div className="button1" onClick={backButton}>
                                {background_sound === true ? (
                                    <img src="./back.png" />
                                ) : (
                                    <img src="./effect.png" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Responsive>
    );
};

export default Setting;
