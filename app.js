window.addEventListener('load',()=>
{
    let long;
    let lat;

    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position=>{
            long=position.coords.longitude;
            lat=postion.coords.latitude;
            
            const proxy='https://cors-anywhere.heroku.com/'
            const api=`https://api.darksky.net/forecast/c23b7e07bc7a9bbe0f187be1473a5105/${lat},${long}`;
            fetch(api)
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                console.log(data);
            });
        // else{
        //     h1.textContent="hey this is not working, reload the page and allow the popup to so that it can find the location properly"
        
        });
    }

});