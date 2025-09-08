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




