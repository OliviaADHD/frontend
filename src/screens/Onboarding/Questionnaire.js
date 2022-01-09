import React, {useState} from 'react';
import {
    StyledContainer,
    InnerContainer,
    Colors
} from '../../css/general/style';
import {
    ButtonText,
    StyledTitle,
    CheckboxContainer,
    StyledCheckbox,
    StyledDotPagination,
    StyledDot,
    StyledButton,
    ErrorMessage,
    ErrorText
} from '../../css/Onboarding/questionarrie';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from "react-native";
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { newQuestions,beforePOST } from '../../redux/actions/questionarrie/questionarrie'
import { connect } from "react-redux";
import {useSelector } from "react-redux";

const handleAgeGroup = (ageGroup) => {
    switch (ageGroup) {
        case '18-25 Years':
            return 0;
        case '25-35 Years':
            return 1;
        case '35-45 Years':
            return 2;
        case '45-55 Years':
            return 3;
        case '55 and above':
            return 4;
        default:
            return null;
    }
}

const handleStatus = (status) => {
    switch (status) {
        case 'Diagnosed ADHD':
            return 0;
        case 'Undiagnosed ADHD':
            return 1;
        case 'I have symptoms':
            return 2;
        case 'Not Sure':
            return 3;
        default:
            return null;
    }
}

const handleDuration = (duration) => {
    if (typeof(duration) === 'undefined') {
      return null;
    }
    switch (duration) {
        case '< 1 years':
            return 0;
        case '1-3 years':
            return 1;
        case '3-6 years':
            return 2;
        case '6 + years':
            return 3;
        default:
            return null;
    }
}

const handleSymptoms = (symps) => {
    if (typeof(symps) === 'undefined') {
        return null;
    }
    console.log(symps)
    const myArray = symps.split("&");
    const response = new Array();
    for (var i = 0; i < myArray.length; i++) {
        switch (myArray[i]) {
            case 'Tardiness in achieving your goals':
                response.push(0);
                continue;
            case 'Difficulty keeping your mind focused on your tasks':
                response.push(1);
                continue;
            case 'Trouble in starting, finishing and prioritizing your daily tasks':
                response.push(2);
                continue;
            case 'Being easily distracted in completing your tasks':
                response.push(3);
                continue;
            case 'Impulsive behavior':
                response.push(4);
                continue;
        }
    }
    return response;
}

const handleSleepTime = (sleeps) => {
    if (typeof(sleeps) === 'undefined') {
        return null;
    }
    console.log(sleeps)
    const myArray = sleeps.split("&");
    let response = new Array();
    for (var i = 0; i < myArray.length; i++) {
        switch (myArray[i]) {
            case 'I sleep well':
                response.push(0);
                continue;
            case 'I have nightmares':
                response.push(1);
                continue;
            case 'I suffer from insomnia':
                response.push(2);
                continue;
            case 'I go to bed too late':
                response.push(3);
                continue;
            case 'I feel sleepy suddenly during the day (Narcolepsy)':
                response.push(4);
                continue;
            case 'Waking up frequently at night':
                response.push(5);
                continue;
        }
    }
    return response;
}

const Questionnaire = (props) => {
    const userData = useSelector(state => state.userName);
    const [answerPage1, setAnswerPage1] = useState(undefined);
    const [answerPage2, setAnswerPage2] = useState(undefined);
    const [answerPage3, setAnswerPage3] = useState(undefined);
    const [answerPage4, setAnswerPage4] = useState(undefined);
    const [answerPage5, setAnswerPage5] = useState(undefined);

    const [warningPage1, setWarningPage1] = useState(false);
    const [warningPage2, setWarningPage2] = useState(false);
    const [warningPage3, setWarningPage3] = useState(false);
    const [warningPage4, setWarningPage4] = useState(false);
    const [warningPage5, setWarningPage5] = useState(false);

    const questions = [
        {
            page: 1,
            question: 'What age group do you fall under?',
            answers: [
                '18-25 Years', '25-35 Years', '35-45 Years', '45-55 Years', '55 and above'
            ],
            multipleAnswers: false,
            setAnswer: setAnswerPage1,
            selectedAnswer: answerPage1,
            displayWarning: warningPage1,
            warning: "Please pick one",
            setWarning: setWarningPage1,
            nextPage: 2,
            previousPage: undefined
        }, {
            page: 2,
            question: 'How do you relate yourself with ADHD?',
            answers: [
                'Diagnosed ADHD', 'Undiagnosed ADHD', 'I have symptoms', 'Not Sure'
            ],
            multipleAnswers: false,
            setAnswer: setAnswerPage2,
            selectedAnswer: answerPage2,
            displayWarning: warningPage2,
            warning: "Please pick one",
            setWarning: setWarningPage2,
            nextPage: (answerPage2 === undefined || !answerPage2.split('&').includes('Diagnosed ADHD'))
                ? 3
                : 4,
            previousPage: 1
        }, {
            page: 3,
            question: 'Choose one or more of these, if you have felt/had.',
            answers: [
                'Tardiness in achieving your goals', 'Difficulty keeping your mind focused on your tasks', 'Trouble in starting, finishing and prioritizing your daily tasks', 'Being easily distracted in completing your tasks', 'Impulsive behavior'
            ],
            multipleAnswers: true,
            setAnswer: setAnswerPage3,
            selectedAnswer: answerPage3,
            displayWarning: warningPage3,
            warning: "Please pick one",
            setWarning: setWarningPage3,
            nextPage: 5,
            previousPage: 2
        }, {
            page: 4,
            question: 'If you have ADHD, How many years it has been diagnosed?',
            answers: [
                '< 1 years', '1-3 years', '3-6 years', '6 + years'
            ],
            multipleAnswers: false,
            setAnswer: setAnswerPage4,
            selectedAnswer: answerPage4,
            displayWarning: warningPage4,
            warning: "Please pick one",
            setWarning: setWarningPage4,
            nextPage: 5,
            previousPage: 2
        }, {
            page: 5,
            question: 'How do you sleep most of the time?',
            answers: [
                'I sleep well',
                'I have nightmares',
                'I suffer from insomnia',
                'I go to bed too late',
                'I feel sleepy suddenly during the day (Narcolepsy)',
                'Waking up frequently at night'
            ],
            multipleAnswers: true,
            setAnswer: setAnswerPage5,
            selectedAnswer: answerPage5,
            displayWarning: warningPage5,
            warning: "Please pick one",
            setWarning: setWarningPage5,
            nextPage: undefined,
            previousPage: (answerPage2 === undefined || !answerPage2.split('&').includes('Diagnosed ADHD'))
                ? 3
                : 4
        }
    ];

    const [currentPage, setCurrentPage] = useState(0);

  const dots = [{question: "1", pages: [1]},
                {question: "2", pages: [2]},
                 {question: "3", pages: [3, 4]},
                {question: "4", pages: [5]},
                  ];

    const userAnswers = {
        ageGroup: handleAgeGroup(answerPage1),
        status: handleStatus(answerPage2),
        symptoms: answerPage3,
        userId: userData.userId,
        sleepTime: answerPage5,
        duration: handleDuration(answerPage4)
    };


    const handleSubmit = (userAnswers) => {
        userAnswers.sleepTime = handleSleepTime(answerPage5)
        userAnswers.symptoms = handleSymptoms(answerPage3)
        props.beforePOST();
        props.newQuestions(userAnswers);
        props.navigation.replace('TutorialDashboard');
    };

    //const componentDidMount

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <StyledDotPagination>
          {dots.map((_question, index) => (
            <StyledDot key={index.toString()} filled={dots[index].pages.includes(questions[currentPage].page)} />
          ))}
        </StyledDotPagination>
                <StyledTitle>{questions[currentPage].question}</StyledTitle>
                <CheckboxContainer>
                    {questions[currentPage]
                        .answers
                        .map((possAnswer, index) => <OwnCheckbox
                            key={index.toString()}
                            text={possAnswer}
                            setAnswer={questions[currentPage].setAnswer}
                            multipleAnswers={questions[currentPage].multipleAnswers}
                            selectedAnswer={questions[currentPage].selectedAnswer}/>)}
                </CheckboxContainer>
                {questions[currentPage].displayWarning && <ErrorMessage>
                    <ErrorText>{questions[currentPage].warning}</ErrorText>
                </ErrorMessage>
}

                {questions[currentPage].page !== questions.length
                    ? (
                        <StyledButton
                            style={styles.button}
                            onPress={() => {
                            if (questions[currentPage].selectedAnswer !== undefined) {
                                questions[currentPage].setWarning(false);
                                setCurrentPage(questions[currentPage].nextPage - 1);
                            } else {
                                questions[currentPage].setWarning(true);
                            }
                        }}>
                            <ButtonText>Next</ButtonText>
                        </StyledButton>
                    )
                    : (
                        <StyledButton
                            style={styles.button}
                            onPress={() => {
                            if (questions[currentPage].selectedAnswer !== undefined) {
                                handleSubmit(userAnswers);
                            } else {
                                questions[currentPage].setWarning(true);
                            }
                        }}>
                            <ButtonText>Finish</ButtonText>
                        </StyledButton>
                    )}
                {questions[currentPage].page !== 1 && (
                    <StyledButton
                        style={styles.button}
                        onPress={() => setCurrentPage(questions[currentPage].previousPage - 1)}>
                        <ButtonText>Previous</ButtonText>
                    </StyledButton>
                )}
            </InnerContainer>
        </StyledContainer>
    );
};

const styles = StyleSheet.create({
    button: {
        width: "70%",
        marginBottom: "2%",
        marginTop: "4%"
    }
});

class OwnCheckbox extends BouncyCheckbox{
  constructor(props) {
    super(props);
    this.checked = false;
    } 
  render(){
    if (this.props.multipleAnswers){
      return (
        <StyledCheckbox
        key = {this.props.text}
        size={18}
        fillColor={Colors.purple}
        unfillColor={Colors.white}
        text={this.props.text}
        iconStyle={{borderColor: Colors.purple, borderRadius: 0}}
        textStyle={{ textDecorationLine: 'none' }}
        textContainerStyle={{ width: '95%', border: '1px solid red' }}
        isChecked={(this.props.selectedAnswer===undefined || !this.props.selectedAnswer.split('&').includes(this.props.text))?false:true}
        disableBuiltInState={true}
        onPress={() => {
          if (this.props.selectedAnswer===undefined){
            //only possibility is to add it :)
            this.props.setAnswer(this.props.text);
          } else if (this.props.selectedAnswer.split('&').includes(this.props.text)) {
              // now check if it has already been selected! -> remove it
              var answers = this.props.selectedAnswer.split('&');
              var ind = answers.indexOf(this.props.text);
              answers.splice(ind, 1); //element removed
              if (answers.length === 0){
                this.props.setAnswer(undefined);
                }
              else if (answers.length === 1) {
                this.props.setAnswer(answers[0]);
                } else {
                var answerstring = "";
                for (var i=0; i<answers.length-1; i++) 
                  {answerstring = answerstring + answers[i]+"&";}
                answerstring = answerstring + answers[answers.length-1]
                this.props.setAnswer(answerstring)
                }
          } else {
            // add it then
            this.props.setAnswer(this.props.selectedAnswer+"&"+this.props.text);
          }
        }}
      />
      );
  } else {
    return (
      <StyledCheckbox
      key={this.props.text}
      size={18}
      fillColor={Colors.purple}
      unfillColor={Colors.white}
      text={this.props.text}
      iconStyle={{ borderColor: Colors.purple}}
      textStyle={{ textDecorationLine: 'none' }}
      textContainerStyle={{ width: '95%'}}
      isChecked={(this.props.selectedAnswer==this.props.text)?true:false}
      disableBuiltInState={true}
      onPress={() => {
        this.props.setAnswer(this.props.text);
      }}
    />
    );
  }

}
}

const mapDispatchToProps = {
  beforePOST :  beforePOST,
  newQuestions: newQuestions
};

export default connect(
  null,
  mapDispatchToProps,
)(Questionnaire);
