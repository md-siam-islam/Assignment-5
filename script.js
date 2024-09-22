document.getElementById("history").addEventListener("click", function () {
//   console.log("hello");
    let eleMent = getElementByIdText('main-container').classList.add('hidden') ;

    let donationBtn = getElementByIdText('donation').classList.remove('bg-color1');

    getElementByIdText('history').classList.add('bg-color1');

});
document.getElementById("donation").addEventListener("click", function () {

    let eleMent = getElementByIdText('main-container').classList.remove('hidden') ;

    let donationBtn = getElementByIdText('history').classList.remove('bg-color1');

    getElementByIdText('donation').classList.add('bg-color1');

});



