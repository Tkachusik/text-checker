import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TextCheck = ({ originText, finish_at, seconds, onSubmit }) => {
    const [leftSeconds, setLeftSeconds] = useState(seconds);
    const [text, setText] = useState('');

    const tick = () => {
        const diff = finish_at - +new Date();
        const left = Math.floor((diff / 1000) % seconds);

        if (left === 0 || left < 0) onSubmit(text);

        if (left > 0) {
            setLeftSeconds(left);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => tick(), 1000);
        return () => clearInterval(timer);
    }, [finish_at]);

    const textHandler = (text) => {
        setText(text);
    }

    return (
        <Box sx={{ padding: '50px' }}>
            <Box sx={{ maxWidth: '100%', backgroundColor: '#d1d1d1', padding: '10px', fontSize: '12px' }}>
                {originText}
            </Box>
            <Box sx={{ maxWidth: '100%', margin: '10px 0' }}>
                Time left: {leftSeconds} seconds
            </Box>
            <Box sx={{ maxWidth: '100%' }}>
                <TextField
                    id="outlined-multiline-static"
                    label="Type text"
                    multiline
                    fullWidth
                    rows={10}
                    placeholder="Start typing"
                    margin="normal"
                    value={text}
                    onChange={(e) => textHandler(e.target.value)}
                />
            </Box>
            <div>
                <Button fullWidth variant="contained" disabled={text == ''} onClick={() => onSubmit(text)}>Done</Button>
            </div>
        </Box>
    );
};

export default TextCheck;