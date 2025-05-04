var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Caytuyetsonphihong_1 = new ol.format.GeoJSON();
var features_Caytuyetsonphihong_1 = format_Caytuyetsonphihong_1.readFeatures(json_Caytuyetsonphihong_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caytuyetsonphihong_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caytuyetsonphihong_1.addFeatures(features_Caytuyetsonphihong_1);
var lyr_Caytuyetsonphihong_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caytuyetsonphihong_1, 
                style: style_Caytuyetsonphihong_1,
                popuplayertitle: "Caytuyetsonphihong",
                interactive: true,
                title: '<img src="styles/legend/Caytuyetsonphihong_1.png" /> Caytuyetsonphihong'
            });
var format_Caytrucvang_2 = new ol.format.GeoJSON();
var features_Caytrucvang_2 = format_Caytrucvang_2.readFeatures(json_Caytrucvang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caytrucvang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caytrucvang_2.addFeatures(features_Caytrucvang_2);
var lyr_Caytrucvang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caytrucvang_2, 
                style: style_Caytrucvang_2,
                popuplayertitle: "Caytrucvang",
                interactive: true,
                title: '<img src="styles/legend/Caytrucvang_2.png" /> Caytrucvang'
            });
var format_Caysi_3 = new ol.format.GeoJSON();
var features_Caysi_3 = format_Caysi_3.readFeatures(json_Caysi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caysi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caysi_3.addFeatures(features_Caysi_3);
var lyr_Caysi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caysi_3, 
                style: style_Caysi_3,
                popuplayertitle: "Caysi",
                interactive: true,
                title: '<img src="styles/legend/Caysi_3.png" /> Caysi'
            });
var format_Cayphuongvi_4 = new ol.format.GeoJSON();
var features_Cayphuongvi_4 = format_Cayphuongvi_4.readFeatures(json_Cayphuongvi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cayphuongvi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cayphuongvi_4.addFeatures(features_Cayphuongvi_4);
var lyr_Cayphuongvi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cayphuongvi_4, 
                style: style_Cayphuongvi_4,
                popuplayertitle: "Cayphuongvi",
                interactive: true,
                title: '<img src="styles/legend/Cayphuongvi_4.png" /> Cayphuongvi'
            });
var format_phuongphucuong_5 = new ol.format.GeoJSON();
var features_phuongphucuong_5 = format_phuongphucuong_5.readFeatures(json_phuongphucuong_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_phuongphucuong_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_phuongphucuong_5.addFeatures(features_phuongphucuong_5);
var lyr_phuongphucuong_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_phuongphucuong_5, 
                style: style_phuongphucuong_5,
                popuplayertitle: "phuongphucuong",
                interactive: true,
                title: '<img src="styles/legend/phuongphucuong_5.png" /> phuongphucuong'
            });
var format_ranhgioi_6 = new ol.format.GeoJSON();
var features_ranhgioi_6 = format_ranhgioi_6.readFeatures(json_ranhgioi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ranhgioi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ranhgioi_6.addFeatures(features_ranhgioi_6);
var lyr_ranhgioi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ranhgioi_6, 
                style: style_ranhgioi_6,
                popuplayertitle: "ranhgioi",
                interactive: true,
                title: '<img src="styles/legend/ranhgioi_6.png" /> ranhgioi'
            });
var format_Caymochuong_7 = new ol.format.GeoJSON();
var features_Caymochuong_7 = format_Caymochuong_7.readFeatures(json_Caymochuong_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caymochuong_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caymochuong_7.addFeatures(features_Caymochuong_7);
var lyr_Caymochuong_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caymochuong_7, 
                style: style_Caymochuong_7,
                popuplayertitle: "Caymochuong",
                interactive: true,
                title: '<img src="styles/legend/Caymochuong_7.png" /> Caymochuong'
            });
var format_Caymaichieuthuy_8 = new ol.format.GeoJSON();
var features_Caymaichieuthuy_8 = format_Caymaichieuthuy_8.readFeatures(json_Caymaichieuthuy_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caymaichieuthuy_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caymaichieuthuy_8.addFeatures(features_Caymaichieuthuy_8);
var lyr_Caymaichieuthuy_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caymaichieuthuy_8, 
                style: style_Caymaichieuthuy_8,
                popuplayertitle: "Caymaichieuthuy",
                interactive: true,
                title: '<img src="styles/legend/Caymaichieuthuy_8.png" /> Caymaichieuthuy'
            });
var format_Caylocvung_9 = new ol.format.GeoJSON();
var features_Caylocvung_9 = format_Caylocvung_9.readFeatures(json_Caylocvung_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caylocvung_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caylocvung_9.addFeatures(features_Caylocvung_9);
var lyr_Caylocvung_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caylocvung_9, 
                style: style_Caylocvung_9,
                popuplayertitle: "Caylocvung",
                interactive: true,
                title: '<img src="styles/legend/Caylocvung_9.png" /> Caylocvung'
            });
var format_Caylimxet_10 = new ol.format.GeoJSON();
var features_Caylimxet_10 = format_Caylimxet_10.readFeatures(json_Caylimxet_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caylimxet_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caylimxet_10.addFeatures(features_Caylimxet_10);
var lyr_Caylimxet_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caylimxet_10, 
                style: style_Caylimxet_10,
                popuplayertitle: "Caylimxet",
                interactive: true,
                title: '<img src="styles/legend/Caylimxet_10.png" /> Caylimxet'
            });
var format_Caylieu_11 = new ol.format.GeoJSON();
var features_Caylieu_11 = format_Caylieu_11.readFeatures(json_Caylieu_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caylieu_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caylieu_11.addFeatures(features_Caylieu_11);
var lyr_Caylieu_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caylieu_11, 
                style: style_Caylieu_11,
                popuplayertitle: "Caylieu",
                interactive: true,
                title: '<img src="styles/legend/Caylieu_11.png" /> Caylieu'
            });
var format_Caykebac_12 = new ol.format.GeoJSON();
var features_Caykebac_12 = format_Caykebac_12.readFeatures(json_Caykebac_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caykebac_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caykebac_12.addFeatures(features_Caykebac_12);
var lyr_Caykebac_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caykebac_12, 
                style: style_Caykebac_12,
                popuplayertitle: "Caykebac",
                interactive: true,
                title: '<img src="styles/legend/Caykebac_12.png" /> Caykebac'
            });
var format_Cayhoasu_13 = new ol.format.GeoJSON();
var features_Cayhoasu_13 = format_Cayhoasu_13.readFeatures(json_Cayhoasu_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cayhoasu_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cayhoasu_13.addFeatures(features_Cayhoasu_13);
var lyr_Cayhoasu_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cayhoasu_13, 
                style: style_Cayhoasu_13,
                popuplayertitle: "Cayhoasu",
                interactive: true,
                title: '<img src="styles/legend/Cayhoasu_13.png" /> Cayhoasu'
            });
var format_Cayhoamongbo_14 = new ol.format.GeoJSON();
var features_Cayhoamongbo_14 = format_Cayhoamongbo_14.readFeatures(json_Cayhoamongbo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cayhoamongbo_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cayhoamongbo_14.addFeatures(features_Cayhoamongbo_14);
var lyr_Cayhoamongbo_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cayhoamongbo_14, 
                style: style_Cayhoamongbo_14,
                popuplayertitle: "Cayhoamongbo",
                interactive: true,
                title: '<img src="styles/legend/Cayhoamongbo_14.png" /> Cayhoamongbo'
            });
var format_Cayhoamai_15 = new ol.format.GeoJSON();
var features_Cayhoamai_15 = format_Cayhoamai_15.readFeatures(json_Cayhoamai_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cayhoamai_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cayhoamai_15.addFeatures(features_Cayhoamai_15);
var lyr_Cayhoamai_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cayhoamai_15, 
                style: style_Cayhoamai_15,
                popuplayertitle: "Cayhoamai",
                interactive: true,
                title: '<img src="styles/legend/Cayhoamai_15.png" /> Cayhoamai'
            });
var format_Cayhoahuynhanh_16 = new ol.format.GeoJSON();
var features_Cayhoahuynhanh_16 = format_Cayhoahuynhanh_16.readFeatures(json_Cayhoahuynhanh_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cayhoahuynhanh_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cayhoahuynhanh_16.addFeatures(features_Cayhoahuynhanh_16);
var lyr_Cayhoahuynhanh_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cayhoahuynhanh_16, 
                style: style_Cayhoahuynhanh_16,
                popuplayertitle: "Cayhoahuynhanh",
                interactive: true,
                title: '<img src="styles/legend/Cayhoahuynhanh_16.png" /> Cayhoahuynhanh'
            });
var format_Cayhoagiay_17 = new ol.format.GeoJSON();
var features_Cayhoagiay_17 = format_Cayhoagiay_17.readFeatures(json_Cayhoagiay_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cayhoagiay_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cayhoagiay_17.addFeatures(features_Cayhoagiay_17);
var lyr_Cayhoagiay_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cayhoagiay_17, 
                style: style_Cayhoagiay_17,
                popuplayertitle: "Cayhoagiay",
                interactive: true,
                title: '<img src="styles/legend/Cayhoagiay_17.png" /> Cayhoagiay'
            });
var format_Cayhoabanglang_18 = new ol.format.GeoJSON();
var features_Cayhoabanglang_18 = format_Cayhoabanglang_18.readFeatures(json_Cayhoabanglang_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cayhoabanglang_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cayhoabanglang_18.addFeatures(features_Cayhoabanglang_18);
var lyr_Cayhoabanglang_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cayhoabanglang_18, 
                style: style_Cayhoabanglang_18,
                popuplayertitle: "Cayhoabanglang",
                interactive: true,
                title: '<img src="styles/legend/Cayhoabanglang_18.png" /> Cayhoabanglang'
            });
var format_Caygianghuong_19 = new ol.format.GeoJSON();
var features_Caygianghuong_19 = format_Caygianghuong_19.readFeatures(json_Caygianghuong_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caygianghuong_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caygianghuong_19.addFeatures(features_Caygianghuong_19);
var lyr_Caygianghuong_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caygianghuong_19, 
                style: style_Caygianghuong_19,
                popuplayertitle: "Caygianghuong",
                interactive: true,
                title: '<img src="styles/legend/Caygianghuong_19.png" /> Caygianghuong'
            });
var format_Caydua_20 = new ol.format.GeoJSON();
var features_Caydua_20 = format_Caydua_20.readFeatures(json_Caydua_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caydua_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caydua_20.addFeatures(features_Caydua_20);
var lyr_Caydua_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caydua_20, 
                style: style_Caydua_20,
                popuplayertitle: "Caydua",
                interactive: true,
                title: '<img src="styles/legend/Caydua_20.png" /> Caydua'
            });
var format_Caydonghau_21 = new ol.format.GeoJSON();
var features_Caydonghau_21 = format_Caydonghau_21.readFeatures(json_Caydonghau_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caydonghau_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caydonghau_21.addFeatures(features_Caydonghau_21);
var lyr_Caydonghau_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caydonghau_21, 
                style: style_Caydonghau_21,
                popuplayertitle: "Caydonghau",
                interactive: true,
                title: '<img src="styles/legend/Caydonghau_21.png" /> Caydonghau'
            });
var format_Caydaurai_22 = new ol.format.GeoJSON();
var features_Caydaurai_22 = format_Caydaurai_22.readFeatures(json_Caydaurai_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caydaurai_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caydaurai_22.addFeatures(features_Caydaurai_22);
var lyr_Caydaurai_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caydaurai_22, 
                style: style_Caydaurai_22,
                popuplayertitle: "Caydaurai",
                interactive: true,
                title: '<img src="styles/legend/Caydaurai_22.png" /> Caydaurai'
            });
var format_Caydabupdo_23 = new ol.format.GeoJSON();
var features_Caydabupdo_23 = format_Caydabupdo_23.readFeatures(json_Caydabupdo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caydabupdo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caydabupdo_23.addFeatures(features_Caydabupdo_23);
var lyr_Caydabupdo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caydabupdo_23, 
                style: style_Caydabupdo_23,
                popuplayertitle: "Caydabupdo",
                interactive: true,
                title: '<img src="styles/legend/Caydabupdo_23.png" /> Caydabupdo'
            });
var format_Caycota_24 = new ol.format.GeoJSON();
var features_Caycota_24 = format_Caycota_24.readFeatures(json_Caycota_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caycota_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caycota_24.addFeatures(features_Caycota_24);
var lyr_Caycota_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caycota_24, 
                style: style_Caycota_24,
                popuplayertitle: "Caycota",
                interactive: true,
                title: '<img src="styles/legend/Caycota_24.png" /> Caycota'
            });
var format_Caycodau_25 = new ol.format.GeoJSON();
var features_Caycodau_25 = format_Caycodau_25.readFeatures(json_Caycodau_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caycodau_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caycodau_25.addFeatures(features_Caycodau_25);
var lyr_Caycodau_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caycodau_25, 
                style: style_Caycodau_25,
                popuplayertitle: "Caycodau",
                interactive: true,
                title: '<img src="styles/legend/Caycodau_25.png" /> Caycodau'
            });
var format_Caychuongvang_26 = new ol.format.GeoJSON();
var features_Caychuongvang_26 = format_Caychuongvang_26.readFeatures(json_Caychuongvang_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caychuongvang_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caychuongvang_26.addFeatures(features_Caychuongvang_26);
var lyr_Caychuongvang_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caychuongvang_26, 
                style: style_Caychuongvang_26,
                popuplayertitle: "Caychuongvang",
                interactive: true,
                title: '<img src="styles/legend/Caychuongvang_26.png" /> Caychuongvang'
            });
var format_Caychuoi_27 = new ol.format.GeoJSON();
var features_Caychuoi_27 = format_Caychuoi_27.readFeatures(json_Caychuoi_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caychuoi_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caychuoi_27.addFeatures(features_Caychuoi_27);
var lyr_Caychuoi_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caychuoi_27, 
                style: style_Caychuoi_27,
                popuplayertitle: "Caychuoi",
                interactive: true,
                title: '<img src="styles/legend/Caychuoi_27.png" /> Caychuoi'
            });
var format_Caycauduoichon_28 = new ol.format.GeoJSON();
var features_Caycauduoichon_28 = format_Caycauduoichon_28.readFeatures(json_Caycauduoichon_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caycauduoichon_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caycauduoichon_28.addFeatures(features_Caycauduoichon_28);
var lyr_Caycauduoichon_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caycauduoichon_28, 
                style: style_Caycauduoichon_28,
                popuplayertitle: "Caycauduoichon",
                interactive: true,
                title: '<img src="styles/legend/Caycauduoichon_28.png" /> Caycauduoichon'
            });
var format_Caybongtrang_29 = new ol.format.GeoJSON();
var features_Caybongtrang_29 = format_Caybongtrang_29.readFeatures(json_Caybongtrang_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caybongtrang_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caybongtrang_29.addFeatures(features_Caybongtrang_29);
var lyr_Caybongtrang_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caybongtrang_29, 
                style: style_Caybongtrang_29,
                popuplayertitle: "Caybongtrang",
                interactive: true,
                title: '<img src="styles/legend/Caybongtrang_29.png" /> Caybongtrang'
            });
var format_Caybanglangse_30 = new ol.format.GeoJSON();
var features_Caybanglangse_30 = format_Caybanglangse_30.readFeatures(json_Caybanglangse_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caybanglangse_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caybanglangse_30.addFeatures(features_Caybanglangse_30);
var lyr_Caybanglangse_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caybanglangse_30, 
                style: style_Caybanglangse_30,
                popuplayertitle: "Caybanglangse",
                interactive: true,
                title: '<img src="styles/legend/Caybanglangse_30.png" /> Caybanglangse'
            });
var format_Caybangdailoan_31 = new ol.format.GeoJSON();
var features_Caybangdailoan_31 = format_Caybangdailoan_31.readFeatures(json_Caybangdailoan_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caybangdailoan_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caybangdailoan_31.addFeatures(features_Caybangdailoan_31);
var lyr_Caybangdailoan_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caybangdailoan_31, 
                style: style_Caybangdailoan_31,
                popuplayertitle: "Caybangdailoan",
                interactive: true,
                title: '<img src="styles/legend/Caybangdailoan_31.png" /> Caybangdailoan'
            });
var format_Buicaykimdongvang_32 = new ol.format.GeoJSON();
var features_Buicaykimdongvang_32 = format_Buicaykimdongvang_32.readFeatures(json_Buicaykimdongvang_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buicaykimdongvang_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buicaykimdongvang_32.addFeatures(features_Buicaykimdongvang_32);
var lyr_Buicaykimdongvang_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buicaykimdongvang_32, 
                style: style_Buicaykimdongvang_32,
                popuplayertitle: "Buicaykimdongvang",
                interactive: true,
                title: '<img src="styles/legend/Buicaykimdongvang_32.png" /> Buicaykimdongvang'
            });
var format_Buicaybachtrinhbien_33 = new ol.format.GeoJSON();
var features_Buicaybachtrinhbien_33 = format_Buicaybachtrinhbien_33.readFeatures(json_Buicaybachtrinhbien_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buicaybachtrinhbien_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buicaybachtrinhbien_33.addFeatures(features_Buicaybachtrinhbien_33);
var lyr_Buicaybachtrinhbien_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buicaybachtrinhbien_33, 
                style: style_Buicaybachtrinhbien_33,
                popuplayertitle: "Buicaybachtrinhbien",
                interactive: true,
                title: '<img src="styles/legend/Buicaybachtrinhbien_33.png" /> Buicaybachtrinhbien'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Caytuyetsonphihong_1.setVisible(true);lyr_Caytrucvang_2.setVisible(true);lyr_Caysi_3.setVisible(true);lyr_Cayphuongvi_4.setVisible(true);lyr_phuongphucuong_5.setVisible(true);lyr_ranhgioi_6.setVisible(true);lyr_Caymochuong_7.setVisible(true);lyr_Caymaichieuthuy_8.setVisible(true);lyr_Caylocvung_9.setVisible(true);lyr_Caylimxet_10.setVisible(true);lyr_Caylieu_11.setVisible(true);lyr_Caykebac_12.setVisible(true);lyr_Cayhoasu_13.setVisible(true);lyr_Cayhoamongbo_14.setVisible(true);lyr_Cayhoamai_15.setVisible(true);lyr_Cayhoahuynhanh_16.setVisible(true);lyr_Cayhoagiay_17.setVisible(true);lyr_Cayhoabanglang_18.setVisible(true);lyr_Caygianghuong_19.setVisible(true);lyr_Caydua_20.setVisible(true);lyr_Caydonghau_21.setVisible(true);lyr_Caydaurai_22.setVisible(true);lyr_Caydabupdo_23.setVisible(true);lyr_Caycota_24.setVisible(true);lyr_Caycodau_25.setVisible(true);lyr_Caychuongvang_26.setVisible(true);lyr_Caychuoi_27.setVisible(true);lyr_Caycauduoichon_28.setVisible(true);lyr_Caybongtrang_29.setVisible(true);lyr_Caybanglangse_30.setVisible(true);lyr_Caybangdailoan_31.setVisible(true);lyr_Buicaykimdongvang_32.setVisible(true);lyr_Buicaybachtrinhbien_33.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Caytuyetsonphihong_1,lyr_Caytrucvang_2,lyr_Caysi_3,lyr_Cayphuongvi_4,lyr_phuongphucuong_5,lyr_ranhgioi_6,lyr_Caymochuong_7,lyr_Caymaichieuthuy_8,lyr_Caylocvung_9,lyr_Caylimxet_10,lyr_Caylieu_11,lyr_Caykebac_12,lyr_Cayhoasu_13,lyr_Cayhoamongbo_14,lyr_Cayhoamai_15,lyr_Cayhoahuynhanh_16,lyr_Cayhoagiay_17,lyr_Cayhoabanglang_18,lyr_Caygianghuong_19,lyr_Caydua_20,lyr_Caydonghau_21,lyr_Caydaurai_22,lyr_Caydabupdo_23,lyr_Caycota_24,lyr_Caycodau_25,lyr_Caychuongvang_26,lyr_Caychuoi_27,lyr_Caycauduoichon_28,lyr_Caybongtrang_29,lyr_Caybanglangse_30,lyr_Caybangdailoan_31,lyr_Buicaykimdongvang_32,lyr_Buicaybachtrinhbien_33];
lyr_Caytuyetsonphihong_1.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caytrucvang_2.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caysi_3.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Cayphuongvi_4.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_phuongphucuong_5.set('fieldAliases', {'fid': 'fid', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', });
lyr_ranhgioi_6.set('fieldAliases', {'id': 'id', 'ranhgioi': 'ranhgioi', });
lyr_Caymochuong_7.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caymaichieuthuy_8.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caylocvung_9.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caylimxet_10.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caylieu_11.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caykebac_12.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Cayhoasu_13.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Cayhoamongbo_14.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Cayhoamai_15.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Cayhoahuynhanh_16.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Cayhoagiay_17.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Cayhoabanglang_18.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caygianghuong_19.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caydua_20.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caydonghau_21.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caydaurai_22.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caydabupdo_23.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caycota_24.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caycodau_25.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caychuongvang_26.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caychuoi_27.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caycauduoichon_28.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caybongtrang_29.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caybanglangse_30.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caybangdailoan_31.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Buicaykimdongvang_32.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Buicaybachtrinhbien_33.set('fieldAliases', {'STT': 'STT', 'Ten cay': 'Ten cay', 'X': 'X', 'Y': 'Y', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Nguon goc xuat su': 'Nguon goc xuat su', });
lyr_Caytuyetsonphihong_1.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caytrucvang_2.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caysi_3.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Cayphuongvi_4.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_phuongphucuong_5.set('fieldImages', {'fid': 'TextEdit', 'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'ID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', });
lyr_ranhgioi_6.set('fieldImages', {'id': 'TextEdit', 'ranhgioi': 'TextEdit', });
lyr_Caymochuong_7.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caymaichieuthuy_8.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caylocvung_9.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caylimxet_10.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caylieu_11.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caykebac_12.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Cayhoasu_13.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Cayhoamongbo_14.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Cayhoamai_15.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Cayhoahuynhanh_16.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Cayhoagiay_17.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Cayhoabanglang_18.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caygianghuong_19.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caydua_20.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caydonghau_21.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caydaurai_22.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caydabupdo_23.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caycota_24.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caycodau_25.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caychuongvang_26.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caychuoi_27.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caycauduoichon_28.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caybongtrang_29.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caybanglangse_30.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caybangdailoan_31.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Buicaykimdongvang_32.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Buicaybachtrinhbien_33.set('fieldImages', {'STT': '', 'Ten cay': '', 'X': '', 'Y': '', 'Chu vi (cm)': '', 'Chieu cao (m)': '', 'Duong kinh (cm)': '', 'Ten khoa hoc': '', 'Gioi': '', 'Bo': '', 'Ho': '', 'Chi': '', 'Loai': '', 'Nguon goc xuat su': '', });
lyr_Caytuyetsonphihong_1.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caytrucvang_2.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caysi_3.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Cayphuongvi_4.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_phuongphucuong_5.set('fieldLabels', {'fid': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'ID_3': 'no label', 'NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'NL_NAME_3': 'no label', 'VARNAME_3': 'no label', });
lyr_ranhgioi_6.set('fieldLabels', {'id': 'no label', 'ranhgioi': 'no label', });
lyr_Caymochuong_7.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caymaichieuthuy_8.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caylocvung_9.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caylimxet_10.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caylieu_11.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caykebac_12.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Cayhoasu_13.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Cayhoamongbo_14.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Cayhoamai_15.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Cayhoahuynhanh_16.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Cayhoagiay_17.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Cayhoabanglang_18.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caygianghuong_19.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caydua_20.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caydonghau_21.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caydaurai_22.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caydabupdo_23.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caycota_24.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caycodau_25.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caychuongvang_26.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caychuoi_27.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caycauduoichon_28.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caybongtrang_29.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caybanglangse_30.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Caybangdailoan_31.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Buicaykimdongvang_32.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Buicaybachtrinhbien_33.set('fieldLabels', {'STT': 'no label', 'Ten cay': 'no label', 'X': 'no label', 'Y': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Nguon goc xuat su': 'no label', });
lyr_Buicaybachtrinhbien_33.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});