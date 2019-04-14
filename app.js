window.addEventListener('load',()=>
{
    let long;
    let lat;
    let temperatureDescription=document.querySelector('.temperature-description');
    let temperatureDegree=document.querySelector('.temperature-description');
    //let locationTimeZone=documennt.querySelector('.location-timezone')

    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
            
            const proxy='https://cors-anywhere.heroku.com/'
            const api=`${proxy}https://api.darksky.net/forecast/c23b7e07bc7a9bbe0f187be1473a5105/${lat},${long}`;
            fetch(api)
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                console.log(data);
                const{temperature,summary}=data.currently;
                temperatureDegree.textContent=temperature;
            });
        // else{
        //     h1.textContent="hey this is not working, reload the page and allow the popup to so that it can find the location properly"
        
        });
    }

});