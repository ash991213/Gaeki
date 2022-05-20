interface settingType {
    effectbutton: boolean;
    backbutton: boolean;
}

const initialState: settingType = {
    effectbutton: true,
    backbutton: true


}

const EFFECT_BUTTON = 'EFFECT_BUTTON'
const BACK_BUTTON = 'BACK_BUTTON'

const setting = (state: settingType = initialState, action: any) => {
    switch (action.type) {
        case EFFECT_BUTTON:
            return {
                ...state,
                effectbutton: !state.effectbutton
            }
        case BACK_BUTTON:
            return {
                ...state,
                backbutton: !state.backbutton
            }; 
        default: {
            return state;
        }
    }

}

export default setting