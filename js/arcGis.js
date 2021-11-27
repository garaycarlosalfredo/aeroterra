var map

    function mapa(){
    
        require([
            "esri/config",
            "esri/Map", 
            "esri/views/MapView",
            //Modulos para ver las calles
            "esri/Basemap",
            "esri/layers/VectorTileLayer",
            "esri/layers/TileLayer",
            //Para agregar un punto
            "esri/Graphic",
            "esri/layers/GraphicsLayer"
            

        ], function (
            esriConfig,
            Map, 
            MapView,
            //Modulos para ver las calles
            Basemap, 
            VectorTileLayer, 
            TileLayer,
            //Para agregar un punto
            Graphic, 
            GraphicsLayer
            ) {

        esriConfig.apiKey = key;

        //Creo la capa del vector
        const vectorTileLayer = new VectorTileLayer({
            portalItem: {
            id: "6976148c11bd497d8624206f9ee03e30" // Forest and Parks Canvas
            },
            opacity: .75
        });

        //Creo una imagen del vetor 
        const imageTileLayer = new TileLayer({
            portalItem: {
            id: "1b243539f4514b6ba35e7d995890db1d" // World Hillshade
            }
        });

        //Agrego las capas base del mapa
        const basemap = new Basemap({
            baseLayers: [

            imageTileLayer,
            vectorTileLayer

            ]
        });


        //Create Map
        map = new Map({
            basemap: basemap,//Base de la capa creada para las lineas
            //basemap: "arcgis-topographic" // Basemap layer service
        });

        //Create Map View
        const view = new MapView({
            map: map,
            center: [-118.805, 34.027], // Longitude, latitude
            zoom: 13, // Zoom level
            container: "viewDiv" // Div element
        });

        //Pop up
        const popupTemplate = {
            title: "{Name}",
            content: "{Description}"
        }
        const attributes = {
            Name: "Graphic",
            Description: "I am a polygon"
        }

        //Para agregar un punto
        const graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);

        //Para agregar un punto 
        const point = { //Create a point
            type: "point",
            longitude: -118.80657463861,
            latitude: 34.0005930608889
        };
        const simpleMarkerSymbol = {
            type: "simple-marker",
            color: [226, 119, 40],  // Orange
            outline: {
                color: [255, 255, 255], // White
                width: 1
            }
        };

        const pointGraphic = new Graphic({
            geometry: point,
            symbol: simpleMarkerSymbol,
            //Agregar
            attributes: attributes,
            popupTemplate: popupTemplate
        });
        //graphicsLayer.add(pointGraphic);

        });
    }

    function checkPint(e){   
        console.log(e)
        const form = document.getElementById("formulario")
        console.log(form)

        const nombre = form.elements['nombre'].value
        console.log(nombre)
    }

  function addPoint(){
   
    require([
       "esri/config",
       "esri/Map", 
       "esri/views/MapView",
       //Modulos para ver las calles
       "esri/Basemap",
       "esri/layers/VectorTileLayer",
       "esri/layers/TileLayer",
       //Para agregar un punto
       "esri/Graphic",
       "esri/layers/GraphicsLayer"
       

   ], function (
       esriConfig,
       Map, 
       MapView,
       //Modulos para ver las calles
       Basemap, 
       VectorTileLayer, 
       TileLayer,
       //Para agregar un punto
       Graphic, 
       GraphicsLayer
       ) {

   esriConfig.apiKey = key;


  

   //Pop up
   const popupTemplate = {
       title: "{Name}",
       content: "{Description}"
   }
   const attributes = {
       Name: "Graphic",
       Description: "I am a polygon"
   }

   //Para agregar un punto
   const graphicsLayer = new GraphicsLayer();
   map.add(graphicsLayer);

   //Para agregar un punto 
   const point = { //Create a point
       type: "point",
       longitude: -118.80657463861,
       latitude: 34.0005930608889
   };
   const simpleMarkerSymbol = {
       type: "simple-marker",
       color: [226, 119, 40],  // Orange
       outline: {
           color: [255, 255, 255], // White
           width: 1
       }
   };

   const pointGraphic = new Graphic({
       geometry: point,
       symbol: simpleMarkerSymbol,
       //Agregar
       attributes: attributes,
       popupTemplate: popupTemplate
   });
   graphicsLayer.add(pointGraphic);



   

 });
}
/*
function addPoint(){    
    //graphicsLayer.add(pointGraphic);
    
    console.log('MAPA AA',map)
    alert("Click")
}*/