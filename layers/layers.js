ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32629").setExtent([-356220.230382, 780593.516213, 756657.912895, 1422272.761219]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LimiteRgions_2 = new ol.format.GeoJSON();
var features_LimiteRgions_2 = format_LimiteRgions_2.readFeatures(json_LimiteRgions_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32629'});
var jsonSource_LimiteRgions_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteRgions_2.addFeatures(features_LimiteRgions_2);
var lyr_LimiteRgions_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteRgions_2, 
                style: style_LimiteRgions_2,
                interactive: true,
                title: '<img src="styles/legend/LimiteRgions_2.png" /> Limite Régions'
            });
var format_AIRESPROTEGES_3 = new ol.format.GeoJSON();
var features_AIRESPROTEGES_3 = format_AIRESPROTEGES_3.readFeatures(json_AIRESPROTEGES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32629'});
var jsonSource_AIRESPROTEGES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIRESPROTEGES_3.addFeatures(features_AIRESPROTEGES_3);
var lyr_AIRESPROTEGES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AIRESPROTEGES_3, 
                style: style_AIRESPROTEGES_3,
                interactive: true,
    title: 'AIRES PROTEGES<br />\
    <img src="styles/legend/AIRESPROTEGES_3_0.png" /> Parc National<br />\
    <img src="styles/legend/AIRESPROTEGES_3_1.png" /> Reserve Biosphere<br />\
    <img src="styles/legend/AIRESPROTEGES_3_2.png" /> Reserve de faune<br />\
    <img src="styles/legend/AIRESPROTEGES_3_3.png" /> Site Ramsar<br />\
    <img src="styles/legend/AIRESPROTEGES_3_4.png" /> ZICOB<br />\
    <img src="styles/legend/AIRESPROTEGES_3_5.png" /> Foret classee<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_LimiteRgions_2.setVisible(true);lyr_AIRESPROTEGES_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_LimiteRgions_2,lyr_AIRESPROTEGES_3];
lyr_LimiteRgions_2.set('fieldAliases', {'NAME_1': 'NAME_1', });
lyr_AIRESPROTEGES_3.set('fieldAliases', {'Label': 'Label', 'TYPE': 'TYPE', 'Area_Km²': 'Area_Km²', });
lyr_LimiteRgions_2.set('fieldImages', {'NAME_1': 'TextEdit', });
lyr_AIRESPROTEGES_3.set('fieldImages', {'Label': 'TextEdit', 'TYPE': 'TextEdit', 'Area_Km²': 'TextEdit', });
lyr_LimiteRgions_2.set('fieldLabels', {'NAME_1': 'no label', });
lyr_AIRESPROTEGES_3.set('fieldLabels', {'Label': 'no label', 'TYPE': 'no label', 'Area_Km²': 'no label', });
lyr_AIRESPROTEGES_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});