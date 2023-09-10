import Slider from '@mui/material/Slider';
import PropTypes from 'prop-types';
import { useState } from 'react';
import "../App.css";


export default function AudioSlider(props) {

    const [sliderValue, setValue] = useState(0);

    // MUI colours:
    // common.black
    // common.white

    const handleChange = (e, newVal) => {
        setValue(newVal);
        var audio = document.getElementById(props.id);
        audio.play();
        audio.volume = parseFloat(newVal);
    };


    return (
        <>
            <div className='flex justify-between'>
                <div className='w-[50%] h-9 flex items-center'>
                    <Slider
                        value={sliderValue}
                        step={0.01}
                        min={0.0}
                        max={1.0}
                        onChange={handleChange}
                        sx={{
                            color: 'common.black',
                        }}
                    />
                </div>
                <p className='text-sm'>{props.description}</p>
            </div>
            <audio loop id={props.id} src={props.src}></audio>
        </>
    );
}

AudioSlider.propTypes = {
    description: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};