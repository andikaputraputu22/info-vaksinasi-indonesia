import React from 'react';
import {CustomInput} from 'reactstrap';

const Toggle = ({theme, toggleTheme}) => {
    return (
        <span className="text-right">
            <CustomInput onChange={toggleTheme} type="switch" id="exampleCustomSwitch" label="Dark Mode" checked={theme === 'dark' ? 'checked' : ''} />
        </span>
    )
}

export default Toggle;