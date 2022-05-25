import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Responsive from '../../components/setting/setting';

interface settingType {
    setting: {
        effectOn: boolean;
        backOn: boolean;
    };
}

const Setting = ({ closeSetting }: any) => {
    const dispatch = useDispatch();
    const { effectOn } = useSelector((state: settingType) => state.setting);
    const { backOn } = useSelector((state: settingType) => state.setting);

    const effectButton = () => {
        dispatch({ type: 'EFFECT_BUTTON_REQUEST', userid: 'test', effectOn });
    };

    const backButton = () => {
        dispatch({ type: 'BACK_BUTTON_REQUEST', userid: 'test', backOn });
    };

    return (
        <Responsive>
            <div className="wrap">
                <button className="closebt" onClick={() => closeSetting()}>
                    x
                </button>
                <div className="img">
                    <img src="./설정.jpg" />
                </div>
                <span className="">설정</span>
                <div className="button">
                    <div className="effectbutton">
                        <div className="text1">효과음</div>
                        <div className="button1" onClick={effectButton}>
                            {effectOn === true ? (
                                <img src="./effect.png" />
                            ) : (
                                <img src="./back.png" />
                            )}
                        </div>
                    </div>
                    <div className="backbutton">
                        <div className="text1">배경음</div>
                        <div className="button1" onClick={backButton}>
                            {backOn === true ? (
                                <img src="./back.png" />
                            ) : (
                                <img src="./effect.png" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Responsive>
    );
};

export default Setting;
