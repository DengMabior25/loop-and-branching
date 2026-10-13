function analyzePrimeNumbers(N) {
    if (N < 2) {
        console.log(`${N} is not prime. There are no prime numbers up to ${N}.`);
        return;
    }

    let isNPrime = true;
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            isNPrime = false;
            break;
        }
    }
    console.log(`Is ${N} prime? ${isNPrime ? "Yes" : "No"}`);

    let primeCount = 0;
    let primeSum = 0;
    let primeList = [];

    for (let num = 2; num <= N; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeList.push(num);
            primeCount++;
            primeSum += num;
        }
    }

    console.log(`Prime numbers from 2 to ${N}: ${primeList.join(', ')}`);
    console.log(`Total count of primes: ${primeCount}`);
    console.log(`Sum of all primes: ${primeSum}`);
}

analyzePrimeNumbers(25);