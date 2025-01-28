ampm = document.getElementById('ampm')
function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = padZero(dateTime.getMinutes());
    let sec = padZero(dateTime.getSeconds()); 
    if (hr > 12) {
        ampm.innerHTML = 'PM';
        hr = hr - 12;
    } else if (hr === 12) {
        ampm.innerHTML = 'PM'; // Noon is PM
    } else if (hr === 0) {
        hr = 12; // Midnight is 12:00 AM
        ampm.innerHTML = 'AM';
    } else {
        ampm.innerHTML = 'AM';
    }
    hr = padZero(hr);
    document.getElementById('hours').innerHTML = hr;
    document.getElementById('mins').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;    
}

function padZero(num){
    return num<10?"0"+num:num
}

setInterval(displayTime, 100)