document.getElementById("history").addEventListener("click", function () {
    let eleMent = getElementByIdText('main-container').classList.add('hidden') ;

    let donationBtn = getElementByIdText('donation').classList.remove('bg-color1');

    getElementByIdText('history').classList.add('bg-color1');

    getElementByIdText("all-history").classList.remove('hidden');




});
document.getElementById("donation").addEventListener("click", function () {

    let eleMent = getElementByIdText('main-container').classList.remove('hidden') ;

    let donationBtn = getElementByIdText('history').classList.remove('bg-color1');

    getElementByIdText('donation').classList.add('bg-color1');

    getElementByIdText("all-history").classList.add('hidden');

});

document.getElementById('donate-now').addEventListener('click',function(event){
    event.preventDefault();

    let inputValue = parseFloat(getInputFieldValueById('input-amount'));

    let textElement = parseFloat(getElementByIdText('donate-taka').innerText);

    let balance1 = parseFloat(getElementByIdText('balance').innerText);

    let plasename = document.getElementById("plasename").innerText ;

    let history = document.getElementById('all-history');
    const currentDateTime = new Date().toLocaleString('en-US');

    if(isNaN(inputValue) || inputValue < 0){
        return alert('Invalid input');
    }

    else if(inputValue > balance1){
        return alert('Invalid input');
    }

   

    else{
   
        let totalDonate1 = textElement + inputValue ;

        let donate2 = getElementByIdText('donate-taka').innerText = totalDonate1 ;
        
        let myBalance = balance1 - donate2 ;

        getElementByIdText('balance').innerText = myBalance ;

       alert("Your Donate is Successfully");


       let historyList = document.createElement('div');
       historyList.innerHTML = `
        
       <p> ${inputValue} Taka is Donate For ${plasename}</p>
       <br>
       <small><strong>Date:</strong> ${currentDateTime} GMT +0600 (Bangladesh standard Time )</small>

       <br> <br>
       
       `

       history.appendChild(historyList);


    
        
    }
})



