const fetchQuestions = async () => {
  const url = 'https://opentdb.com/api.php?amount=10&difficulty=easy';
  const data = await (await fetch(url)).json();
  console.log(data.results);
};

export { fetchQuestions };
