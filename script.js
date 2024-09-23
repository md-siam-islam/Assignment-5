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
        
       <p class = "border-2 text-xl rounded-lg px-8 py-4"> ${inputValue} Taka is Donate For ${plasename}
       <br> <br>
       <small><strong>Date:</strong> ${currentDateTime} GMT +0600 (Bangladesh standard Time )</small>
       </p>
       
       <br> <br>
       `

       history.appendChild(historyList);


    
        
    }
})



// 2nd part start 

document.getElementById('donate-now-2').addEventListener('click',function(event){
    event.preventDefault();

    let inputValue2 = parseFloat(getInputFieldValueById('input-amount-2'));

    let textElement2 = parseFloat(getElementByIdText('donate-taka-2').innerText);

    let balance1 = parseFloat(getElementByIdText('balance').innerText);

    let plasename = document.getElementById("plasename-2").innerText ;

    let history = document.getElementById('all-history');
    const currentDateTime = new Date().toLocaleString('en-US');

    if(isNaN(inputValue2) || inputValue2 < 0){
        return alert('Invalid input');
    }

    else if(inputValue2 > balance1){
        return alert('Invalid input');
    }

   

    else{
   
        let totalDonate1 = textElement2 + inputValue2 ;

        let donate3 = getElementByIdText('donate-taka-2').innerText = totalDonate1 ;
        
        let myBalance = balance1 - donate3 ;

        getElementByIdText('balance').innerText = myBalance ;

       alert("Your Donate is Successfully");


       let historyList = document.createElement('div');
       historyList.innerHTML = `
        
       <p class = "border-2 text-xl rounded-lg px-8 py-4"> ${inputValue2} Taka is Donate For ${plasename}
       <br> <br>
       <small><strong>Date:</strong> ${currentDateTime} GMT +0600 (Bangladesh standard Time )</small>
       </p>
       
       <br> <br>
       `

       history.appendChild(historyList);


    
        
    }
})


// 2nd part start end



// 3nd part start start


document.getElementById('donate-now-3').addEventListener('click',function(event){
    event.preventDefault();

    let inputValue3 = parseFloat(getInputFieldValueById('input-amount-3'));

    let textElement3 = parseFloat(getElementByIdText('donate-taka-3').innerText);

    let balance2 = parseFloat(getElementByIdText('balance').innerText);

    let plasename = document.getElementById("plasename-3").innerText ;

    let history = document.getElementById('all-history');
    const currentDateTime = new Date().toLocaleString('en-US');

    if(isNaN(inputValue3) || inputValue3 < 0){
        return alert('Invalid input');
    }

    else if(inputValue3 > balance2){
        return alert('Invalid input');
    }

   

    else{
   
        let totalDonate1 = textElement3 + inputValue3 ;

        let donate3 = getElementByIdText('donate-taka-3').innerText = totalDonate1 ;
        
        let myBalance = balance2 - donate3 ;

        getElementByIdText('balance').innerText = myBalance ;

       alert("Your Donate is Successfully");

       let historyList = document.createElement('div');
       historyList.innerHTML = `
        
       <p class = "border-2 text-xl rounded-lg px-8 py-4"> ${inputValue3} Taka is Donate For ${plasename}
       <br> <br>
       <small><strong>Date:</strong> ${currentDateTime} GMT +0600 (Bangladesh standard Time )</small>
       </p>
       
       <br> <br>
       `

       history.appendChild(historyList);


    
        
    }
})



document.getElementById('blog').addEventListener("click" , function(){
    window.location.href ="./blog.html"
    
})



