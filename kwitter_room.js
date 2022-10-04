
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAhvXm4Wkva4DhnfupjGoX-Ppdq58AHQbE",
      authDomain: "kwitter-c719c.firebaseapp.com",
      projectId: "kwitter-c719c",
      storageBucket: "kwitter-c719c.appspot.com",
      messagingSenderId: "424508807502",
      appId: "1:424508807502:web:285dd815b74f01ac3ca61f"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom(
      {
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
            });

            localStorage.setItem("room_name", room_name)
            
            window.location =  "kwitter_page.html";
            
      }
    )
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names )
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id) '>#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console. log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}
