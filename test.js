
function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }
  else{
    
  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);


   
    var text= 'Share this Link: <br><br><a href=https://www.google.co.in/maps/place/' + latitude+ ',' + longitude + '>https://www.google.co.in/maps/place/' + latitude+ ',' + longitude + '</a>';
    output.innerHTML=text;
    //lnk=document.getElementsByTagName('a');
    //lnk[3].setAttribute('target','_blank');
    var button='<font size="6px"><b>SHARE</b></font>'
    var share=document.getElementById('share');
    share.setAttribute('class','header');
    share.innerHTML=button;
    document.getElementById('share').addEventListener('click',shareLocation);
    function shareLocation()
    /*{
      new MozActivity({
        name: 'new',
        data: {
          type: 'websms/sms',
          number:'',
          body: "Hi this is LocateME.To view the the location of your friend Arush open this link<br>"
        }
      });
    }*/
    window.open("sms:?body=Hii this is LocateMe!! Locate Arush Goyal%40 :-%0Ahttps://www.google.co.in/maps/place/"+latitude+','+longitude,"_self");
  }
 function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            output.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            output.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            output.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            output.innerHTML = "An unknown error occurred."
            break;
      }
   } 

  
  output.innerHTML = "<p>Locating...</p>";
  navigator.geolocation.getCurrentPosition(success, showError,{
      enableHighAccuracy : true
    });
  }
}



