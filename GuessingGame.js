function guessingGame(guesses) {
    const secret = 37;
    const maxAttempts = 7;
    let attempts = 0;

    for (let i = 0; i < guesses.length; i++) {
        attempts++;
        let guess = guesses[i];

        console.log(`Attempt ${attempts}: Guessed ${guess}`);

        if (guess === secret) {
            console.log(`Correct! You found the secret number in ${attempts} attempts.`);
            return;
        } else if ( guess > secret) {
            console.log("Too high");
        } else {
            console.log("Too low");
        }

        if (attempts >= maxAttempts) {
            console.log(`Game Over! You reached the maximum limit of ${attempts} attempts.`);
            return;
        }
    }
}

const userGuesses = 0;
guessingGame(userGuesses);