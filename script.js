window.onload = function(e){
    const hIcons = document.getElementsByClassName('heart')
    const hCount = document.getElementById('heartCount')
    let count = 0 ;

    for(let i = 0; i < hIcons.length ; i++ ){
        hIcons[i].addEventListener('click', function(){
            count++ ;
            hCount.innerText = count
            console.log('heart clicked')
        })
    }
}


document.addEventListener('DOMContentLoaded', function(){
    const coin = document.getElementById("coin");
    const callHistory = document.getElementById("clearHistory");
    const historyClear = document.getElementById("clearHistoryBtn");
    const allButtons = document.getElementsByTagName('button');

    for (let i = 0; i < allButtons.length; i++){
        const button = allButtons[i];
        const span = button.getElementsByTagName("span")[0];
        if (span && span.innerText.trim().toLowerCase() === "call") {
            button.onclick = function () {
                handleCall(this);
            };
        }
    }
    function handleCall(buttonElement){
        const card = buttonElement.closest(".space-y-3");
        const name = card.querySelector("h3.font-bold.text-xl").innerText;
        const number = card.querySelector("h3.font-bold.text-2xl").innerText;

        let currentCoins = parseInt(coin.innerText);

        if(currentCoins < 20){
            alert("You don't have enough coins to make a call.");
            return;
        }
        alert("📞 Calling " + name + " " + number);
        
        currentCoins -= 20;
        coin.innerText = currentCoins;

        const time = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        addToHistory(name, number, time);
    }
    function addToHistory(name, number, time){
        const historyItem = document.createElement("div");
        historyItem.className = "bg-gray-100 p-3 rounded-md text-base ";
        historyItem.innerHTML = `
            <div class="flex justify-between items-center font-semibold text-[#111] mb-3">
            <span>${name}</span>
            <span class="text-gray-500 text-sm">${time}</span>
            </div>
            <div class="text-gray-700 text-base">${number}</div>
        `;
        callHistory.prepend(historyItem);
    }
    historyClear.addEventListener("click", function(){
    callHistory.innerHTML = "";
    });
});


document.addEventListener('DOMContentLoaded', function(){
    const copyBtns = document.querySelectorAll('button span')
    const copyCountEle = document.getElementById('copyCount')
    let copyCount = 0 ; 

    copyBtns.forEach(function(span){
        if(span.innerText.trim().toLowerCase() === 'copy'){
            span.parentElement.addEventListener('click', function(){
                const card = this.closest('.space-y-3'); 
                const numberElement = card.querySelector('h3.font-bold.text-2xl');
                const numberToCopy = numberElement.innerText.trim();

                navigator.clipboard.writeText(numberToCopy).then(function(){
                    alert( 'this hotline number is copied' + ' ' + numberToCopy);
                    copyCount++ ;
                    copyCountEle.innerText = copyCount;     
                })
            })
        }
    })

})