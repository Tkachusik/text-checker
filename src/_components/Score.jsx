import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Score = ({ score, onReset }) => {
    return (
        <Box sx={{ padding: '50px' }}>
            <Box sx={{ maxWidth: '100%', backgroundColor: '#d1d1d1', padding: '10px', fontSize: '20px' }}>
                Your score is {score}
            </Box>
            <div>
                <Button fullWidth variant="contained" onClick={() => onReset()}>Start again!</Button>
            </div>
        </Box>
    );
};

export default Score;