var wms_layers = [];

var format_FAMARENA_0 = new ol.format.GeoJSON();
var features_FAMARENA_0 = format_FAMARENA_0.readFeatures(json_FAMARENA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FAMARENA_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAMARENA_0.addFeatures(features_FAMARENA_0);
var lyr_FAMARENA_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FAMARENA_0, 
                style: style_FAMARENA_0,
                interactive: true,
                title: '<img src="styles/legend/FAMARENA_0.png" /> FAMARENA'
            });
var format_Arboles_1 = new ol.format.GeoJSON();
var features_Arboles_1 = format_Arboles_1.readFeatures(json_Arboles_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arboles_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arboles_1.addFeatures(features_Arboles_1);
var lyr_Arboles_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arboles_1, 
                style: style_Arboles_1,
                interactive: true,
                title: '<img src="styles/legend/Arboles_1.png" /> Arboles'
            });

lyr_FAMARENA_0.setVisible(true);lyr_Arboles_1.setVisible(true);
var layersList = [lyr_FAMARENA_0,lyr_Arboles_1];
lyr_FAMARENA_0.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Arboles_1.set('fieldAliases', {'Especie': 'Especie', 'Altura': 'Altura', 'Diametro': 'Diametro', 'Densidad': 'Densidad', 'Estado_fit': 'Estado_fit', });
lyr_FAMARENA_0.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Arboles_1.set('fieldImages', {'Especie': '', 'Altura': '', 'Diametro': '', 'Densidad': '', 'Estado_fit': '', });
lyr_FAMARENA_0.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Arboles_1.set('fieldLabels', {'Especie': 'header label', 'Altura': 'header label', 'Diametro': 'header label', 'Densidad': 'no label', 'Estado_fit': 'header label', });
lyr_Arboles_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});