import { Paper, Button, Typography } from "@mui/material";
import {Check, Close} from '@mui/icons-material';
import { createMarkup } from "../../helpers";

import React from 'react'

const AnswersReview = ({ processedAnswers, classes, resetQuiz }) => {
    const renderAnswers = (answers) => {
        return answers.map(
            ({ question, isCorrect, correctAnswer, wrongAnswer }) => (
                <Paper key={question} className={classes.paper}>
                    <Typography variant="h5" className={classes.question}>
                        <span dangerouslySetInnerHTML={createMarkup(question)} />
                    </Typography>

                    {isCorrect ? (
                        <Typography
                            variant="h5"
                            className={`${classes.answer} ${classes.correctAnswer}`}
                        >
                            <Check />
                            <span
                                className={classes.answer}
                                dangerouslySetInnerHTML={createMarkup(correctAnswer)}
                            />
                        </Typography>
                    ) : (
                        <>
                            <Typography
                                variant="h5"
                                color="secondary"
                                className={classes.answer}
                            >
                                <Close />
                                <span
                                    className={classes.answer}
                                    dangerouslySetInnerHTML={createMarkup(wrongAnswer)}
                                />
                            </Typography>
                            <Typography
                                variant="h5"
                                className={`${classes.answer} ${classes.correctAnswer}`}
                            >
                                <Check />
                                <span
                                    className={classes.answer}
                                    dangerouslySetInnerHTML={createMarkup(correctAnswer)}
                                />
                            </Typography>
                        </>
                    )}
                </Paper>
            )
        );
    };
    return (
        <>
            <Typography variant="h2" className={classes.mainTitle}>
                Answers review:
            </Typography>
            {renderAnswers(processedAnswers)}
            <Button
                className={classes.submitButton}
                onClick={resetQuiz}
                variant="contained"
                color="primary"
            >
                Reset
            </Button>
        </>
    );
};

export default AnswersReview