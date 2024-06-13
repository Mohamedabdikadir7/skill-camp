function checkAnswers() {
    const correctAnswers = {
      question1: 'A',
      question2: 'B',
      question3: 'D',
      question4: 'A',
      question5: 'A',
      question6: 'B',
      question7: 'B'
    };

    let totalQuestions = Object.keys(correctAnswers).length;
    let correctCount = 0;

    for (let question in correctAnswers) {
      const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
      
      if (userAnswer) {
        const listItem = userAnswer.closest('li');
        if (userAnswer.value === correctAnswers[question]) {
          listItem.classList.add('correct');
          listItem.classList.remove('incorrect');
          correctCount++;
        } else {
          listItem.classList.add('incorrect');
          listItem.classList.remove('correct');
        }
      }
    }

    if (correctCount === totalQuestions) {
      document.getElementById('congratulations-message').style.display = 'block';
    } else {
      document.getElementById('congratulations-message').style.display = 'none';
    }
}
