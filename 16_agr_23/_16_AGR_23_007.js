(function ($) {

    var activity_options_default_value = '';


    Drupal.behaviors.agr16 = {
        attach: function (context, settings) {
            jQuery('input.numeric').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });

            jQuery('input.float').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });
        }
    }


})(jQuery)

webform.validators.agr16 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;

    function fun_row_36_001(row) {
        var i;
        i = row;
        if (

            10 == i || 11 == i || 12 == i || 13 == i || 14 == i || 15 == i || 16 == i || 17 == i || 18 == i || 20 == i ||
            30 == i || 40 == i || 50 == i || 60 == i || 61 == i || 62 == i || 63 == i || 70 == i || 80 == i || 81 == i
            || 82 == i || 83 == i || 84 == i || 110 == i || 111 == i || 120 == i || 130 == i || 140 == i || 145 == i
            || 150 == i || 160 == i || 170 == i || 171 == i || 172 == i || 180 == i || 185 == i || 190 == i || 191 == i
            || 192 == i || 194 == i || 195 == i || 196 == i || 197 == i || 198 == i || 200 == i || 205 == i || 210 == i
            || 215 == i || 220 == i || 230 == i || 240 == i
            || 250 == i || 256 == i || 260 == i || 265 == i || 270 == i || 275 == i || 280 == i || 290 == i || 295 == i
            || 300 == i
        )
            return true;

    }

    // Start 36-001
    for (var i = 10; i <= 305; i++) {
        {
            if (i < 85 && fun_row_36_001(i)) {
                if (!isNaN(Number(values["CAP3_R0" + i + "_C3"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C4"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C5"]))
                ) {



                    var col3 = Number(values["CAP3_R0" + i + "_C3"]);
                    var col4 = Number(values["CAP3_R0" + i + "_C4"]);
                    var col5 = Number(values["CAP3_R0" + i + "_C5"]);

                    var SUM_COL4_COL5 = col4 + col5


                    if (col3 < SUM_COL4_COL5) {
                        webform.errors.push({
                            'fieldName': 'CAP3_R0' + i + '_C3',
                            'weight': 1,
                            'msg': Drupal.t('Cod eroare: 36-001 Cap.III, COL3 >= COL(4+5) pe toate rindurile - @col3 <  @SUM_COL4_COL5 ', { "@col3": col3, "@SUM_COL4_COL5": SUM_COL4_COL5 })
                        });
                    }
                }
            }
            else {

                if (i > 85 && fun_row_36_001(i)) {

                    if (!isNaN(Number(values["CAP3_R" + i + "_C3"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C4"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C5"]))
                    ) {



                        var col3 = Number(values["CAP3_R" + i + "_C3"]);
                        var col4 = Number(values["CAP3_R" + i + "_C4"]);
                        var col5 = Number(values["CAP3_R" + i + "_C5"]);

                        var SUM_COL4_COL5 = col4 + col5


                        if (col3 < SUM_COL4_COL5) {
                            webform.errors.push({
                                'fieldName': 'CAP3_R' + i + '_C3',
                                'weight': 2,
                                'msg': Drupal.t('Cod eroare: 36-001 Cap.III, COL3 >= COL(4+5) pe toate rindurile - @col3 <  @SUM_COL4_COL5 ', { "@col3": col3, "@SUM_COL4_COL5": SUM_COL4_COL5 })
                            });
                        }
                    }
                }



            }






        }
    }

    //End 36-001




    // Start 36-002
    for (var i = 10; i <= 305; i++) {
        {
            if (i < 85 && fun_row_36_001(i)) {
                if (

                    !isNaN(Number(values["CAP3_R0" + i + "_C6"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C7"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C8"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C9"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C10"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C14"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C15"]))


                ) {



                    var col6 = Number(values["CAP3_R0" + i + "_C6"]);
                    var col7 = Number(values["CAP3_R0" + i + "_C7"]);
                    var col8 = Number(values["CAP3_R0" + i + "_C8"]);
                    var col9 = Number(values["CAP3_R0" + i + "_C9"]);
                    var col10 = Number(values["CAP3_R0" + i + "_C10"]);
                    var col14 = Number(values["CAP3_R0" + i + "_C14"]);
                    var col15 = Number(values["CAP3_R0" + i + "_C15"]);

                    var SUM_36_002 = col7 + col8 + col9 + col10 + col14 + col15


                    if (col6 < SUM_36_002) {
                        webform.errors.push({
                            'fieldName': 'CAP3_R0' + i + '_C6',
                            'weight': 3,
                            'msg': Drupal.t('Cod eroare: 36-002 Cap.III, COL6 >= COL(7+8+9+10+14+15) pe toate rindurile - @col6 <  @SUM_36_002 ', { "@col6": col6, "@SUM_36_002": SUM_COL4_COL5 })
                        });
                    }
                }
            }
            else {

                if (i > 85 && fun_row_36_001(i)) {

                    if (

                        !isNaN(Number(values["CAP3_R" + i + "_C6"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C7"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C8"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C9"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C10"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C14"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C15"]))


                    ) {



                        var col6 = Number(values["CAP3_R" + i + "_C6"]);
                        var col7 = Number(values["CAP3_R" + i + "_C7"]);
                        var col8 = Number(values["CAP3_R" + i + "_C8"]);
                        var col9 = Number(values["CAP3_R" + i + "_C9"]);
                        var col10 = Number(values["CAP3_R" + i + "_C10"]);
                        var col14 = Number(values["CAP3_R" + i + "_C14"]);
                        var col15 = Number(values["CAP3_R" + i + "_C15"]);

                        var SUM_36_002 = col7 + col8 + col9 + col10 + col14 + col15


                        if (col6 < SUM_36_002) {
                            webform.errors.push({
                                'fieldName': 'CAP3_R' + i + '_C6',
                                'weight': 4,
                                'msg': Drupal.t('Cod eroare: 36-002 Cap.III, COL6 >= COL(7+8+9+10+14+15) pe toate rindurile - @col6 <  @SUM_36_002 ', { "@col6": col6, "@SUM_36_002": SUM_36_002 })
                            });
                        }
                    }
                }



            }






        }
    }

    //End 36-002



    // Start 36-003
    for (var i = 10; i <= 305; i++) {
        {
            if (i < 85 && fun_row_36_001(i)) {
                if (

                    !isNaN(Number(values["CAP3_R0" + i + "_C10"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C11"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C12"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C13"]))



                ) {



                    var col10 = Number(values["CAP3_R0" + i + "_C10"]);
                    var col11 = Number(values["CAP3_R0" + i + "_C11"]);
                    var col12 = Number(values["CAP3_R0" + i + "_C12"]);
                    var col13 = Number(values["CAP3_R0" + i + "_C13"]);


                    var SUM_36_003 = col11 + col12 + col13


                    if (col10 != SUM_36_003) {
                        webform.errors.push({
                            'fieldName': 'CAP3_R0' + i + '_C10',
                            'weight': 5,
                            'msg': Drupal.t('Cod eroare: 36-003 Cap.III, COL10 = COL(11+12+13) pe toate rindurile - @col10 <>  @SUM_36_003 ', { "@col10": col10, "@SUM_36_003": SUM_36_003 })
                        });
                    }
                }
            }
            else {

                if (i > 85 && fun_row_36_001(i)) {

                    if (


                        !isNaN(Number(values["CAP3_R" + i + "_C10"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C11"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C12"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C13"]))


                    ) {



                        var col10 = Number(values["CAP3_R" + i + "_C10"]);
                        var col11 = Number(values["CAP3_R" + i + "_C11"]);
                        var col12 = Number(values["CAP3_R" + i + "_C12"]);
                        var col13 = Number(values["CAP3_R" + i + "_C13"]);


                        var SUM_36_003 = col11 + col12 + col13


                        if (col10 != SUM_36_003) {
                            webform.errors.push({
                                'fieldName': 'CAP3_R' + i + '_C10',
                                'weight': 6,
                                'msg': Drupal.t('Cod eroare: 36-003 Cap.III, COL10 = COL(11+12+13) pe toate rindurile - @col10 <>  @SUM_36_003 ', { "@col10": col10, "@SUM_36_003": SUM_36_003 })
                            });
                        }
                    }
                }



            }






        }
    }

    //End 36-003


    // Start 36-004
    for (var i = 10; i <= 305; i++) {
        {
            if (i < 85 && fun_row_36_001(i)) {
                if (

                    !isNaN(Number(values["CAP3_R0" + i + "_C1"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C2"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C3"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C6"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C16"]))



                ) {



                    var col1 = Number(values["CAP3_R0" + i + "_C1"]);
                    var col2 = Number(values["CAP3_R0" + i + "_C2"]);
                    var col3 = Number(values["CAP3_R0" + i + "_C3"]);
                    var col6 = Number(values["CAP3_R0" + i + "_C6"]);
                    var col16 = Number(values["CAP3_R0" + i + "_C16"]);


                    var SUM_36_004_1 = col1 + col2 + col3
                    var SUM_36_004_2 = col6 + col16

                    if (SUM_36_004_1 < SUM_36_004_2) {
                        webform.errors.push({
                            'fieldName': 'CAP3_R0' + i + '_C1',
                            'weight': 7,
                            'msg': Drupal.t('Cod eroare: 36-004 Cap.III, COL(1+2+3) >= COL(6+16) pe toate rindurile - @SUM_36_004_1 <  @SUM_36_004_2 ', { "@SUM_36_004_1": SUM_36_004_1, "@SUM_36_004_2": SUM_36_004_2 })
                        });
                    }
                }
            }
            else {

                if (i > 85 && fun_row_36_001(i)) {

                    if (



                        !isNaN(Number(values["CAP3_R" + i + "_C1"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C2"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C3"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C6"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C16"]))



                    ) {



                        var col1 = Number(values["CAP3_R" + i + "_C1"]);
                        var col2 = Number(values["CAP3_R" + i + "_C2"]);
                        var col3 = Number(values["CAP3_R" + i + "_C3"]);
                        var col6 = Number(values["CAP3_R" + i + "_C6"]);
                        var col16 = Number(values["CAP3_R" + i + "_C16"]);

                        var SUM_36_004_1 = col1 + col2 + col3
                        var SUM_36_004_2 = col6 + col16


                        if (SUM_36_004_1 < SUM_36_004_2) {
                            webform.errors.push({
                                'fieldName': 'CAP3_R' + i + '_C1',
                                'weight': 8,
                                'msg': Drupal.t('Cod eroare: 36-004 Cap.III, COL(1+2+3) >= COL(6+16) pe toate rindurile - @SUM_36_004_1 <  @SUM_36_004_2 ', { "@SUM_36_004_1": SUM_36_004_1, "@SUM_36_004_2": SUM_36_004_2 })
                            });
                        }
                    }
                }



            }






        }
    }

    //End 36-004


    // Start 36-005
    for (var i = 10; i <= 305; i++) {
        {
            if (i < 85 && fun_row_36_001(i)) {
                if (

                    !isNaN(Number(values["CAP3_R0" + i + "_C16"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C1"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C2"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C3"]))
                    && !isNaN(Number(values["CAP3_R0" + i + "_C6"]))



                ) {

                    var col1 = Number(values["CAP3_R0" + i + "_C1"]);
                    var col2 = Number(values["CAP3_R0" + i + "_C2"]);
                    var col3 = Number(values["CAP3_R0" + i + "_C3"]);
                    var col6 = Number(values["CAP3_R0" + i + "_C6"]);
                    var col16 = Number(values["CAP3_R0" + i + "_C16"]);



                    var SUM_36_005 = col1 + col2 + col3 - col6

                    if (col16 != SUM_36_005) {
                        webform.errors.push({
                            'fieldName': 'CAP3_R0' + i + '_C16',
                            'weight': 9,
                            'msg': Drupal.t('Cod eroare: 36-005 Cap.III, COL16 = COL(1+2+3-6) pe toate rindurile - @col16 <>  @SUM_36_005 ', { "@col16": col16, "@SUM_36_005": SUM_36_005 })
                        });
                    }
                }
            }
            else {

                if (i > 85 && fun_row_36_001(i)) {

                    if (


                        !isNaN(Number(values["CAP3_R" + i + "_C16"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C1"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C2"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C3"]))
                        && !isNaN(Number(values["CAP3_R" + i + "_C6"]))



                    ) {




                        var col1 = Number(values["CAP3_R" + i + "_C1"]);
                        var col2 = Number(values["CAP3_R" + i + "_C2"]);
                        var col3 = Number(values["CAP3_R" + i + "_C3"]);
                        var col6 = Number(values["CAP3_R" + i + "_C6"]);
                        var col16 = Number(values["CAP3_R" + i + "_C16"]);

                        var SUM_36_005 = col1 + col2 + col3 - col6


                        if (col16 != SUM_36_005) {
                            webform.errors.push({
                                'fieldName': 'CAP3_R' + i + '_C16',
                                'weight': 10,
                                'msg': Drupal.t('Cod eroare: 36-005 Cap.III, COL16 = COL(1+2+3-6) pe toate rindurile - @col16 <>  @SUM_36_005 ', { "@col16": col16, "@SUM_36_005": SUM_36_005 })
                            });
                        }
                    }
                }



            }






        }
    }

    //End 36-005


    //Start 36-006


    for (var i = 1; i <= 16; i++) {
        if (!isNaN(Number(values["CAP3_R010_C" + i]))) {
            var R010_C = Number(values["CAP3_R010_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP3_R011_C" + i] || 0)
            .plus(values["CAP3_R012_C" + i] || 0)
            .plus(values["CAP3_R013_C" + i] || 0)
            .plus(values["CAP3_R014_C" + i] || 0)
            .plus(values["CAP3_R015_C" + i] || 0)
            .plus(values["CAP3_R016_C" + i] || 0)
            .plus(values["CAP3_R017_C" + i] || 0)
            .plus(values["CAP3_R018_C" + i] || 0)


        )) {

            var SUM_36_006 = Decimal(values["CAP3_R011_C" + i] || 0)
                .plus(values["CAP3_R012_C" + i] || 0)
                .plus(values["CAP3_R013_C" + i] || 0)
                .plus(values["CAP3_R014_C" + i] || 0)
                .plus(values["CAP3_R015_C" + i] || 0)
                .plus(values["CAP3_R016_C" + i] || 0)
                .plus(values["CAP3_R017_C" + i] || 0)
                .plus(values["CAP3_R018_C" + i] || 0)


                ;
        }


        if (R010_C != SUM_36_006) {
            webform.errors.push({
                'fieldName': 'CAP3_R010_C' + i,
                'weight': 11,
                'msg': Drupal.t('Cod eroare: 36-006. Rind.010 = Rind.(011+012+013+014+015+016+017+018) pe toate coloanele - [@R010_C <> @SUM_36_006]', { '@R010_C': R010_C, '@SUM_36_006': SUM_36_006 })
            });
        }
    }



    //End 36-006


    //Start 36-007


    for (var i = 1; i <= 16; i++) {
        if (!isNaN(Number(values["CAP3_R060_C" + i]))) {
            var R060_C = Number(values["CAP3_R060_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP3_R061_C" + i] || 0)
            .plus(values["CAP3_R062_C" + i] || 0)
            .plus(values["CAP3_R063_C" + i] || 0)



        )) {

            var SUM_36_007 = Decimal(values["CAP3_R061_C" + i] || 0)
                .plus(values["CAP3_R062_C" + i] || 0)
                .plus(values["CAP3_R063_C" + i] || 0)



                ;
        }


        if (R060_C < SUM_36_007) {
            webform.errors.push({
                'fieldName': 'CAP3_R060_C' + i,
                'weight': 12,
                'msg': Drupal.t('Cod eroare: 36-007. Rind.060 >= ∑rind.(061+062+063)  pe toate coloanele - [@R060_C < @SUM_36_007]', { '@R060_C': R060_C, '@SUM_36_007': SUM_36_007 })
            });
        }
    }



    //End 36-007


    //Start 36-008


    for (var i = 1; i <= 16; i++) {
        if (!isNaN(Number(values["CAP3_R080_C" + i]))) {
            var R080_C = Number(values["CAP3_R080_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP3_R081_C" + i] || 0)
            .plus(values["CAP3_R082_C" + i] || 0)
            .plus(values["CAP3_R083_C" + i] || 0)



        )) {

            var SUM_36_008 = Decimal(values["CAP3_R081_C" + i] || 0)
                .plus(values["CAP3_R082_C" + i] || 0)
                .plus(values["CAP3_R083_C" + i] || 0)



                ;
        }


        if (R080_C < SUM_36_008) {
            webform.errors.push({
                'fieldName': 'CAP3_R080_C' + i,
                'weight': 12,
                'msg': Drupal.t('Cod eroare: 36-008. Rind.080 >= Rind.(081+082 + 083 + 084) pe toate coloanele - [@R080_C < @SUM_36_008]', { '@R080_C': R080_C, '@SUM_36_008': SUM_36_008 })
            });
        }
    }



    //End 36-008



    //Start 36-009


    for (var i = 1; i <= 16; i++) {
        if (!isNaN(Number(values["CAP3_R110_C" + i]))) {
            var R110_C = Number(values["CAP3_R110_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP3_R111_C" + i] || 0)




        )) {

            var SUM_36_009 = Decimal(values["CAP3_R111_C" + i] || 0)


                ;
        }


        if (R110_C < SUM_36_009) {
            webform.errors.push({
                'fieldName': 'CAP3_R110_C' + i,
                'weight': 12,
                'msg': Drupal.t('Cod eroare: 36-009. Rind.110 >= Rind.111 pe toate coloanele - [@R110_C < @SUM_36_009]', { '@R110_C': R110_C, '@SUM_36_009': SUM_36_009 })
            });
        }
    }



    //End 36-009


    //Start 36-010


    for (var i = 1; i <= 16; i++) {
        if (!isNaN(Number(values["CAP3_R170_C" + i]))) {
            var R170_C = Number(values["CAP3_R170_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP3_R171_C" + i] || 0)
            .plus(values["CAP3_R172_C" + i] || 0)




        )) {

            var SUM_36_010 = Decimal(values["CAP3_R171_C" + i] || 0)
                .plus(values["CAP3_R172_C" + i] || 0)

                ;
        }


        if (R170_C < SUM_36_010) {
            webform.errors.push({
                'fieldName': 'CAP3_R170_C' + i,
                'weight': 12,
                'msg': Drupal.t('Cod eroare: 36-010. Rind.170 >= Rind.(171+172) pe toate coloanele - [@R170_C < @SUM_36_010]', { '@R170_C': R170_C, '@SUM_36_010': SUM_36_010 })
            });
        }
    }



    //End 36-010


    //Start 36-011

    for (var i = 1; i <= 16; i++) {
        if (!isNaN(Number(values["CAP3_R195_C" + i]))) {
            var R195_C = Number(values["CAP3_R195_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP3_R196_C" + i] || 0)
            .plus(values["CAP3_R197_C" + i] || 0)
            .plus(values["CAP3_R198_C" + i] || 0)

        )) {

            var SUM_36_011 = Decimal(values["CAP3_R396_C" + i] || 0)
                .plus(values["CAP3_R197_C" + i] || 0)
                .plus(values["CAP3_R198_C" + i] || 0)

                ;
        }


        if (R195_C < SUM_36_011) {
            webform.errors.push({
                'fieldName': 'CAP3_R195_C' + i,
                'weight': 12,
                'msg': Drupal.t('Cod eroare: 36-011. Rind.195 >= Rind.(196+197+198) pe toate coloanele - [@R195_C < @SUM_36_011]', { '@R195_C': R195_C, '@SUM_36_011': SUM_36_011 })
            });
        }
    }

    //End 36-011

    // Start 36-012

    {



        if (!isNaN(Number(values["CAP3_R020_C10"]))) {
            var col1 = Number(values["CAP3_R020_C10"]);
        }

        if (!isNaN(Number(values["CAP3_R200_C2"]))) {
            var col2 = Number(values["CAP3_R200_C2"]);
        }

        if ((col1 > 0 && col2 == 0)) {
            webform.errors.push({
                'fieldName': 'CAP3_R200_C2',
                'weight': 14,
                'msg': Drupal.t('Cod eroare: 36-012 Cap.III, Daca Rind.020 COL10 <> 0, atunci Rind.200 COL2 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
            });
        }


    }


    //End 36-012


    // Start 36-013

    {



        if (!isNaN(Number(values["CAP3_R011_C11"]))) {
            var col1 = Number(values["CAP3_R011_C11"]);
        }

        if (!isNaN(Number(values["CAP3_R171_C2"]))) {
            var col2 = Number(values["CAP3_R171_C2"]);
        }

        if ((col1 > 0 && col2 == 0)) {
            webform.errors.push({
                'fieldName': 'CAP3_R171_C2',
                'weight': 15,
                'msg': Drupal.t('Cod eroare: 36-013 Cap.III, Daca Rind.011 COL11 <> 0, atunci Rind.171 COL2 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
            });
        }


    }


    //End 36-013


    // Start 36-013

    {



        if (!isNaN(Number(values["CAP3_R011_C11"]))) {
            var col1 = Number(values["CAP3_R011_C11"]);
        }

        if (!isNaN(Number(values["CAP3_R171_C2"]))) {
            var col2 = Number(values["CAP3_R171_C2"]);
        }

        if ((col1 > 0 && col2 == 0)) {
            webform.errors.push({
                'fieldName': 'CAP3_R171_C2',
                'weight': 16,
                'msg': Drupal.t('Cod eroare: 36-013 Cap.III, Daca Rind.011 COL11 <> 0, atunci Rind.171 COL2 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
            });
        }


    }


    //End 36-013


    // Start 36-014

    {



        if (!isNaN(Number(values["CAP3_R015_C11"]))) {
            var col1 = Number(values["CAP3_R015_C11"]);
        }

        if (!isNaN(Number(values["CAP3_R172_C2"]))) {
            var col2 = Number(values["CAP3_R172_C2"]);
        }

        if ((col1 > 0 && col2 == 0)) {
            webform.errors.push({
                'fieldName': 'CAP3_R372_C2',
                'weight': 17,
                'msg': Drupal.t('Cod eroare: 36-014 Cap.III, Daca Daca Rind.015 COL11 <> 0, atunci Rind.172 COL2 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
            });
        }


    }


    //End 36-014



    // Start 36-015

    {



        if (!isNaN(Number(values["CAP3_R030_C10"]))) {
            var col1 = Number(values["CAP3_R030_C10"]);
        }

        if (!isNaN(Number(values["CAP3_R205_C2"]))) {
            var col2 = Number(values["CAP3_R205_C2"]);
        }

        if ((col1 > 0 && col2 == 0)) {
            webform.errors.push({
                'fieldName': 'CAP3_R205_C2',
                'weight': 18,
                'msg': Drupal.t('Cod eroare: 36-015 Cap.III, Daca Rind.030 COL10 <> 0, atunci Rind.205 COL2 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
            });
        }


    }


    //End 36-015


    // Start 36-016

    {



        if (!isNaN(Number(values["CAP3_R170_C11"]))) {
            var col1 = Number(values["CAP3_R170_C11"]);
        }

        if (!isNaN(Number(values["CAP3_R210_C2"]))) {
            var col2 = Number(values["CAP3_R210_C2"]);
        }

        if ((col1 > 0 && col2 == 0)) {
            webform.errors.push({
                'fieldName': 'CAP3_R210_C2',
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 36-016 Cap.III, Daca Rind.170 COL11 <> 0, atunci Rind.210 COL2 <> 0 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
            });
        }


    }


    //End 36-016



    // Start 36-017

    {



        if (!isNaN(Number(values["CAP3_R220_C11"]))) {
            var col1 = Number(values["CAP3_R220_C11"]);
        }

        if (!isNaN(Number(values["CAP3_R215_C2"]))) {
            var col2 = Number(values["CAP3_R215_C2"]);
        }

        if ((col1 > 0 && col2 == 0)) {
            webform.errors.push({
                'fieldName': 'CAP3_R215_C2',
                'weight': 20,
                'msg': Drupal.t('Cod eroare: 36-017 Cap.III, Daca Rind.220 COL11 <> 0, atunci Rind.215 COL2 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
            });
        }


    }


    //End 36-017


    // Start 36-018

    {



        if (!isNaN(Number(values["CAP3_R300_C12"]))) {
            var col1 = Number(values["CAP3_R300_C12"]);
        }

        if (!isNaN(Number(values["CAP3_R290_C2"]))) {
            var col2 = Number(values["CAP3_R290_C2"]);
        }

        if ((col1 > 0 && col2 == 0)) {
            webform.errors.push({
                'fieldName': 'CAP3_R290_C2',
                'weight': 21,
                'msg': Drupal.t('Cod eroare: 36-018 Cap.III, Daca Rind.300 COL12 <> 0, atunci Rind.290 COL2 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
            });
        }


    }


    //End 36-018

    // Start 36-019

    {



        if (!isNaN(Number(values["CAP3_R080_C12"]))) {
            var col1 = Number(values["CAP3_R080_C12"]);
        }

        if (!isNaN(Number(values["CAP3_R295_C2"]))) {
            var col2 = Number(values["CAP3_R295_C2"]);
        }

        if ((col1 > 0 && col2 == 0)) {
            webform.errors.push({
                'fieldName': 'CAP3_R295_C2',
                'weight': 22,
                'msg': Drupal.t('Cod eroare: 36-019 Cap.III, Daca Rind.080 COL12 <> 0, atunci Rind.295 COL2 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
            });
        }


    }


    //End 36-019


    // Start 36-020

    {



        if (!isNaN(Number(values["CAP3_R230_C11"]))) {
            var col1 = Number(values["CAP3_R230_C11"]);
        }

        if (!isNaN(Number(values["CAP3_R240_C11"]))) {
            var col2 = Number(values["CAP3_R240_C11"]);
        }


        if (!isNaN(Number(values["CAP3_R250_C2"]))) {
            var col3 = Number(values["CAP3_R250_C2"]);
        }


        if ((col1 > 0 && (col2 == 0 && col3 == 0))) {
            webform.errors.push({
                'fieldName': 'CAP3_R230_C11',
                'weight': 23,
                'msg': Drupal.t('Cod eroare: 36-020 Cap.III, Daca Rind.230 COL11 <> 0, atunci Rind.240 COL11 <> 0 sau Rind.250 COL2 <> 0  &col1, -  &col2, -  &col3', { '&col1': col1, '&col2': col2, '&col3': col3 })
            });
        }


    }


    //End 36-020


    // Start 36-021

    {



        if (!isNaN(Number(values["CAP3_R030_C11"]))) {
            var col1 = Number(values["CAP3_R030_C11"]);
        }

        if (!isNaN(Number(values["CAP3_R205_C2"]))) {
            var col2 = Number(values["CAP3_R205_C2"]);
        }





        if (col1 < col2) {
            webform.errors.push({
                'fieldName': 'CAP3_R205_C2',
                'weight': 24,
                'msg': Drupal.t('Cod eroare: 36-021 Cap.III, Rind.030 COL11 > Rind.205 COL2  [&col1 <  &col2]', { '&col1': col1, '&col2': col2 })
            });
        }


    }


    //End 36-021


    // Start 36-022

    {



        if (!isNaN(Number(values["CAP3_R030_C10"]))) {
            var col1 = Number(values["CAP3_R030_C10"]);
        }

        if (!isNaN(Number(values["CAP3_R205_C2"]))) {
            var col2 = Number(values["CAP3_R205_C2"]);
        }





        if (col1 < col2) {
            webform.errors.push({
                'fieldName': 'CAP3_R205_C2',
                'weight': 25,
                'msg': Drupal.t('Cod eroare: 36-022 Cap.III, Rind.030 COL10 > Rind.205 COL2  [&col1 <  &col2]', { '&col1': col1, '&col2': col2 })
            });
        }


    }


    //End 36-022



    //CAP1
    function row_34_001_CAP1(row) {
        var i;
        i = row;
        if (

            i == 90 || i == 100 || i == 120 || i == 200 || i == 205
            || i == 210 || i == 220 || i == 221 || i == 225 || i == 230 || i == 235
            || i == 240 || i == 245 || i == 250 || i == 255 || i == 265 || i == 270
            || i == 275 || i == 280 || i == 281 || i == 282 || i == 283 || i == 284
            || i == 285 || i == 286 || i == 287 || i == 290 || i == 300 || i == 500
            || i == 600 || i == 700 || i == 701 || i == 800 || i == 900 || i == 1100
            || i == 1000
            || i == 1101




        )
            return true;

    }
    // Start 34-001


    for (var i = 90; i <= 1101; i++) {
        {
            if (row_34_001_CAP1(i)) {

                if (!isNaN(Number(values["CAP1_R" + (i) + "_C1"]))) {
                    var col1 = Number(values["CAP1_R" + (i) + "_C1"]);
                }

                if (!isNaN(Decimal(values["CAP1_R" + (i) + "_C2"] || 0)
                    .plus(values["CAP1_R" + (i) + "_C3"] || 0)
                    .plus(values["CAP1_R" + (i) + "_C4"] || 0)
                    .plus(values["CAP1_R" + (i) + "_C5"] || 0)
                )) {
                    var SUM_34_001 = Decimal(values["CAP1_R" + (i) + "_C2"] || 0)
                        .plus(values["CAP1_R" + (i) + "_C3"] || 0)
                        .plus(values["CAP1_R" + (i) + "_C4"] || 0)
                        .plus(values["CAP1_R" + (i) + "_C5"] || 0);
                }




                if (col1 < SUM_34_001) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + (i) + '_C1',
                        'weight': 1,
                        'msg': Drupal.t('Cod eroare: 34-001 COL1 >= COL(2 + 3 + 4 + 5) pe toate rindurile, [@col1 <  @SUM_34_001]', { "@col1": col1, "@SUM_34_001": SUM_34_001 })
                    });
                }


            }

        }
    }



    // Start 34-002

    for (var i = 1; i <= 5; i++) {


        if (!isNaN(Number(values["CAP1_R200_C" + i]))) {
            var R200_C = Number(values["CAP1_R200_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R205_C" + i] || 0)
            .plus(values["CAP1_R210_C" + i] || 0)
            .plus(values["CAP1_R220_C" + i] || 0)
            .plus(values["CAP1_R225_C" + i] || 0)
            .plus(values["CAP1_R230_C" + i] || 0)
            .plus(values["CAP1_R235_C" + i] || 0)
            .plus(values["CAP1_R240_C" + i] || 0)
            .plus(values["CAP1_R245_C" + i] || 0)
            .plus(values["CAP1_R250_C" + i] || 0)
            .plus(values["CAP1_R255_C" + i] || 0)
            .plus(values["CAP1_R265_C" + i] || 0)
            .plus(values["CAP1_R270_C" + i] || 0)
            .plus(values["CAP1_R275_C" + i] || 0)


        )) {

            var SUM_34_002 = Decimal(values["CAP1_R205_C" + i] || 0)
                .plus(values["CAP1_R210_C" + i] || 0)
                .plus(values["CAP1_R220_C" + i] || 0)
                .plus(values["CAP1_R225_C" + i] || 0)
                .plus(values["CAP1_R230_C" + i] || 0)
                .plus(values["CAP1_R235_C" + i] || 0)
                .plus(values["CAP1_R240_C" + i] || 0)
                .plus(values["CAP1_R245_C" + i] || 0)
                .plus(values["CAP1_R250_C" + i] || 0)
                .plus(values["CAP1_R255_C" + i] || 0)
                .plus(values["CAP1_R265_C" + i] || 0)
                .plus(values["CAP1_R270_C" + i] || 0)
                .plus(values["CAP1_R275_C" + i] || 0)

                ;
        }


        if (R200_C != SUM_34_002) {
            webform.errors.push({
                'fieldName': 'CAP1_R200_C' + i,
                'weight': 2,
                'msg': Drupal.t('Cod eroare: 34-002. Rind.200=Rind.205+210+220+225+230+235+240+245+250+255+265+270+275 pe toate coloanele - [@R200_C <> @SUM_34_002]', { '@R200_C': R200_C, '@SUM_34_002': SUM_34_002 })
            });
        }
    }


    // End   34-002



    // Start 34-004

    for (var i = 1; i <= 5; i++) {


        if (!isNaN(Number(values["CAP1_R280_C" + i]))) {
            var R280_C = Number(values["CAP1_R280_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R281_C" + i] || 0)
            .plus(values["CAP1_R282_C" + i] || 0)
            .plus(values["CAP1_R283_C" + i] || 0)
            .plus(values["CAP1_R284_C" + i] || 0)
            .plus(values["CAP1_R285_C" + i] || 0)
            .plus(values["CAP1_R286_C" + i] || 0)
            .plus(values["CAP1_R287_C" + i] || 0)
            .plus(values["CAP1_R290_C" + i] || 0)

        )) {

            var SUM_34_004 = Decimal(values["CAP1_R281_C" + i] || 0)
                .plus(values["CAP1_R282_C" + i] || 0)
                .plus(values["CAP1_R283_C" + i] || 0)
                .plus(values["CAP1_R284_C" + i] || 0)
                .plus(values["CAP1_R285_C" + i] || 0)
                .plus(values["CAP1_R286_C" + i] || 0)
                .plus(values["CAP1_R287_C" + i] || 0)
                .plus(values["CAP1_R290_C" + i] || 0)

                ;
        }


        if (R280_C != SUM_34_004) {
            webform.errors.push({
                'fieldName': 'CAP1_R280_C' + i,
                'weight': 4,
                'msg': Drupal.t('Cod eroare: 34-004. Rind.280=Rind.281,282,283,284,285,286,287,290 pe toate coloanele - [@R280_C <> @SUM_34_004]', { '@R280_C': R280_C, '@SUM_34_004': SUM_34_004 })
            });
        }
    }


    // End   34-004



    // Start 34-006

    for (var i = 1; i <= 5; i++) {


        if (!isNaN(Number(values["CAP1_R1000_C" + i]))) {
            var R1000_C = Number(values["CAP1_R1000_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R100_C" + i] || 0)
            .plus(values["CAP1_R120_C" + i] || 0)
            .plus(values["CAP1_R200_C" + i] || 0)
            .plus(values["CAP1_R280_C" + i] || 0)
            .plus(values["CAP1_R300_C" + i] || 0)
            .plus(values["CAP1_R500_C" + i] || 0)
            .plus(values["CAP1_R600_C" + i] || 0)
            .plus(values["CAP1_R700_C" + i] || 0)
            .plus(values["CAP1_R800_C" + i] || 0)
            .plus(values["CAP1_R900_C" + i] || 0)


        )) {

            var SUM_34_006 = Decimal(values["CAP1_R100_C" + i] || 0)
                .plus(values["CAP1_R120_C" + i] || 0)
                .plus(values["CAP1_R200_C" + i] || 0)
                .plus(values["CAP1_R280_C" + i] || 0)
                .plus(values["CAP1_R300_C" + i] || 0)
                .plus(values["CAP1_R500_C" + i] || 0)
                .plus(values["CAP1_R600_C" + i] || 0)
                .plus(values["CAP1_R700_C" + i] || 0)
                .plus(values["CAP1_R800_C" + i] || 0)
                .plus(values["CAP1_R900_C" + i] || 0)

                ;
        }


        if (R1000_C != SUM_34_006) {
            webform.errors.push({
                'fieldName': 'CAP1_R1000_C' + i,
                'weight': 6,
                'msg': Drupal.t('Cod eroare: 34-006. Rind.1000=Rind.100+120+200+280+300+500+600+700+800+900 pe toate coloanele - [@R1000_C <> @SUM_34_006]', { '@R1000_C': R1000_C, '@SUM_34_006': SUM_34_006 })
            });
        }
    }


    // End   34-006


    // Start 34-007

    for (var i = 1; i <= 1; i++) {


        if (!isNaN(Number(values["CAP11_R0704_C" + i]))) {
            var R0704_C = Number(values["CAP11_R0704_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP11_R0689_C" + i] || 0)
            .plus(values["CAP11_R0691_C" + i] || 0)
            .plus(values["CAP11_R0693_C" + i] || 0)
            .plus(values["CAP11_R0695_C" + i] || 0)
            .plus(values["CAP11_R0697_C" + i] || 0)
            .plus(values["CAP11_R0699_C" + i] || 0)
            .plus(values["CAP11_R0701_C" + i] || 0)
            .plus(values["CAP11_R0703_C" + i] || 0)



        )) {

            var SUM_34_007 = Decimal(values["CAP11_R0689_C" + i] || 0)
                .plus(values["CAP11_R0691_C" + i] || 0)
                .plus(values["CAP11_R0693_C" + i] || 0)
                .plus(values["CAP11_R0695_C" + i] || 0)
                .plus(values["CAP11_R0697_C" + i] || 0)
                .plus(values["CAP11_R0699_C" + i] || 0)
                .plus(values["CAP11_R0701_C" + i] || 0)
                .plus(values["CAP11_R0703_C" + i] || 0)

                ;
        }


        if (R0704_C != SUM_34_007) {
            webform.errors.push({
                'fieldName': 'CAP1_R0704_C' + i,
                'weight': 7,
                'msg': Drupal.t('Cod eroare: 34-007. Rind.0704=Rind.0689+0691+0693+0695+0697+0699+0701+0703 - [@R0704_C <> @SUM_34_007]', { '@R0704_C': R0704_C, '@SUM_34_007': SUM_34_007 })
            });
        }
    }


    // End   34-007


    // Start 34-003

    for (var i = 1; i <= 4; i++) {

        if (i != 2) {
            if (!isNaN(Number(values["CAP1_R220_C" + i]))) {
                var R220_C = Number(values["CAP1_R220_C" + i]);
            }


            if (!isNaN(Decimal(values["CAP1_R221_C" + i] || 0)




            )) {

                var SUM_34_003 = Decimal(values["CAP1_R221_C" + i] || 0)


                    ;
            }


            if (R220_C < SUM_34_003) {
                webform.errors.push({
                    'fieldName': 'CAP1_R220_C' + i,
                    'weight': 3,
                    'msg': Drupal.t('Cod eroare: 34-003. Rind.220 >= Rind.221 pe COL(1,3,4) - [@R220_C < @SUM_34_003]', { '@R220_C': R220_C, '@SUM_34_003': SUM_34_003 })
                });
            }
        }
    }


    // End   34-003


    // Start 34-005

    for (var i = 1; i <= 5; i++) {


        if (!isNaN(Number(values["CAP1_R700_C" + i]))) {
            var R700_C = Number(values["CAP1_R700_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R701_C" + i] || 0)




        )) {

            var SUM_34_005 = Decimal(values["CAP1_R701_C" + i] || 0)


                ;
        }


        if (R700_C < SUM_34_005) {
            webform.errors.push({
                'fieldName': 'CAP1_R700_C' + i,
                'weight': 5,
                'msg': Drupal.t('Cod eroare: 34-005. Rind.700>=Rind.701 pe toate coloanele - [@R700_C < @SUM_34_005]', { '@R700_C': R700_C, '@SUM_34_005': SUM_34_005 })
            });
        }

    }


    // End   34-005




    // Start 34-008

    for (var i = 1; i <= 1; i++) {


        if (!isNaN(Number(values["CAP11_R0688_C" + i]))) {
            var R0689 = Number(values["CAP11_R0688_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP11_R0689_C" + i] || 0))) {
            var SUM_34_008 = Decimal(values["CAP11_R0689_C" + i] || 0);
        }
        if (R0689 > 0 && SUM_34_008 == 0) {
            webform.errors.push({
                'fieldName': 'CAP11_R0688_C' + i,
                'weight': 8,
                'msg': Drupal.t('Cod eroare: 34-008. Daca Rind.0688 <> 0, atunci Rind.0689 <> 0 - [@R0689, @SUM_34_008]', { '@R0689': R0689, '@SUM_34_008': SUM_34_008 })
            });
        }



        if (!isNaN(Number(values["CAP11_R0690_C" + i]))) {
            var R0690 = Number(values["CAP11_R0690_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP11_R0691_C" + i] || 0))) {
            var SUM_34_009 = Decimal(values["CAP11_R0691_C" + i] || 0);
        }
        if (R0690 > 0 && SUM_34_009 == 0) {
            webform.errors.push({
                'fieldName': 'CAP11_R0690_C' + i,
                'weight': 9,
                'msg': Drupal.t('Cod eroare: 34-009. Daca Rind.0690 <> 0, atunci Rind.0691 <> 0 - [@R0690, @SUM_34_009]', { '@R0690': R0690, '@SUM_34_009': SUM_34_009 })
            });
        }



        if (!isNaN(Number(values["CAP11_R0692_C" + i]))) {
            var R0692 = Number(values["CAP11_R0692_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP11_R0693_C" + i] || 0))) {
            var SUM_34_010 = Decimal(values["CAP11_R0693_C" + i] || 0);
        }
        if (R0692 > 0 && SUM_34_010 == 0) {
            webform.errors.push({
                'fieldName': 'CAP11_R0692_C' + i,
                'weight': 10,
                'msg': Drupal.t('Cod eroare: 34-010. Daca Rind.0692<> 0, atunci Rind.0693 <> 0 - [@R0692, @SUM_34_010]', { '@R0692': R0692, '@SUM_34_010': SUM_34_010 })
            });
        }


        if (!isNaN(Number(values["CAP11_R0694_C" + i]))) {
            var R0694 = Number(values["CAP11_R0694_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP11_R0695_C" + i] || 0))) {
            var SUM_34_011 = Decimal(values["CAP11_R0695_C" + i] || 0);
        }
        if (R0694 > 0 && SUM_34_011 == 0) {
            webform.errors.push({
                'fieldName': 'CAP11_R0694_C' + i,
                'weight': 11,
                'msg': Drupal.t('Cod eroare: 34-011. Daca Rind.0694<> 0, atunci Rind.0695 <> 0 - [@R0694, @SUM_34_011]', { '@R0694': R0694, '@SUM_34_011': SUM_34_011 })
            });
        }



        if (!isNaN(Number(values["CAP11_R0696_C" + i]))) {
            var R0696 = Number(values["CAP11_R0696_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP11_R0697_C" + i] || 0))) {
            var SUM_34_012 = Decimal(values["CAP11_R0697_C" + i] || 0);
        }
        if (R0696 > 0 && SUM_34_012 == 0) {
            webform.errors.push({
                'fieldName': 'CAP11_R0696_C' + i,
                'weight': 12,
                'msg': Drupal.t('Cod eroare: 34-012. Daca Rind.0696<> 0, atunci Rind.0697 <> 0 - [@R0696, @SUM_34_012]', { '@R0696': R0696, '@SUM_34_012': SUM_34_012 })
            });
        }


        if (!isNaN(Number(values["CAP11_R0698_C" + i]))) {
            var R0698 = Number(values["CAP11_R0698_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP11_R0699_C" + i] || 0))) {
            var SUM_34_013 = Decimal(values["CAP11_R0699_C" + i] || 0);
        }
        if (R0698 > 0 && SUM_34_013 == 0) {
            webform.errors.push({
                'fieldName': 'CAP11_R0698_C' + i,
                'weight': 13,
                'msg': Drupal.t('Cod eroare: 34-013. Daca Rind.0698<> 0, atunci Rind.0699 <> 0 - [@R0698, @SUM_34_013]', { '@R0698': R0698, '@SUM_34_013': SUM_34_013 })
            });
        }


        if (!isNaN(Number(values["CAP11_R0700_C" + i]))) {
            var R0700 = Number(values["CAP11_R0700_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP11_R0701_C" + i] || 0))) {
            var SUM_34_014 = Decimal(values["CAP11_R0701_C" + i] || 0);
        }
        if (R0700 > 0 && SUM_34_014 == 0) {
            webform.errors.push({
                'fieldName': 'CAP11_R0700_C' + i,
                'weight': 14,
                'msg': Drupal.t('Cod eroare: 34-014. Daca Rind.0700<> 0, atunci Rind.0701 <> 0 - [@R0700, @SUM_34_014]', { '@R0700': R0700, '@SUM_34_014': SUM_34_014 })
            });
        }


        if (!isNaN(Number(values["CAP11_R0702_C" + i]))) {
            var R0702 = Number(values["CAP11_R0702_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP11_R0703_C" + i] || 0))) {
            var SUM_34_015 = Decimal(values["CAP11_R0703_C" + i] || 0);
        }
        if (R0702 > 0 && SUM_34_015 == 0) {
            webform.errors.push({
                'fieldName': 'CAP11_R0702_C' + i,
                'weight': 15,
                'msg': Drupal.t('Cod eroare: 34-015. Daca Rind.0702<> 0, atunci Rind.0703 <> 0 - [@R0702, @SUM_34_015]', { '@R0702': R0702, '@SUM_34_015': SUM_34_015 })
            });
        }

    }


    // End   34-008
    //CAP1




//START CAP2
    for (var i = 1; i <= 2; i++) {
        if (!isNaN(Number(values["CAP2_R0010_C" + i]))) {
            var R0010_C = Number(values["CAP2_R0010_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP2_R0012_C" + i] || 0)
            .plus(values["CAP2_R0013_C" + i] || 0)
            .plus(values["CAP2_R0014_C" + i] || 0)


        )) {

            var SUM_35_001 = Decimal(values["CAP2_R0012_C" + i] || 0)
                .plus(values["CAP2_R0013_C" + i] || 0)
                .plus(values["CAP2_R0014_C" + i] || 0)


                ;
        }


        if (R0010_C < SUM_35_001) {
            webform.errors.push({
                'fieldName': 'CAP2_R0010_C' + i,
                'weight': 1,
                'msg': Drupal.t('Cod eroare: 35-001. Rind.0010 >= Rind.0012+0013+0014 pe COL(1,2) - [@R0010_C < @SUM_35_001]', { '@R0010_C': R0010_C, '@SUM_35_001': SUM_35_001 })
            });
        }
    }



    //End 35-001



    //Start 35-002


    for (var i = 1; i <= 2; i++) {
        if (!isNaN(Number(values["CAP2_R0020_C" + i]))) {
            var R0020_C = Number(values["CAP2_R0020_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP2_R0021_C" + i] || 0)



        )) {

            var SUM_35_002 = Decimal(values["CAP2_R0021_C" + i] || 0)


                ;
        }


        if (R0020_C < SUM_35_002) {
            webform.errors.push({
                'fieldName': 'CAP2_R0020_C' + i,
                'weight': 2,
                'msg': Drupal.t('Cod eroare: 35-002. Rind.0020 >= Rind.0021 pe COL(1,2) - [@R0020_C < @SUM_35_002]', { '@R0020_C': R0020_C, '@SUM_35_002': SUM_35_002 })
            });
        }
    }



    //End 35-002

    //Start 35-003


    for (var i = 1; i <= 2; i++) {
        if (!isNaN(Number(values["CAP2_R0030_C" + i]))) {
            var R0030_C = Number(values["CAP2_R0030_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP2_R0031_C" + i] || 0)
            .plus(values["CAP2_R0034_C" + i] || 0)



        )) {

            var SUM_35_003 = Decimal(values["CAP2_R0031_C" + i] || 0)
                .plus(values["CAP2_R0034_C" + i] || 0)



                ;
        }


        if (R0030_C < SUM_35_003) {
            webform.errors.push({
                'fieldName': 'CAP2_R0030_C' + i,
                'weight': 3,
                'msg': Drupal.t('Cod eroare: 35-003. Rind.0030 >= Rind.0031+0034 pe COL(1,2) - [@R0030_C < @SUM_35_003]', { '@R0030_C': R0030_C, '@SUM_35_003': SUM_35_003 })
            });
        }
    }

    //End 35-003


    //Start 35-004


    for (var i = 1; i <= 2; i++) {
        if (!isNaN(Number(values["CAP2_R0040_C" + i]))) {
            var R0040_C = Number(values["CAP2_R0040_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP2_R0041_C" + i] || 0)



        )) {

            var SUM_35_004 = Decimal(values["CAP2_R0041_C" + i] || 0)


                ;
        }


        if (R0040_C < SUM_35_004) {
            webform.errors.push({
                'fieldName': 'CAP2_R0040_C' + i,
                'weight': 4,
                'msg': Drupal.t('Cod eroare: 35-004. Rind.0040 >= Rind.0041 pe COL(1,2) - [@R0040_C < @SUM_35_004]', { '@R0040_C': R0040_C, '@SUM_35_004': SUM_35_004 })
            });
        }
    }



    //End 35-004




    //Start 35-005


    for (var i = 1; i <= 2; i++) {
        if (!isNaN(Number(values["CAP2_R0030_C" + i]))) {
            var R0030_C = Number(values["CAP2_R0030_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP2_R0034_C" + i] || 0)



        )) {

            var SUM_35_005 = Decimal(values["CAP2_R0034_C" + i] || 0)


                ;
        }


        if (R0030_C < SUM_35_005) {
            webform.errors.push({
                'fieldName': 'CAP2_R0030_C' + i,
                'weight': 5,
                'msg': Drupal.t('Cod eroare: 35-005. Rind.0030 >= Rind.0034 pe COL(1,2) - [@R0030_C < @SUM_35_005]', { '@R0030_C': R0030_C, '@SUM_35_005': SUM_35_005 })
            });
        }
    }



    //End 35-005


    //Start 35-006


    for (var i = 1; i <= 2; i++) {
        if (!isNaN(Number(values["CAP2_R0050_C" + i]))) {
            var R0050_C = Number(values["CAP2_R0050_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP2_R0051_C" + i] || 0)



        )) {

            var SUM_35_006 = Decimal(values["CAP2_R0051_C" + i] || 0)


                ;
        }


        if (R0050_C < SUM_35_006) {
            webform.errors.push({
                'fieldName': 'CAP2_R0050_C' + i,
                'weight': 6,
                'msg': Drupal.t('Cod eroare: 35-006. Rind.0050 >= Rind.0051 pe COL(1,2) - [@R0050_C < @SUM_35_006]', { '@R0050_C': R0050_C, '@SUM_35_006': SUM_35_006 })
            });
        }
    }



    //End 35-006


    //End 45 - 035

    function row_35_007_CAP1(row) {
        var i;
        i = row;
        if (

            i == 10 || i == 12 || i == 13 || i == 14
            || i == 20 || i == 21
            || i == 30 || i == 31 || i == 34
            || i == 40 || i == 41
            || i == 50 || i == 51
            || i == 60 || i == 70 || i == 80



        )
            return true;

    }
    // Start 35-007


    for (var i = 10; i <= 80; i++) {
        {
            if (row_35_007_CAP1(i)) {

                if (!isNaN(Number(values["CAP2_R00" + (i) + "_C1"]))) {
                    var col1 = Number(values["CAP2_R00" + (i) + "_C1"]);
                }

                if (!isNaN(Number(values["CAP2_R00" + (i) + "_C2"]))) {
                    var col2 = Number(values["CAP2_R00" + (i) + "_C2"]);
                }


                if (col1 > 0 && col2 == 0) {
                    webform.errors.push({
                        'fieldName': 'CAP2_R00' + (i) + '_C2',
                        'weight': 7,
                        'msg': Drupal.t('Cod eroare: 35-007 - Cap.II, Daca COL1 <> 0, atunci COL2 <> 0, [@col1 -  @col2]', { "@col1": col1, "@col2": col2 })
                    });
                }


            }

        }
    }

    // End 35-007



    //Start 35-008


    for (var i = 1; i <= 6; i++) {

        if (i != 3 && i != 4) {
            if (!isNaN(Number(values["CAP22_R0100_C" + i]))) {
                var R0100 = Number(values["CAP22_R0100_C" + i]);
            }


            if (!isNaN(Decimal(values["CAP2_R0010_C" + 1] || 0)




            )) {

                var SUM_35_008 = Decimal(values["CAP2_R0010_C" + 1] || 0)




                    ;
            }


            if (SUM_35_008 < R0100) {
                webform.errors.push({
                    'fieldName': 'CAP22_R0100_C' + i,

                    'weight': 8,
                    'msg': Drupal.t('Cod eroare: 35-008. Rind.0100 COL(1,2,5,6) <= Rind.0010 COL1 - [@SUM_35_008 < @R0100]', { '@SUM_35_008': SUM_35_008, '@R0100': R0100 })
                });
            }
        }
    }



    //End 35-008



    //Start 35-009


    for (var i = 3; i <= 8; i++) {

        if (i != 5 && i != 6) {
            if (!isNaN(Number(values["CAP22_R0100_C" + i]))) {
                var R0100_1 = Number(values["CAP22_R0100_C" + i]);
            }


            if (!isNaN(Decimal(values["CAP2_R0010_C" + 2] || 0)




            )) {

                var SUM_35_009 = Decimal(values["CAP2_R0010_C" + 2] || 0)




                    ;
            }


            if (SUM_35_009 < R0100_1) {
                webform.errors.push({
                    'fieldName': 'CAP22_R0100_C' + i,

                    'weight': 9,
                    'msg': Drupal.t('Cod eroare: 35-009. Rind.0100 COL(3,4,7,8) <= Rind.0010 COL2 - [@SUM_35_009 < @R0100_1]', { '@SUM_35_009': SUM_35_009, '@R0100_1': R0100_1 })
                });
            }
        }
    }



    //End 35-009




    //Start 35-012


    for (var i = 1; i <= 6; i++) {

        if (i != 3 && i != 4) {
            if (!isNaN(Number(values["CAP22_R0300_C" + i]))) {
                var R0300 = Number(values["CAP22_R0300_C" + i]);
            }


            if (!isNaN(Decimal(values["CAP2_R0030_C" + 1] || 0)




            )) {

                var SUM_35_012 = Decimal(values["CAP2_R0030_C" + 1] || 0)




                    ;
            }


            if (SUM_35_012 < R0300) {
                webform.errors.push({
                    'fieldName': 'CAP22_R0300_C' + i,

                    'weight': 10,
                    'msg': Drupal.t('Cod eroare: 35-012. Rind.0300 COL(1,2,5,6) <= Rind.0030 COL1 - [@SUM_35_012 < @R0300]', { '@SUM_35_012': SUM_35_012, '@R0300': R0300 })
                });
            }
        }
    }



    //End 35-012



    //Start 35-013


    for (var i = 3; i <= 8; i++) {

        if (i != 5 && i != 6) {
            if (!isNaN(Number(values["CAP22_R0300_C" + i]))) {
                var R0300_1 = Number(values["CAP22_R0300_C" + i]);
            }


            if (!isNaN(Decimal(values["CAP2_R0030_C" + 2] || 0)




            )) {

                var SUM_35_013 = Decimal(values["CAP2_R0030_C" + 2] || 0)




                    ;
            }


            if (SUM_35_013 < R0300_1) {
                webform.errors.push({
                    'fieldName': 'CAP22_R0300_C' + i,

                    'weight': 11,
                    'msg': Drupal.t('Cod eroare: 35-013.  Rind.0300 COL(3,4,7,8) <= Rind.0030 COL2 - [@SUM_35_013 < @R0300_1]', { '@SUM_35_013': SUM_35_013, '@R0300_1': R0300_1 })
                });
            }
        }
    }



    //End 35-013




    //Start 35-014


    for (var i = 1; i <= 6; i++) {

        if (i != 3 && i != 4) {
            if (!isNaN(Number(values["CAP22_R0400_C" + i]))) {
                var R0400 = Number(values["CAP22_R0400_C" + i]);
            }


            if (!isNaN(Decimal(values["CAP2_R0040_C" + 1] || 0)




            )) {

                var SUM_35_014 = Decimal(values["CAP2_R0040_C" + 1] || 0)




                    ;
            }


            if (SUM_35_014 < R0400) {
                webform.errors.push({
                    'fieldName': 'CAP22_R0400_C' + i,

                    'weight': 14,
                    'msg': Drupal.t('Cod eroare: 35-014. Rind.0400 COL(1,2,5,6) <= Rind.0040 COL1 - [@SUM_35_014 < @R0400]', { '@SUM_35_014': SUM_35_014, '@R0400': R0400 })
                });
            }
        }
    }



    //End 35-014



    //Start 35-015


    for (var i = 3; i <= 8; i++) {

        if (i != 5 && i != 6) {
            if (!isNaN(Number(values["CAP22_R0400_C" + i]))) {
                var R0400_1 = Number(values["CAP22_R0400_C" + i]);
            }


            if (!isNaN(Decimal(values["CAP2_R0040_C" + 2] || 0)




            )) {

                var SUM_35_015 = Decimal(values["CAP2_R0040_C" + 2] || 0)




                    ;
            }


            if (SUM_35_015 < R0400_1) {
                webform.errors.push({
                    'fieldName': 'CAP22_R0400_C' + i,

                    'weight': 15,
                    'msg': Drupal.t('Cod eroare: 35-015. Rind.0400 COL(3,4,7,8) <= Rind.0040 COL2 - [@SUM_35_015 < @R0400_1]', { '@SUM_35_015': SUM_35_015, '@R0400_1': R0400_1 })
                });
            }
        }
    }



    //End 35-015
//END  CAP2

    //Sort warnings & errors
    webform.warnings.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.errors.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.validatorsStatus['agr16'] = 1;
    validateWebform();

}

function sort_errors_warinings(a, b) {
    if (!a.hasOwnProperty('weight')) {
        a.error_code = 9999;
    }

    if (!b.hasOwnProperty('weight')) {
        b.error_code = 9999;
    }

    return toFloat(a.error_code) - toFloat(b.error_code);
}