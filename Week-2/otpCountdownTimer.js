// OTP Countdown Timer
// Uses setInterval() to count down before the user can resend an OTP.

console.log("OTP sent  successfully");

let seconds = 10;

let intervalId = setInterval(() => {
  seconds--;
  console.log(`OTP can be resent after ${seconds} seconds`);

  if (seconds === 0) {
    console.log("Resend OTP");
    clearInterval(intervalId);
  }
}, 1000);
