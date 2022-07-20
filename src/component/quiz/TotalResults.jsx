import { Button, Typography } from "@mui/material";
import AnswersReview from "./AnswersReview";
import { useEffect } from "react";

const TotalResults = ({
    classes,
    resetQuiz,
    currentQuizStep,
    processedAnswers,
    setCurrentQuizStep,
}) => {
    useEffect(() => {
        window.scrollTo(0, "20px");
    }, []);
    return currentQuizStep === "results" ? (
        <div className={classes.results}>
            <Typography variant="h3" className={classes.mainTitle}>
                Results
            </Typography>
            <Typography variant="h4">
                {processedAnswers.filter(({ isCorrect }) => isCorrect).length} out of{" "}
                {processedAnswers.length}
            </Typography>
            <br/>
            <Button
                onClick={(e) => {
                    setCurrentQuizStep("review");
                }}
                className={classes.submitButton}
                variant="contained"
                color="primary"
            >
                Review
            </Button>{" "}
            <br/>
            <Button
                onClick={resetQuiz}
                className={classes.submitButton}
                variant="contained"
                color="primary"
            >
                Reset
            </Button>
        </div>
    ) : (
        <AnswersReview
            classes={classes}
            resetQuiz={resetQuiz}
            processedAnswers={processedAnswers}
        />
    );
};

export default TotalResults