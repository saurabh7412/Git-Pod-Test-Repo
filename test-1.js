

const res = generateOTP(6)
console.log(res);


function generateOTP(num){
    let otp = null;

    if (num <= 0) {
        throw new Error("n must be a positive integer");
      }
    
      const lowerBound = Math.pow(10, num - 1);
      const upperBound = Math.pow(10, num) - 1;
    
      const randomFloat = Math.random() * (upperBound - lowerBound + 1) + lowerBound;
      otp = Math.floor(randomFloat);

    return otp
}