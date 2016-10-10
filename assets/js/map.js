function initMap() {

  var mapZoom = $('#map').data('zoom');
  var mapLat = $('#map').data('latitude');
  var mapLng = $('#map').data('longitude');
  var markerLabel  =$('#map').data('marker');
  var map = null;
  var styles = [{
    "featureType": "landscape",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "lightness": 65
        },
        {
            "visibility": "on"
        }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "lightness": 51
        },
        {
            "visibility": "simplified"
        }
    ]
  },
  {
    "featureType": "road.highway",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "visibility": "simplified"
        }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "lightness": 30
        },
        {
            "visibility": "on"
        }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "lightness": 40
        },
        {
            "visibility": "on"
        }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "visibility": "simplified"
        }
    ]
  },
  {
    "featureType": "administrative.province",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels",
    "stylers": [
        {
            "visibility": "on"
        },
        {
            "lightness": -25
        },
        {
            "saturation": -100
        }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
        {
            "hue": "#ffff00"
        },
        {
            "lightness": -25
        },
        {
            "saturation": -97
        }
    ]
  }
];

  var mapDiv = document.getElementById("map");
  var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
  var mapOptions = {
    zoom: mapZoom,
    center: new google.maps.LatLng(mapLat, mapLng),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(mapDiv, mapOptions);

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  google.maps.event.addListener(map, 'click', function(event)
  {
    addMarker(event.latLng, map);
  });

  addMarker({ lat: mapLat, lng: mapLng }, map);

  function addMarker (location, map)
  {

    var markerIcon = {
      path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
      fillColor: '#E31E1E',
      fillOpacity: 0.8,
      scale: 1,
      strokeColor: '#850B0B',
      strokeWeight: 8
    };

    var markerImage = {
      url: "http://www.jamesdoe.com/favicon-152.png",
      scaledSize : new google.maps.Size(50, 50),
    };

    marker = new google.maps.Marker({
      map: map,
      draggable: false,
      position: location,
      //label: markerLabel,
      icon: markerImage
      //animation: google.maps.Animation.DROP,
    });

    marker.addListener('click', toggleBounce);
  }

  function toggleBounce ()
  {
    if (null !== marker.getAnimation()) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

}
