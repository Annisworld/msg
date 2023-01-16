const messageInput = document.getElementById("message-input");

messageInput.addEventListener("keypress", function(event){
    if(event.key == "Enter")
    getMessage();
})

function getMessage(){
    document.getElementById("message-output").innerHTML = messageInput.value;
    messageInput.value = "";
}