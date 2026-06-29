const bookCallBtns = document.querySelectorAll(".call");
const bookCallTemplate = document.querySelector(".bookCallTemplate");
const templateClone = bookCallTemplate.content.cloneNode(true);
document.querySelector(".body").appendChild(templateClone);
const bookCallModal = document.querySelector(".bookCallModal");
const closeFormBtn = document.querySelector(".closeFormBtn");

// book call modal
const nameInputEl = document.getElementById("fullName");
const emailInputEl = document.getElementById("modalEmail");
const telNumberInputEl = document.getElementById("modaltelNum");
const industryInputEl = document.getElementById("industry");
const subjectInputEl = document.getElementById("subject");

// enquiry form
const enquiryName = document.getElementById("name");
const enquiryEmail = document.getElementById("email");
const enquiryTelNum = document.getElementById("telNum");
// const enquiryReason = document.querySelector("input[name='reason']:checked");
const enquiryReason = document.querySelector("input[name='reason']");
const enquiryMessage = document.getElementById("message");
const contactFormBtn = document.querySelector(".formSubmit");

// error messages
let nameErrMsg = document.querySelector(".nameErr");
let emailErrMsg = document.querySelector(".emailErr");
let telNumErrMsg = document.querySelector(".telNumErr");
let industryErrMsg = document.querySelector(".industryErr");
let subjectErrMsg = document.querySelector(".subjectErr");

const menuBtn = document.querySelector(".menu-btn");
const menuBox = document.querySelector(".headLinksBox");

function bookCall(event){
    bookCallModal.showModal();
}

function closeBtn(){bookCallModal.close();}

function isvalidName(fullName, nameErrMsg){
    const fullname = fullName.value.trim();
    nameErrMsg.textContent = ""; 

    if (fullname.split(/\s+/g).length < 2){ nameErrMsg.textContent = "Please enter your fullname"; return false; }
    return fullname; 

}

function isvalidEmail(emailEl, emailErrMsg){
    const email = emailEl.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    emailErrMsg.textContent = "";

    if (email === "" || !emailRegex.test(email)){ emailErrMsg.textContent = "Please enter a valid email"; return false; }
    return email;
    
}

function isvalidtelNumber(telNumber, telNumErrMsg){
    const telNum = telNumber.value.trim();
    const telNumRegex = /^\+?[0-9\s()-]{7,20}$/;
    telNumErrMsg.textContent = "";

    if(telNum === "" || !telNumRegex.test(telNum)){
        telNumErrMsg.textContent = "Please enter a valid telephone number"; 
        return false;
    }
    return telNum;
}

function isvalidIndustry(industryEl, industryErrMsg){
    const industry = industryEl.value.trim();
    industryErrMsg.textContent = "";
    
    if (industry === ""){
        industryErrMsg.textContent = "Please enter a valid industry name";
        return false;
    }
    return industry;

}

function isvalidMessage(messageEl, subjectErrMsg){
    const message = messageEl.value.trim();
    subjectErrMsg.textContent = "";

    if(message.split(/\s+/).length < 5){
        subjectErrMsg.textContent = "Tell us more...";
        return false;
    }
    return message;
}

function submitBookCallForm(event){
       
       const validName = isvalidName(nameInputEl, nameErrMsg);
       const validEmail = isvalidEmail(emailInputEl, emailErrMsg);
       const validTelNumber = isvalidtelNumber(telNumberInputEl, telNumErrMsg);
       const validIndustry = isvalidIndustry(industryInputEl, industryErrMsg);
       const validSubject = isvalidMessage(subjectInputEl, subjectErrMsg);

       if (!validName || !validEmail || !validTelNumber || !validIndustry || !validSubject){
         event.preventDefault();
         return; 

        }
       console.log(validName, validEmail, validTelNumber, validIndustry, validSubject)
       console.log("workinggg");
}

contactFormBtn.addEventListener("click", (event) =>{ submitContactForm(event); })


function submitContactForm(event){

     const validName = isvalidName(enquiryName, nameErrMsg="");
     const validEmail = isvalidEmail(enquiryEmail, emailErrMsg="");
     const validTelNumber = isvalidtelNumber(enquiryTelNum, telNumErrMsg="");
     const validSubject = isvalidMessage(enquiryMessage, subjectErrMsg="");
     const reason = enquiryReason.value;
       
     if (!validName || !validEmail || !validTelNumber || !validSubject){
        event.preventDefault();
        console.log("please tellus the truth");
        return;
    }

    const data = {
        name: validName,
        email: validEmail,
        telNum: validTelNumber,
        message: validSubject
    }

        event.preventDefault();

       console.log(validEmail, validName, validTelNumber, validSubject, reason);

    return data;
    console.log(data);


    
}

async function sendEnquiry(data){

    const request = { method: "POST", body: JSON.stringify(data), headers: { "Content-Type" : "application/json" } };
    const response = await fetch(customerURL, request);
    const reply = await response.json();

}






menuBtn.addEventListener("click", (event) => {
   const menuOpen = menuBox.classList.toggle("openMenu");
   menuOpen ? menuBtn.textContent = "Close" : menuBtn.textContent = " Menu";

})
