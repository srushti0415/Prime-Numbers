let b = 2;
function primenumbers(a) {
    let isPrimeNumber = 0;
    while (b < a) {
        if (a % b == 0) {
            console.log("its not a prime no.")
            isPrimeNumber = 1
        }
        b++;
    }
    if (isPrimeNumber == 0 )
    console.log("its a prime no")
}
primenumbers(448);

