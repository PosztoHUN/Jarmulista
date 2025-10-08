window.onload = function (){
    setInterval (function(){
        var date = new Date()
        var displayDate = date.toLocaleDateString();
        document.getElementById('datetime').innerHTML = displayDate + " ";
        document.getElementById('datetime').classList.add(".text-left");
    }, 1000); // 1000 milliseconds = 1 second
} 
 