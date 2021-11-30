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
      question: 'Choose one or more of these, if you have felt/had.',
      answers: [
        'Diagnosed ADHD',
        'Tardiness in undermining your goals',
        'Difficulty keeping your mind focused on your tasks',
        'Trouble in starting, finishing and prioritizing your daily tasks',
        'Being easily distracted in completing your tasks',
        'Impulsive behavior',
      ],
    },
    {
      page: 3,
      question: 'If you have ADHD, How many years it has been diagnosed?',
      answers: ['< 1 years', '1-3 years', '3-6 years', '6 + years'],
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

  const [checkboxState, setCheckboxState] = React.useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const handleSubmit = (userAnswers) => {
    console.log('userAnswers', userAnswers);
  };

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
              iconStyle={{ borderColor: purple, borderRadius: 5 }}
              textStyle={{ textDecorationLine: 'none' }}
              textContainerStyle={{ width: '100%', border: '1px solid red' }}
              isChecked={checkboxState}
              disableBuiltInState={true}
              onPress={(isChecked) => {
                setCheckboxState(!checkboxState)
                console.log(isChecked)
              }}
            />
          ))}
        </CheckboxContainer>

        <StyledQuestionaryButtons>
          {questions[currentPage].page !== questions.length ? (
            <StyledQuestionaryButton
              onPress={() => setCurrentPage(currentPage + 1)}
            >
              <ButtonText>Next</ButtonText>
            </StyledQuestionaryButton>
          ) : (
            <StyledQuestionaryButton onPress={handleSubmit(userAnswers)}>
              <ButtonText>Finish</ButtonText>
            </StyledQuestionaryButton>
          )}
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

// ideia: dentro do objeto das perguntas colocar se a resposta foi selecionada ou não, tds começando
// com false. colocar lógica no onPress para mudar o estado dequela resposta 
// e também adicionar lógica de que se uma estiver selecionada, mudar o estado das outras para não estar selecionada
// as vezes vai ser mais fácil fazer manual do que map. Lógica individual pra cada resposta