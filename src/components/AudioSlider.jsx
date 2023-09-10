import Slider from '@mui/material/Slider';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function AudioSlider(props) {
    const [sliderValue, setValue] = useState(0);


    useEffect(() => {
        setTheme(props.theme);
    }, [props.theme]);

    const handleChange = (e, newVal) => {
        setValue(newVal);
        var audio = document.getElementById(props.id);
        audio.play();
        audio.volume = parseFloat(newVal);
    };

    const [theme, setTheme] = useState(props.theme);

    return (
        <>
            <div className='flex justify-between items-center flex-grow'>
                <div className='w-[50%] h-8 flex items-end'>
                    <Slider
                        value={sliderValue}
                        step={0.01}
                        min={0.0}
                        max={1.0}
                        onChange={handleChange}
                        sx={{
                            color: theme === 'dark' ? 'common.white' : 'common.black',
                        }}
                    />
                </div>
                <p className='text-base text-white'>{props.description}</p>
            </div>
            <audio loop id={props.id} src={props.src}></audio>
        </>
    );
}

AudioSlider.propTypes = {
    description: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
};