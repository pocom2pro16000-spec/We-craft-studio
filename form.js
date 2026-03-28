function sendForm(){
  let n=document.getElementById("name").value;
  let e=document.getElementById("email").value;

  if(!n || !e){
    alert("Fill all fields");
    return false;
  }

  alert("Message Sent 🚀");
  return false;
}