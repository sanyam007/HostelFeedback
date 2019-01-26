var mainText = document.getElementById("mainText");
var mainText1 = document.getElementById("mainText1");
var mainText2 = document.getElementById("mainText2");
var mainText3 = document.getElementById("mainText3");
var mainText4 = document.getElementById("mainText4");
var mainText5 = document.getElementById("mainText5");
var mainText6 = document.getElementById("mainText6");




var submitBtn = document.getElementById("submitBtn");
var fireHeading = document.getElementById("fireHeading");
var firebaseHeadingRef = firebase.database().ref().child("Heading1");
firebaseHeadingRef.on('value',function(datasnapshot){
fireHeading.innerText = datasnapshot.val();  
});


function submitClick()
{
    
    var firebaseRef = firebase.database().ref();
    var messageText = mainText.value;
    var messageText1 = mainText1.value;
    var messageText2 = mainText2.value;
    var messageText3 = mainText3.value;
    var messageText4 = mainText4.value;
    var messageText5 = mainText5.value;
    var messageText6 = mainText6.value;
   

   firebaseRef.push().set(messageText);
   firebaseRef.push().set(messageText1);
   firebaseRef.push().set(messageText2);
   firebaseRef.push().set(messageText3);
   firebaseRef.push().set(messageText4);
   firebaseRef.push().set(messageText5);
   firebaseRef.push().set(messageText6);
      


}


