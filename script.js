function toCase(inputString) {
  if (inputString.length === 0) {
    return '-';
  }

  const lowercase = inputString.toLowerCase();
  const uppercase = inputString.toUpperCase();
  const result = `${lowercase}-${uppercase}`;

  return result;
}

// Examples
const result1 = toCase('Mthatha');
const result2 = toCase('HelloWorld');
const result3 = toCase('OpenAI');
const result4 = toCase(''); // empty string

console.log(result1); // Output: 'mthatha-MTHATHA'
console.log(result2); // Output: 'helloworld-HELLOWORLD'
console.log(result3); // Output: 'openai-OPENAI'
console.log(result4); // Output: '-'


// DO not change the code below

// const text = prompt("Enter text:");
// alert(toCase(text));
