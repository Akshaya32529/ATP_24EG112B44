//setInterval concept
//otp countdown simulator

console.log("otp sent successfully")

let seconds=10;
let intervalId=setInterval(()=>{
    seconds--;
    console.log(`OTP can resend after ${seconds} secs`)
    if(seconds===0){
        console.log("resend otp");
        clearInterval(intervalId);
    }
},1000);