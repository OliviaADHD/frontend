import React, { useState } from 'react';
import {
  StyledContainer,
  InnerContainer,
  ButtonText,
  StyledTitle,
  CheckboxContainer,
  StyledCheckbox,
  white,
  Colors,
  StyledDotPagination,
  StyledDot,
  StyledButton,
  ErrorMessage,
  ErrorText,
} from '../../components/styles';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet } from "react-native";
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Questionnaire = () => {
  const [answerPage1, setAnswerPage1] = useState(undefined);
  const [answerPage2, setAnswerPage2] = useState(undefined);
  const [answerPage3, setAnswerPage3] = useState(undefined);
  const [answerPage4, setAnswerPage4] = useState(undefined);

  const [warningPage1, setWarningPage1] = useState(false);
  const [warningPage2, setWarningPage2] = useState(false);
  const [warningPage3, setWarningPage3] = useState(false);
  const [warningPage4, setWarningPage4] = useState(false);

  const questions = [
    {
      page: 1,
      question: 'What age group do you fall under?',
      answers: [
        'younger than 18 Years',
        '18-25 Years',
        '26-35 Years',
        '36-45 Years',
        '46-55 Years',
        '55 and above',
      ],
      multipleAnswers: false,
      setAnswer: setAnswerPage1,
      selectedAnswer: answerPage1,
      displayWarning: warningPage1,
      warning: "Please select a category!",
      setWarning: setWarningPage1,
      nextPage: 2,
      previousPage: undefined,
    },
    {
      page: 2,
      question: 'Choose one or more of these, if you have felt/had.',
      answers: [
        'Diagnosed ADHD',
        'Tardiness in undermining your goals',
        'Difficulty keeping your mind focused on your tasks',
        'Trouble in starting, finishing and prioritizing your daily tasks',
        'Being easily distracted in completing your tasks',
        'Impulsive behavior',
      ],
      multipleAnswers: true,
      setAnswer: setAnswerPage2,
      selectedAnswer: answerPage2,
      displayWarning: warningPage2,
      warning: "Please select at least one answer!",
      setWarning: setWarningPage2,
      nextPage: (answerPage2 === undefined || !answerPage2.split('&').includes('Diagnosed ADHD'))?4:3,
      previousPage: 1,
    },
    {
      page: 3,
      question: 'If you have ADHD, How many years it has been diagnosed?',
      answers: ['< 1 years', '1-3 years', '3-6 years', '6 + years'],
      multipleAnswers: false,
      setAnswer: setAnswerPage3,
      selectedAnswer: answerPage3,
      displayWarning: warningPage3,
      warning: "Please select an answer!",
      setWarning: setWarningPage3,
      nextPage: 4,
      previousPage: 2,
    },
    {
      page: 4,
      question: 'How do you sleep most of the time?',
      answers: [
        'I sleep well',
        'I have nightmares',
        'I suffer from insomnia',
        'I go to bed too late',
        'I feel sleepy suddenly during the day (Narcolepsy)',
      ],
      multipleAnswers: false,
      setAnswer: setAnswerPage4,
      selectedAnswer: answerPage4,
      displayWarning: warningPage4,
      warning: "Please select an answer!",
      setWarning: setWarningPage4,
      nextPage: undefined,
      previousPage: (answerPage2 === undefined || !answerPage2.split('&').includes('Diagnosed ADHD'))?2:3,
    },
  ];

  const userAnswers = [
    {
      question: 'What age group do you fall under?',
      answer: answerPage1,
    },
    {
      question: 'Choose one or more of these, if you have felt/had.',
      answer: answerPage2.split("&"),
    },
    {
      question: 'If you have ADHD, How many years it has been diagnosed?',
      answer: answerPage3,
    },
    {
      question: 'How do you sleep most of the time?',
      answer: answerPage4,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const handleSubmit = (userAnswers) => {
    console.log('userAnswers', userAnswers);
  };

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <StyledDotPagination>
          {questions.map((_question, index) => (
            <StyledDot filled={index === currentPage} />
          ))}
        </StyledDotPagination>

        <StyledTitle>{questions[currentPage].question}</StyledTitle>

        <CheckboxContainer>
          { questions[currentPage].answers.map((possAnswer) => (
              <OwnCheckbox 
                key={possAnswer}
                text={possAnswer}
                setAnswer = {questions[currentPage].setAnswer}
                multipleAnswers = {questions[currentPage].multipleAnswers}
                selectedAnswer = {questions[currentPage].selectedAnswer}
              />
          ))}
          </CheckboxContainer>
          { questions[currentPage].displayWarning &&
              <ErrorMessage>
                  <ErrorText>{questions[currentPage].warning}</ErrorText>
              </ErrorMessage> 
          }

          {questions[currentPage].page !== questions.length ? (
            <StyledButton style = {styles.button}
                        onPress={() => {
                          if (questions[currentPage].selectedAnswer !== undefined){
                            questions[currentPage].setWarning(false);
                            setCurrentPage(questions[currentPage].nextPage-1);
                          }else{
                            questions[currentPage].setWarning(true);
                          }}}
            >
              <ButtonText>Next</ButtonText>
            </StyledButton>
          ) : (
            <StyledButton style = {styles.button}
                          onPress={()=>{
                            if (questions[currentPage].selectedAnswer !== undefined){
                              handleSubmit(userAnswers);
                            } else {
                              questions[currentPage].setWarning(true);
                            }
                            }}>
              <ButtonText>Finish</ButtonText>
            </StyledButton>
          )}
          {questions[currentPage].page !== 1 && (
            <StyledButton style = {styles.button}
                          onPress={() => setCurrentPage(questions[currentPage].previousPage-1)}
            >
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
  },
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


export default Questionnaire;


/*
stuff left:
* multi-input
* that on submit all is submitted in one object?
* navigation between different pages of questionairy correct
 */