
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome" + user_name + "!";
function addroom()
{
Room_names = document.getElementById("room_name").value;
firebase.database().ref("/").child("room_name").update({
purpose : "addind room name" 


});
localStorage.setItem("room_name", Room_name);
window.location = "kwitter_page.html"
}


 getData() 
 {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code//
console.log("room_name - " + Room_names);
row = "<div class='room name'id=" +Room_name+"onclick 'redirectTORoomName(this.id)'>#"+Room_name+ "</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code//
      });});}
 getData();
function redirectTORoomName()
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html" ; 

}