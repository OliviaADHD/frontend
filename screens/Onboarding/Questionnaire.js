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
    },
  ];

  const userAnswers = [
    {
      question: 'What age group do you fall under?',
      answer: [],
    },
    {
      question: 'Choose one or more of these, if you have felt/had.',
      answer: [],
    },
    {
      question: 'If you have ADHD, How many years it has been diagnosed?',
      answer: [],
    },
    {
      question: 'How do you sleep most of the time?',
      answer: [],
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
          {questions[currentPage].answers.map((possAnswer) => (
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
                            setCurrentPage(currentPage + 1);
                          }else{
                            questions[currentPage].setWarning(true);
                          }}}
            >
              <ButtonText>Next</ButtonText>
            </StyledButton>
          ) : (
            <StyledButton style = {styles.button}
                          onPress={handleSubmit(userAnswers)}>
              <ButtonText>Finish</ButtonText>
            </StyledButton>
          )}
          {questions[currentPage].page !== 1 && (
            <StyledButton style = {styles.button}
                          onPress={() => setCurrentPage(currentPage - 1)}
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
        isChecked={this.checked}
        disableBuiltInState={true}
        onPress={(isChecked) => {
          if (this.checked === true){this.checked = false;}
          else {this.checked = true}
          if (this.props.selectedAnswer === undefined){
            console.log("first answer!");
            this.props.setAnswer(this.props.text);
          } else {
            console.log("more answers");
            var answers = this.props.selectedAnswer.split("&")
            console.log(answers);
            this.props.setAnswer(this.props.selectedAnswer+this.props.text);
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
      onPress={(isChecked) => {
        this.props.setAnswer(this.props.text);
        console.log('Checked checkbox  '+this.props.text);
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