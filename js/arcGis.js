var map
var view
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
            "esri/layers/GraphicsLayer",

            //view
            "esri/views/View"
            

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
            GraphicsLayer,

            //View
            View
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

                ],
            });


        //Create Map
            map = new Map({
                basemap: basemap,//Base de la capa creada para las lineas
                //basemap: "arcgis-topographic" // Basemap layer service
            });

        //Create Map View
            view = new MapView({
                map: map,
                center: [-58.435698,-34.606941], // Longitude, latitude
                zoom: 13, // Zoom level
                container: "viewDiv" // Div element
            });

        });
    }

  function addPoint(){

    //Obtengo los datos del formulario
    const form = document.getElementById("formulario")
    const nombre = form.elements['nombre'].value
    const direccion = form.elements['direccion'].value
    const telefono = form.elements['telefono'].value
    const categoria = form.elements['categoria'].value
    const coordenadasForm = form.elements['coordenadas'].value
    const colorForm = form.elements['color'].value

    //Gestion de coordenadas
    const coordenadas = coordenadasForm.split(',')
    const latitude = coordenadas[0]
    const longitude = coordenadas[1]
   
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
       "esri/layers/GraphicsLayer",
       //PopUp
       "esri/popup/content/FieldsContent"

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
       GraphicsLayer,
       //Popup
       FieldsContent
       ) {

   esriConfig.apiKey = key;


   //Pop up
   const popupTemplate = {
       title: "{Name}",
       content: `<b>Nombre :</b> {Direccion}<br><b>Coordenadas :</b> {Coordenadas}<br><b>Telefono:</b> {Telefono}<br><b>Categoría:</b> {Categoria}<br>`,
   }
   const attributes = {
        Name: nombre,
        Direccion: direccion,
        Coordenadas: coordenadas,
        Telefono : telefono,
        Categoria : categoria
    }
 
   //Para agregar un punto
   const graphicsLayer = new GraphicsLayer();
   map.add(graphicsLayer);

   //Para agregar un punto 
   const point = { //Create a point
       type: "point",
       longitude: longitude,
       latitude: latitude
   };

   var color = [25, 185, 209]
   if(colorForm === 'Azul') color = [18, 16, 158]
   if(colorForm === 'Rojo') color = [181, 32, 9]
   if(colorForm === 'Verde') color = [23, 87, 12]

   console.log(color)


   const simpleMarkerSymbol = {
       type: "simple-marker",
       color: color,  // Orange
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
function click(){
   // Set up a click event handler and retrieve the screen point
    view.on("click", function(event) {
        // the hitTest() checks to see if any graphics in the view
        // intersect the given screen x, y coordinates
        view.hitTest(event)
        .then(getGraphics);
    });
}