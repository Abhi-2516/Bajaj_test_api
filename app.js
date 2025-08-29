const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const USER_DETAILS = {
  fullName: 'Abhishek_Yadav', 
  dob: '31122003',
  email: 'abhishekyadav2022@vitbhopal.ac.in', 
  rollNumber: '22BEY10122' 
};


const isNumber = (str) => {
  return !isNaN(str) && !isNaN(parseFloat(str));
};

const isAlphabet = (str) => {
  return /^[a-zA-Z]+$/.test(str);
};

const isSpecialChar = (str) => {
  return !isNumber(str) && !isAlphabet(str);
};

const processData = (data) => {
  const evenNumbers = [];
  const oddNumbers = [];
  const alphabets = [];
  const specialCharacters = [];
  let sum = 0;

  data.forEach(item => {
    if (isNumber(item)) {
      const num = parseInt(item);
      sum += num;
      
      if (num % 2 === 0) {
        evenNumbers.push(item.toString());
      } else {
        oddNumbers.push(item.toString());
      }
    } else if (isAlphabet(item)) {
      alphabets.push(item.toUpperCase());
    } else if (isSpecialChar(item)) {
      specialCharacters.push(item);
    }
  });

  const alphaStrings = data.filter(item => isAlphabet(item));
  let concatString = '';
  
  alphaStrings.reverse().forEach((char, index) => {
    const upper = index % 2 === 0;
    concatString += upper ? char.toUpperCase() : char.toLowerCase();
  });

  return {
    evenNumbers,
    oddNumbers,
    alphabets,
    specialCharacters,
    sum: sum.toString(),
    concatString
  };
};

// POST endpoint
app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;
    
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        error: "Request must contain a 'data' field with an array"
      });
    }

    const processedData = processData(data);
    
    res.status(200).json({
      is_success: true,
      user_id: `${USER_DETAILS.fullName}_${USER_DETAILS.dob}`,
      email: USER_DETAILS.email,
      roll_number: USER_DETAILS.rollNumber,
      odd_numbers: processedData.oddNumbers,
      even_numbers: processedData.evenNumbers,
      alphabets: processedData.alphabets,
      special_characters: processedData.specialCharacters,
      sum: processedData.sum,
      concat_string: processedData.concatString
    });
  } catch (error) {
    res.status(500).json({
      is_success: false,
      error: error.message
    });
  }
});


app.get('/bfhl', (req, res) => {
  res.status(200).json({
    operation_code: 1,
    message: 'API is running successfully'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;