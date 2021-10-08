import React, { useState } from 'react';
import {
  StyledContainer,
  InnerQuestionaryContainer,
  StyledQuestionaryButton,
  ButtonText,
  StyledTitle,
  CheckboxContainer,
  StyledCheckbox,
  white,
  purple,
  StyledDotPagination,
  StyledDot,
  StyledQuestionaryButtons,
} from './../components/styles';
import { StatusBar } from 'expo-status-bar';

const Questionnaire = () => {
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
    },
    {
      page: 2,
      question: 'Choose one or more of these, if you have felt / had.',
      answers: [
        'Diagnosed ADHD',
        'Tardiness in undermining your goals',
        'Difficulty keeping your mind focused on your tasks',
        'Trouble in starting, finishing and prioritizing your daily tasks',
        'Being easily distracted in completing your tasks',
        'Impulsive behavior',
      ],
    },
  ];
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerQuestionaryContainer>
        <StyledDotPagination>
          {questions.map((_question, index) => (
            <StyledDot filled={index === currentPage} />
          ))}
        </StyledDotPagination>

        <StyledTitle>{questions[currentPage].question}</StyledTitle>

        <CheckboxContainer>
          {questions[currentPage].answers.map((answer) => (
            <StyledCheckbox
              size={18}
              fillColor={purple}
              unfillColor={white}
              text={answer}
              iconStyle={{ borderColor: purple, borderRadius: '5%' }}
              textStyle={{ textDecorationLine: 'none' }}
              textContainerStyle={{ width: '100%', border: '1px solid red' }}
              onPress={(isChecked) => {}}
            />
          ))}
        </CheckboxContainer>

        <StyledQuestionaryButtons>
          <StyledQuestionaryButton
            onPress={() => setCurrentPage(currentPage + 1)}
          >
            <ButtonText>Next</ButtonText>
          </StyledQuestionaryButton>
          {questions[currentPage].page !== 1 && (
            <StyledQuestionaryButton
              onPress={() => setCurrentPage(currentPage - 1)}
            >
              <ButtonText>Previous</ButtonText>
            </StyledQuestionaryButton>
          )}
        </StyledQuestionaryButtons>
      </InnerQuestionaryContainer>
    </StyledContainer>
  );
};

export default Questionnaire;
