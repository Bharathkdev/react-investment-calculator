import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  const handleChange = (inputIdentifier, newValue) => {
    const sanitizedValue = newValue.replace(/^0+/, "");

    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +sanitizedValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than 0!</p>
      )}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
};

export default App;
