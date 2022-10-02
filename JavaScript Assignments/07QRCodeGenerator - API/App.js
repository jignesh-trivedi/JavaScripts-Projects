let generateQrCodeButton = document.querySelector(".submit");
let qrCode =document.querySelector("#img");
let userInput =document.querySelector(".data");
let mainDiv = document.querySelector(".main")

generateQrCodeButton.addEventListener("click", () => {
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput.value}`;
    qrCode.src = url;
    qrCode.style.display = "block"
    mainDiv.style.height = "550px"
})