import { extractEnteredNumbersValues } from './src/parser.js';
import { calculateResult } from './src/math.js';
import { generateResultText, ouputResult } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumbersValues(form);

  const result = calculateResult(numberValues);
  const resultText = generateResultText(result);

  ouputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
