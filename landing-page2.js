// LANDING PAGE 2 - Creating ID and UserName
var createAccount = document.querySelector("#create-account");
var p = document.querySelector("#userID");
var userName = document.querySelector("input[name='userName']");

db.collection("users").add({}).then((docRef) => {
    p.innerHTML = docRef.id; //Prints out unique user ID // For Copy
    createAccount.addEventListener("click",function(){
        if (userName.value != "") {
            console.log("click");
            db.collection("users").doc(docRef.id).set({
                name: userName.value,
                userID: docRef.id,
                assignments: []
            },{merge:true});
            window.location.href = "landing-page.html";
        } else {
            alert("Put a name!");
        }
    });
});
