import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { OriginalText, TextCheck, Score } from '../_components';
import { useDispatch, useSelector } from 'react-redux';

import { checkerActions } from '../_actions';
import { checkerConstants } from '../_constants';

const HomePage = () => {
    const dispatch = useDispatch();
    const checker = useSelector(state => state.checker);

    const handleOnSubmit = (originalText, time) => {
        dispatch(checkerActions.setOrigin(originalText, time));
    };

    const handleOnSubmitCheck = (text) => {
        dispatch(checkerActions.submitText(text));
    };

    const handleOnReset = () => {
        dispatch(checkerActions.reset());
    };

    return (
        <div>
            <Container maxWidth="sm">
                {
                    checker.step === checkerConstants.SET_ORIGIN_TEXT ?
                        <OriginalText
                            defaultText={checker.originText}
                            defaultSeconds={checker.seconds}
                            onSubmit={(originalText, time) => handleOnSubmit(originalText, time)}
                        />
                        :
                        ""
                }
                {
                    checker.step === checkerConstants.START_TYPING ?
                        <TextCheck
                            originText={checker.originText}
                            finish_at={checker.finish_at}
                            seconds={checker.seconds}
                            onSubmit={(text) => handleOnSubmitCheck(text)}
                        />
                        :
                        ""
                }
                {
                    checker.step === checkerConstants.FINISH ?
                        <Score
                            score={checker.score}
                            onReset={() => handleOnReset()}
                        />
                        :
                        ""
                }
            </Container>
        </div>
    );
}

export default HomePage;