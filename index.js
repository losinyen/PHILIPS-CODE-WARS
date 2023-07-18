// Database object
const languageDatabase = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  };
  
  // Welcome function
  function welcome(language) {
    // Check if the language exists in the database
    if (languageDatabase.hasOwnProperty(language)) {
      return languageDatabase[language];
    }
  
    // Default to English if the language is not in the database or an invalid input
    return languageDatabase['english'];
  }
  
  // Testing the welcome function
  console.log(welcome('french')); // Output: Bienvenue
  console.log(welcome('german')); // Output: Willkommen
  console.log(welcome('japanese')); // Output: Welcome (default to English)
  console.log(welcome('')); // Output: Welcome (default to English)
  