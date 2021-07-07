ol.proj.get("EPSG:4326").setExtent([110.285541, -6.678683, 111.096320, -6.126085]);
var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_KABUPATENJEPARA_1 = new ol.format.GeoJSON();
var features_KABUPATENJEPARA_1 = format_KABUPATENJEPARA_1.readFeatures(json_KABUPATENJEPARA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KABUPATENJEPARA_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KABUPATENJEPARA_1.addFeatures(features_KABUPATENJEPARA_1);var lyr_KABUPATENJEPARA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KABUPATENJEPARA_1, 
                style: style_KABUPATENJEPARA_1,
                title: '<img src="styles/legend/KABUPATENJEPARA_1.png" /> KABUPATEN JEPARA'
            });var format_kecamatanjepara_2 = new ol.format.GeoJSON();
var features_kecamatanjepara_2 = format_kecamatanjepara_2.readFeatures(json_kecamatanjepara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_kecamatanjepara_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kecamatanjepara_2.addFeatures(features_kecamatanjepara_2);var lyr_kecamatanjepara_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kecamatanjepara_2, 
                style: style_kecamatanjepara_2,
    title: 'kecamatan jepara<br />\
    <img src="styles/legend/kecamatanjepara_2_0.png" />  0.0 - 100.0 <br />\
    <img src="styles/legend/kecamatanjepara_2_1.png" />  100.0 - 150.0 <br />\
    <img src="styles/legend/kecamatanjepara_2_2.png" />  150.0 - 350.0 <br />\
    <img src="styles/legend/kecamatanjepara_2_3.png" />  350.0 - 560.0 <br />\
    <img src="styles/legend/kecamatanjepara_2_4.png" />  560.0 - 630.0 <br />\
    <img src="styles/legend/kecamatanjepara_2_5.png" />  630.0 - 2000.0 <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_KABUPATENJEPARA_1.setVisible(true);lyr_kecamatanjepara_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KABUPATENJEPARA_1,lyr_kecamatanjepara_2];
lyr_KABUPATENJEPARA_1.set('fieldAliases', {'DESA': 'DESA', 'KODE': 'KODE', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROPINSI': 'PROPINSI', 'STATUS_IDT': 'STATUS_IDT', 'STATUS_KOT': 'STATUS_KOT', 'STATUS_HUK': 'STATUS_HUK', 'SUMBER_AIR': 'SUMBER_AIR', 'IDT_94_95': 'IDT_94_95', 'IDT_95_96': 'IDT_95_96', 'KLASIFIKAS': 'KLASIFIKAS', 'TERMASUK_D': 'TERMASUK_D', 'LUAS_WILAY': 'LUAS_WILAY', 'SUMBER_PEN': 'SUMBER_PEN', 'SUB_SEKTOR': 'SUB_SEKTOR', 'KEMATIAN_B': 'KEMATIAN_B', 'KEMATIAN': 'KEMATIAN', 'BANYAKNYA_': 'BANYAKNYA_', });
lyr_kecamatanjepara_2.set('fieldAliases', {'ID': 'ID', 'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'kode_prop': 'kode_prop', 'kode_kab': 'kode_kab', 'Jml_nelaya': 'Jml_nelaya', 'kapal': 'kapal', 'ikan': 'ikan', });
lyr_KABUPATENJEPARA_1.set('fieldImages', {'DESA': 'TextEdit', 'KODE': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROPINSI': 'TextEdit', 'STATUS_IDT': 'TextEdit', 'STATUS_KOT': 'TextEdit', 'STATUS_HUK': 'TextEdit', 'SUMBER_AIR': 'TextEdit', 'IDT_94_95': 'TextEdit', 'IDT_95_96': 'TextEdit', 'KLASIFIKAS': 'TextEdit', 'TERMASUK_D': 'TextEdit', 'LUAS_WILAY': 'TextEdit', 'SUMBER_PEN': 'TextEdit', 'SUB_SEKTOR': 'TextEdit', 'KEMATIAN_B': 'TextEdit', 'KEMATIAN': 'TextEdit', 'BANYAKNYA_': 'TextEdit', });
lyr_kecamatanjepara_2.set('fieldImages', {'ID': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', 'kode_prop': 'TextEdit', 'kode_kab': 'TextEdit', 'Jml_nelaya': 'TextEdit', 'kapal': 'TextEdit', 'ikan': 'TextEdit', });
lyr_KABUPATENJEPARA_1.set('fieldLabels', {'DESA': 'no label', 'KODE': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'PROPINSI': 'no label', 'STATUS_IDT': 'no label', 'STATUS_KOT': 'no label', 'STATUS_HUK': 'no label', 'SUMBER_AIR': 'no label', 'IDT_94_95': 'no label', 'IDT_95_96': 'no label', 'KLASIFIKAS': 'no label', 'TERMASUK_D': 'no label', 'LUAS_WILAY': 'no label', 'SUMBER_PEN': 'no label', 'SUB_SEKTOR': 'no label', 'KEMATIAN_B': 'no label', 'KEMATIAN': 'no label', 'BANYAKNYA_': 'no label', });
lyr_kecamatanjepara_2.set('fieldLabels', {'ID': 'no label', 'ID_Kec': 'no label', 'Kecamatan': 'inline label', 'xcoord': 'no label', 'ycoord': 'no label', 'kode_prop': 'no label', 'kode_kab': 'no label', 'Jml_nelaya': 'inline label', 'kapal': 'no label', 'ikan': 'no label', });
lyr_kecamatanjepara_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});