window.addEventListener('load',()=>
{
    let long;
    let lat;

    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position=>{
            long=position.coords.longitude
            lat=postion.coords.latitude;
        })

    }else{
        h1.textContent="hey this is not working, reload the page and allow the popup to so that it can find the location properly"
    }

});