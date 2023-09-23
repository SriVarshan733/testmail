

//Please Subscribe Ash_is_Coding.

function sendOTP(){
    console.log("Working")
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    // Create a SMTP crendentials that I showed u in my previous video

    // Generating random number as OTP;

    let otp_val = Math.floor(Math.random()*10000);

    let emailbody = `
        <h1>One Time password for Bid.it</h1> <br>
        <h2>Your OTP is </h2>${otp_val}
    `;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "vijayabhaskar.vdct@gmail.com",
        Password: "AABA87C7B4BFC3CE032A44C928D3F6E275A5",
        To : email.value,
        From : "vijayabhaskar.vdct@gmail.com",
        Subject : "One Time Password for , Bid.it",
        Body : emailbody
    }).then(
        //if success it returns "OK";
      message => {
        if(message === "OK"){
            alert("OTP sent to your email "+email.value);

            // now making otp input visible
            otpverify.style.display = "block";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener('click',()=>{
                // now check whether sent email is valid
                if(otp_inp.value == otp_val){
                    alert("Email address verified...");
                }
                else{
                    alert("Invalid OTP");
                }
            })
        }
        else{
            alert(message);
        }
      }
    );

}