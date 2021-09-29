window.onload = function(){

    var map;
    
    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-23.457216,-46.678269),
            scrollWheel:false,
            zoom:16,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    function addMarker(lat,long,icon,content){
        var LatLng = {'lat':lat,'lng':long};

        var marker = new google.maps.Marker({
            position:LatLng,
            map:map,
            icon:icon
        });

        var infoWindow = new google.maps.infoWindow({
            content:content,
            maxWidth:200,
            pixelOffset:new google.maps.Size(0,20)
        });

        infoWindow.opon(map,marker);
    }

    initialize();

    var conteudo = '<p style="color:black;font-size:13px;padding:10px 0;border-botton:1px solid black">Meu endereço</p>'
    addMarker(-23.457216,-46.678269,'',conteudo);
}



