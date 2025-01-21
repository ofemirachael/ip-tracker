var api_key = 'at_QZ9kkki6SYlESA8DFhuIc5UxSK9z7';

let ipcontentcity = document.querySelector("#ipcontentcity");
let ipcity = document.querySelector("#ipcity");
let ipzipcode = document.querySelector("#ipzipcode");



var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var mapIcon = L.icon({
    iconUrl: './images/icon-location.svg',

    iconSize:     [24, 24], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([51.5, -0.09], {icon: mapIcon}).addTo(map);


//get form response.
let ipsubmitbtn  = document.querySelector("#ipsubmitbtn")

ipsubmitbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let ipfieldinputvalue = document.getElementById("ipfieldinput").value;
    let api_url = `https://geo.ipify.org/api/v2/country?apiKey=${api_key}&ipAddress=${ipfieldinputvalue}`;

   

    let getIpData = async() =>{
        try{
           const response = await fetch(api_url)
            if(response.ok){
                const data = await response.json();
                console.log(data);
                ipcontentcity.textContent = data.ip;
                ipcity.textContent = `${data.location.region},`;
            }

        }catch(e){
            console.error('Error fetching API:', error);
        }
        
    }
    

    getIpData()

 })