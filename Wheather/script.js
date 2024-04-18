let send = document.getElementById("search");
send.addEventListener("click",function(event){
    let displaycity=document.querySelector(".city");
    let city=document.getElementById("input").value;
    displaycity.textContent=city;
    let url= `https://www.meteosource.com/api/v1/free/point?place_id=${city}&sections=current%2Chourly&language=en&units=auto&key=997z5z4it4fkoiorm5vy6uwwej9pfm9b9pvmyiae`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let displaytemperature=document.querySelector(".temperature");
            displaytemperature.textContent=data["current"]["temperature"] + " C";
        })
        .catch(error => {
            console.error('Error :', error);
        });
});