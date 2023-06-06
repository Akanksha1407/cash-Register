const BillAmount= document.querySelector("#bill-amount");
const cashAmount= document.querySelector("#Cash-given");
const checkButton=document.querySelector("#check-button");
const message=document.querySelector("#error");
const noOfNotes=document.querySelectorAll(".no-of-notes");

const availableNotes= [2000 , 500 , 100 , 20 , 10 , 5 , 1];

checkButton.addEventListener("click" , function Validate(){
    hideMessage();
if( BillAmount.value > 0){

    if(parseInt(cashAmount.value) >= parseInt(BillAmount.value)){
        const AmountToBereturned = parseInt(cashAmount.value) - parseInt(BillAmount.value);
        calculateChange(AmountToBereturned);
        
    }
    else{
        showMessage("The cash provided should be atleast equal to Bill amount.");
    }

}
else{
    showMessage("Invalid Bill Amount");
}

} );

function showMessage(msg){
    message.style.display= "block";
    message.innerText=msg;
}

function hideMessage(){
    message.style.display="none";
}

function calculateChange(AmountToBereturned ){
        for(let i =0 ;i<availableNotes.length;i++){
            const numberOfNotes=Math.trunc(AmountToBereturned/availableNotes[i]);
            AmountToBereturned =AmountToBereturned % availableNotes[i];
            noOfNotes[i].innerText=numberOfNotes;
        }
}