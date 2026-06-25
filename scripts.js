const bookCallBtns = document.querySelectorAll(".call");
const bookCallTemplate = document.querySelector(".bookCallTemplate");
const templateClone = bookCallTemplate.content.cloneNode(true);
document.querySelector(".body").appendChild(templateClone);
const bookCallModal = document.querySelector(".bookCallModal");
const closeFormBtn = document.querySelector(".closeFormBtn");

const nameInputEl = document.getElementById("name");
const emailInputEl = document.getElementById("email");
const telNumberInputEl = document.getElementById("telNum");

const nameErrMsg = document.querySelector(".nameErr");

const menuBtn = document.querySelector(".menu-btn");
const menuBox = document.querySelector(".headLinksBox");



function bookCall(event){
    bookCallModal.showModal();
}

function closeBtn(){
    bookCallModal.close();
}

function isvalidName(name){
    if (!nameInputEl){
        // nameInputEl.style.border = "2px solid red";
        return;
    }
    

}

function isvalidEmail(){

}

function telNumber(){

}

function submitBookCallForm(event){
    if(event.type === "click"){
        if(!isvalidName(name)){
            event.preventDefault();
            nameErrMsg.textContent = "Please enter your fullname";
            // nameErrMsg.style.color="red";

            console.log("not valid");
        }
        else{
            nameErrMsg.textContent = "";
        }
    }
    return;
    
}

function submitEnquiryForm(event){
    if(event.type === "click"){
        event.preventDefault()
    }
    return;
}





// const bookCall = (event) => {
//     bookCallModal.showModal();
//     // console.log(event);
//     // if(event.type === "click"){
//     //     event.preventDefault()
//     //      console.log("default");
//     // }
//     // console.log("book call btn clicked");
// }


// const closeBtn = () => {
//     // bookCallModal.style.display="none";
//     bookCallModal.close();
// }


menuBtn.addEventListener("click", (event) => {
   menuBox.classList.toggle("openMenu");
})