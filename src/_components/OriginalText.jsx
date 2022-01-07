import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';

function isInt(value) {
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10));
}

const OriginalText = ({ defaultText = '', defaultSeconds = 60, onSubmit }) => {
    const defaultHelperText = 'Type at least 3 words';
    const errorHelperText = 'Incorrect entry. Please type 3 words';

    const [text, setText] = useState(defaultText);
    const [seconds, setSeconds] = useState(defaultSeconds);
    const [error, setError] = useState(false);
    const [errorSec, setErrorSec] = useState(false);
    const [helperText, setHelperText] = useState(defaultHelperText);

    const textHandler = (text) => {
        setText(text);

        const textLength = text.trim().split(' ').length;
        let err = false;
        let helper = defaultHelperText;

        if (textLength < 3) {
            err = true;
            helper = errorHelperText;
        }

        setError(err);
        setHelperText(helper);
    }

    

    const secondsHandler = (sec) => {
        let err = false;
        if (!isInt(sec)) {
            err = true;
        }

        setSeconds(sec);
        setErrorSec(err);
    };

    return (
        <Box sx={{ padding: '50px' }}>
            <Box sx={{ maxWidth: '100%' }}>
                <TextField
                    id="outlined-multiline-static"
                    label="Type original text"
                    multiline
                    fullWidth
                    rows={10}
                    placeholder="Start typing original text"
                    margin="normal"
                    helperText={helperText}
                    value={text}
                    onChange={(e) => textHandler(e.target.value)}
                    error={error}
                />
            </Box>
            <Divider />
            <Box sx={{ maxWidth: '100%', margin: '10px 0' }}>
                Set timer:
            </Box>
            <Box sx={{ maxWidth: '100%', margin: '10px 0' }}>
                <TextField
                    label="Seconds"
                    value={seconds}
                    onChange={(e) => secondsHandler(e.target.value)}
                    error={errorSec}
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button onClick={() => secondsHandler(60)}>60 sec</Button>
                                <Button onClick={() => secondsHandler(120)}>120 sec</Button>
                                <Button onClick={() => secondsHandler(300)}>300 sec</Button>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
            <Divider />
            <Box sx={{ maxWidth: '100%', margin: '10px 0' }}>
                You should finish it in {seconds} seconds
            </Box>
            <div>
                <Button fullWidth variant="contained" disabled={error || text == '' || errorSec} onClick={() => onSubmit(text, seconds)}>Apply</Button>
            </div>
        </Box>
    );
};

export default OriginalText;