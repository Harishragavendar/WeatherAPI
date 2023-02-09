function displayresult() {
    var city = document.getElementById("city").value;
    var apikey='be1a921251cf6d7535544ea0369fe723';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city 
    + '&appid='+apikey+'&units=metric')
        .then(response => response.json())
        .then(data => {
            var t = data['main']['temp']
            var x = data['weather'][0]['main']
            document.getElementById("output").innerHTML=t;
            document.getElementById("output1").innerHTML=x;
        })
}