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
                if (!isNaN(Number(values["CAP1_R0" + i + "_C3"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C4"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C5"]))
                ) {



                    var col3 = Number(values["CAP1_R0" + i + "_C3"]);
                    var col4 = Number(values["CAP1_R0" + i + "_C4"]);
                    var col5 = Number(values["CAP1_R0" + i + "_C5"]);

                    var SUM_COL4_COL5 = col4 + col5


                    if (col3 < SUM_COL4_COL5) {
                        webform.errors.push({
                            'fieldName': 'CAP1_R0' + i + '_C3',
                            'weight': 1,
                            'msg': Drupal.t('Cod eroare: 36-001 Cap.I, COL3 >= COL(4+5) pe toate rindurile - @col3 <  @SUM_COL4_COL5 ', { "@col3": col3, "@SUM_COL4_COL5": SUM_COL4_COL5 })
                        });
                    }
                }
            }
            else {

                if (i > 85 && fun_row_36_001(i)) {

                    if (!isNaN(Number(values["CAP1_R" + i + "_C3"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C4"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C5"]))
                    ) {



                        var col3 = Number(values["CAP1_R" + i + "_C3"]);
                        var col4 = Number(values["CAP1_R" + i + "_C4"]);
                        var col5 = Number(values["CAP1_R" + i + "_C5"]);

                        var SUM_COL4_COL5 = col4 + col5


                        if (col3 < SUM_COL4_COL5) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R' + i + '_C3',
                                'weight': 2,
                                'msg': Drupal.t('Cod eroare: 36-001 Cap.I, COL3 >= COL(4+5) pe toate rindurile - @col3 <  @SUM_COL4_COL5 ', { "@col3": col3, "@SUM_COL4_COL5": SUM_COL4_COL5 })
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
                    
                    !isNaN(Number(values["CAP1_R0" + i + "_C6"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C7"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C8"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C9"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C10"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C14"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C15"]))


                ) {



                    var col6 = Number(values["CAP1_R0" + i + "_C6"]);
                    var col7 = Number(values["CAP1_R0" + i + "_C7"]);
                    var col8 = Number(values["CAP1_R0" + i + "_C8"]);
                    var col9 = Number(values["CAP1_R0" + i + "_C9"]);
                    var col10 = Number(values["CAP1_R0" + i + "_C10"]);
                    var col14 = Number(values["CAP1_R0" + i + "_C14"]);
                    var col15 = Number(values["CAP1_R0" + i + "_C15"]);

                    var SUM_36_002 = col7 + col8 + col9 + col10 + col14 + col15 
 

                    if (col6 < SUM_36_002) {
                        webform.errors.push({
                            'fieldName': 'CAP1_R0' + i + '_C6',
                            'weight': 3,
                            'msg': Drupal.t('Cod eroare: 36-002 Cap.I, COL6 >= COL(7+8+9+10+14+15) pe toate rindurile - @col6 <  @SUM_36_002 ', { "@col6": col6, "@SUM_36_002": SUM_COL4_COL5 })
                        });
                    }
                }
            }
            else {

                if (i > 85 && fun_row_36_001(i)) {

                    if (
                        
                        !isNaN(Number(values["CAP1_R" + i + "_C6"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C7"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C8"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C9"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C10"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C14"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C15"]))


                    ) {



                        var col6 = Number(values["CAP1_R" + i + "_C6"]);
                        var col7 = Number(values["CAP1_R" + i + "_C7"]);
                        var col8 = Number(values["CAP1_R" + i + "_C8"]);
                        var col9 = Number(values["CAP1_R" + i + "_C9"]);
                        var col10 = Number(values["CAP1_R" + i + "_C10"]);
                        var col14 = Number(values["CAP1_R" + i + "_C14"]);
                        var col15 = Number(values["CAP1_R" + i + "_C15"]);

                        var SUM_36_002 = col7 + col8 + col9 + col10 + col14 + col15 


                        if (col6 < SUM_36_002) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R' + i + '_C6',
                                'weight': 4,
                                'msg': Drupal.t('Cod eroare: 36-002 Cap.I, COL6 >= COL(7+8+9+10+14+15) pe toate rindurile - @col6 <  @SUM_36_002 ', { "@col6": col6, "@SUM_36_002": SUM_36_002 })
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

                    !isNaN(Number(values["CAP1_R0" + i + "_C10"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C11"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C12"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C13"]))
                  


                ) {



                    var col10 = Number(values["CAP1_R0" + i + "_C10"]);
                    var col11 = Number(values["CAP1_R0" + i + "_C11"]);
                    var col12 = Number(values["CAP1_R0" + i + "_C12"]);
                    var col13 = Number(values["CAP1_R0" + i + "_C13"]);
                   

                    var SUM_36_003 = col11 + col12 + col13


                    if (col10 != SUM_36_003) {
                        webform.errors.push({
                            'fieldName': 'CAP1_R0' + i + '_C10',
                            'weight': 5,
                            'msg': Drupal.t('Cod eroare: 36-003 Cap.I, COL10 = COL(11+12+13) pe toate rindurile - @col10 <>  @SUM_36_003 ', { "@col10": col10, "@SUM_36_003": SUM_36_003 })
                        });
                    }
                }
            }
            else {

                if (i > 85 && fun_row_36_001(i)) {

                    if (


                        !isNaN(Number(values["CAP1_R" + i + "_C10"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C11"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C12"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C13"]))


                    ) {



                        var col10 = Number(values["CAP1_R" + i + "_C10"]);
                        var col11 = Number(values["CAP1_R" + i + "_C11"]);
                        var col12 = Number(values["CAP1_R" + i + "_C12"]);
                        var col13 = Number(values["CAP1_R" + i + "_C13"]);


                        var SUM_36_003 = col11 + col12 + col13


                        if (col10 != SUM_36_003) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R' + i + '_C10',
                                'weight': 6,
                                'msg': Drupal.t('Cod eroare: 36-003 Cap.I, COL10 = COL(11+12+13) pe toate rindurile - @col10 <>  @SUM_36_003 ', { "@col10": col10, "@SUM_36_003": SUM_36_003 })
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

                    !isNaN(Number(values["CAP1_R0" + i + "_C1"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C2"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C3"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C6"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C16"]))



                ) {



                    var col1 = Number(values["CAP1_R0" + i + "_C1"]);
                    var col2 = Number(values["CAP1_R0" + i + "_C2"]);
                    var col3 = Number(values["CAP1_R0" + i + "_C3"]);
                    var col6 = Number(values["CAP1_R0" + i + "_C6"]);
                    var col16 = Number(values["CAP1_R0" + i + "_C16"]);


                    var SUM_36_004_1 = col1 + col2 + col3
                    var SUM_36_004_2 = col6 + col16

                    if (SUM_36_004_1 < SUM_36_004_2) {
                        webform.errors.push({
                            'fieldName': 'CAP1_R0' + i + '_C1',
                            'weight': 7,
                            'msg': Drupal.t('Cod eroare: 36-004 Cap.I, COL(1+2+3) >= COL(6+16) pe toate rindurile - @SUM_36_004_1 <  @SUM_36_004_2 ', { "@SUM_36_004_1": SUM_36_004_1, "@SUM_36_004_2": SUM_36_004_2 })
                        });
                    }
                }
            }
            else {

                if (i > 85 && fun_row_36_001(i)) {

                    if (



                        !isNaN(Number(values["CAP1_R" + i + "_C1"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C2"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C3"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C6"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C16"]))



                    ) {



                        var col1 = Number(values["CAP1_R" + i + "_C1"]);
                        var col2 = Number(values["CAP1_R" + i + "_C2"]);
                        var col3 = Number(values["CAP1_R" + i + "_C3"]);
                        var col6 = Number(values["CAP1_R" + i + "_C6"]);
                        var col16 = Number(values["CAP1_R" + i + "_C16"]);

                        var SUM_36_004_1 = col1 + col2 + col3
                        var SUM_36_004_2 = col6 + col16


                        if (SUM_36_004_1 < SUM_36_004_2) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R' + i + '_C1',
                                'weight': 8,
                                'msg': Drupal.t('Cod eroare: 36-004 Cap.I, COL(1+2+3) >= COL(6+16) pe toate rindurile - @SUM_36_004_1 <  @SUM_36_004_2 ', { "@SUM_36_004_1": SUM_36_004_1, "@SUM_36_004_2": SUM_36_004_2 })
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

                    !isNaN(Number(values["CAP1_R0" + i + "_C16"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C1"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C2"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C3"]))
                    && !isNaN(Number(values["CAP1_R0" + i + "_C6"]))



                ) {

                    var col1 = Number(values["CAP1_R0" + i + "_C1"]);
                    var col2 = Number(values["CAP1_R0" + i + "_C2"]);
                    var col3 = Number(values["CAP1_R0" + i + "_C3"]);
                    var col6 = Number(values["CAP1_R0" + i + "_C6"]);
                    var col16 = Number(values["CAP1_R0" + i + "_C16"]);


                  
                    var SUM_36_005 = col1 + col2 + col3 - col6

                    if (col16 != SUM_36_005) {
                        webform.errors.push({
                            'fieldName': 'CAP1_R0' + i + '_C16',
                            'weight': 9,
                            'msg': Drupal.t('Cod eroare: 36-005 Cap.I, COL16 = COL(1+2+3-6) pe toate rindurile - @col16 <>  @SUM_36_005 ', { "@col16": col16, "@SUM_36_005": SUM_36_005 })
                        });
                    }
                }
            }
            else {

                if (i > 85 && fun_row_36_001(i)) {

                    if (


                        !isNaN(Number(values["CAP1_R" + i + "_C16"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C1"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C2"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C3"]))
                        && !isNaN(Number(values["CAP1_R" + i + "_C6"]))



                    ) {




                        var col1 = Number(values["CAP1_R" + i + "_C1"]);
                        var col2 = Number(values["CAP1_R" + i + "_C2"]);
                        var col3 = Number(values["CAP1_R" + i + "_C3"]);
                        var col6 = Number(values["CAP1_R" + i + "_C6"]);
                        var col16 = Number(values["CAP1_R" + i + "_C16"]);

                        var SUM_36_005 = col1 + col2 + col3 - col6


                        if (col16 != SUM_36_005) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R' + i + '_C16',
                                'weight': 10,
                                'msg': Drupal.t('Cod eroare: 36-005 Cap.I, COL16 = COL(1+2+3-6) pe toate rindurile - @col16 <>  @SUM_36_005 ', { "@col16": col16, "@SUM_36_005": SUM_36_005 })
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
        if (!isNaN(Number(values["CAP1_R010_C" + i]))) {
            var R010_C = Number(values["CAP1_R010_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R011_C" + i] || 0)
            .plus(values["CAP1_R012_C" + i] || 0)
            .plus(values["CAP1_R013_C" + i] || 0)
            .plus(values["CAP1_R014_C" + i] || 0)
            .plus(values["CAP1_R015_C" + i] || 0)
            .plus(values["CAP1_R016_C" + i] || 0)
            .plus(values["CAP1_R017_C" + i] || 0)
            .plus(values["CAP1_R018_C" + i] || 0)


        )) {

            var SUM_36_006 = Decimal(values["CAP1_R011_C" + i] || 0)
                .plus(values["CAP1_R012_C" + i] || 0)
                .plus(values["CAP1_R013_C" + i] || 0)
                .plus(values["CAP1_R014_C" + i] || 0)
                .plus(values["CAP1_R015_C" + i] || 0)
                .plus(values["CAP1_R016_C" + i] || 0)
                .plus(values["CAP1_R017_C" + i] || 0)
                .plus(values["CAP1_R018_C" + i] || 0)


                ;
        }


        if (R010_C != SUM_36_006) {
            webform.errors.push({
                'fieldName': 'CAP1_R010_C' + i,
                'weight': 11,
                'msg': Drupal.t('Cod eroare: 36-006. Rind.010 = Rind.(011+012+013+014+015+016+017+018) pe toate coloanele - [@R010_C <> @SUM_36_006]', { '@R010_C': R010_C, '@SUM_36_006': SUM_36_006 })
            });
        }
    }



    //End 36-006


    //Start 36-007


    for (var i = 1; i <= 16; i++) {
        if (!isNaN(Number(values["CAP1_R060_C" + i]))) {
            var R060_C = Number(values["CAP1_R060_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R061_C" + i] || 0)
            .plus(values["CAP1_R062_C" + i] || 0)
            .plus(values["CAP1_R063_C" + i] || 0)
           


        )) {

            var SUM_36_007 = Decimal(values["CAP1_R061_C" + i] || 0)
                .plus(values["CAP1_R062_C" + i] || 0)
                .plus(values["CAP1_R063_C" + i] || 0)
              


                ;
        }


        if (R060_C < SUM_36_007) {
            webform.errors.push({
                'fieldName': 'CAP1_R060_C' + i,
                'weight': 12,
                'msg': Drupal.t('Cod eroare: 36-007. Rind.060 >= ∑rind.(061+062+063)  pe toate coloanele - [@R060_C < @SUM_36_007]', { '@R060_C': R060_C, '@SUM_36_007': SUM_36_007 })
            });
        }
    }



    //End 36-007


    //Start 36-008


    for (var i = 1; i <= 16; i++) {
        if (!isNaN(Number(values["CAP1_R080_C" + i]))) {
            var R080_C = Number(values["CAP1_R080_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R081_C" + i] || 0)
            .plus(values["CAP1_R082_C" + i] || 0)
            .plus(values["CAP1_R083_C" + i] || 0)



        )) {

            var SUM_36_008 = Decimal(values["CAP1_R081_C" + i] || 0)
                .plus(values["CAP1_R082_C" + i] || 0)
                .plus(values["CAP1_R083_C" + i] || 0)



                ;
        }


        if (R080_C < SUM_36_008) {
            webform.errors.push({
                'fieldName': 'CAP1_R080_C' + i,
                'weight': 12,
                'msg': Drupal.t('Cod eroare: 36-008. Rind.080 >= Rind.(081+082 + 083 + 084) pe toate coloanele - [@R080_C < @SUM_36_008]', { '@R080_C': R080_C, '@SUM_36_008': SUM_36_008 })
            });
        }
    }



    //End 36-008



    //Start 36-009


    for (var i = 1; i <= 16; i++) {
        if (!isNaN(Number(values["CAP1_R110_C" + i]))) {
            var R110_C = Number(values["CAP1_R110_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R111_C" + i] || 0)
           



        )) {

            var SUM_36_009 = Decimal(values["CAP1_R111_C" + i] || 0)
    

                ;
        }


        if (R110_C < SUM_36_009) {
            webform.errors.push({
                'fieldName': 'CAP1_R110_C' + i,
                'weight': 12,
                'msg': Drupal.t('Cod eroare: 36-009. Rind.110 >= Rind.111 pe toate coloanele - [@R110_C < @SUM_36_009]', { '@R110_C': R110_C, '@SUM_36_009': SUM_36_009 })
            });
        }
    }



    //End 36-009


    //Start 36-010


    for (var i = 1; i <= 16; i++) {
        if (!isNaN(Number(values["CAP1_R170_C" + i]))) {
            var R170_C = Number(values["CAP1_R170_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R171_C" + i] || 0)
            .plus(values["CAP1_R172_C" + i] || 0)
           



        )) {

            var SUM_36_010 = Decimal(values["CAP1_R171_C" + i] || 0)
                .plus(values["CAP1_R172_C" + i] || 0)
    
                ;
        }


        if (R170_C < SUM_36_010) {
            webform.errors.push({
                'fieldName': 'CAP1_R170_C' + i,
                'weight': 12,
                'msg': Drupal.t('Cod eroare: 36-010. Rind.170 >= Rind.(171+172) pe toate coloanele - [@R170_C < @SUM_36_010]', { '@R170_C': R170_C, '@SUM_36_010': SUM_36_010 })
            });
        }
    }



    //End 36-010


    //Start 36-011
    
    for (var i = 1; i <= 16; i++) {
        if (!isNaN(Number(values["CAP1_R195_C" + i]))) {
            var R195_C = Number(values["CAP1_R195_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R196_C" + i] || 0)
            .plus(values["CAP1_R197_C" + i] || 0)
            .plus(values["CAP1_R198_C" + i] || 0)

        )) {

            var SUM_36_011 = Decimal(values["CAP1_R196_C" + i] || 0)
                .plus(values["CAP1_R197_C" + i] || 0)
                .plus(values["CAP1_R198_C" + i] || 0)

                ;
        }


        if (R195_C < SUM_36_011) {
            webform.errors.push({
                'fieldName': 'CAP1_R195_C' + i,
                'weight': 12,
                'msg': Drupal.t('Cod eroare: 36-011. Rind.195 >= Rind.(196+197+198) pe toate coloanele - [@R195_C < @SUM_36_011]', { '@R195_C': R195_C, '@SUM_36_011': SUM_36_011 })
            });
        }
    }

    //End 36-011

    // Start 36-012
   
        {
            


        if (!isNaN(Number(values["CAP1_R020_C10"]))) {
            var col1 = Number(values["CAP1_R020_C10"]);
                }

        if (!isNaN(Number(values["CAP1_R200_C2"]))) {
            var col2 = Number(values["CAP1_R200_C2"]);
                }

                if ((col1 > 0 && col2 == 0)) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R200_C2',
                        'weight': 4,
                        'msg': Drupal.t('Cod eroare: 36-012 Cap.I, Daca Rind.020 COL10 <> 0, atunci Rind.200 COL2 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
                    });
                }
                
            
        }
   

 //End 36-012
 

    // Start 36-013

    {



        if (!isNaN(Number(values["CAP1_R011_C11"]))) {
            var col1 = Number(values["CAP1_R011_C11"]);
        }

        if (!isNaN(Number(values["CAP1_R171_C2"]))) {
            var col2 = Number(values["CAP1_R171_C2"]);
        }

        if ((col1 > 0 && col2 == 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R171_C2',
                'weight': 4,
                'msg': Drupal.t('Cod eroare: 36-013 Cap.I, Daca Rind.011 COL11 <> 0, atunci Rind.171 COL2 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
            });
        }


    }


 //End 36-013


    // Start 36-013

    {



        if (!isNaN(Number(values["CAP1_R011_C11"]))) {
            var col1 = Number(values["CAP1_R011_C11"]);
        }

        if (!isNaN(Number(values["CAP1_R171_C2"]))) {
            var col2 = Number(values["CAP1_R171_C2"]);
        }

        if ((col1 > 0 && col2 == 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R171_C2',
                'weight': 4,
                'msg': Drupal.t('Cod eroare: 36-013 Cap.I, Daca Rind.011 COL11 <> 0, atunci Rind.171 COL2 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
            });
        }


    }


 //End 36-013


    // Start 36-014

    {



        if (!isNaN(Number(values["CAP1_R015_C11"]))) {
            var col1 = Number(values["CAP1_R015_C11"]);
        }

        if (!isNaN(Number(values["CAP1_R172_C2"]))) {
            var col2 = Number(values["CAP1_R172_C2"]);
        }

        if ((col1 > 0 && col2 == 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R172_C2',
                'weight': 4,
                'msg': Drupal.t('Cod eroare: 36-014 Cap.I, Daca Daca Rind.015 COL11 <> 0, atunci Rind.172 COL2 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
            });
        }


    }


 //End 36-014



    // Start 36-015

    {



        if (!isNaN(Number(values["CAP1_R030_C10"]))) {
            var col1 = Number(values["CAP1_R030_C10"]);
        }

        if (!isNaN(Number(values["CAP1_R205_C2"]))) {
            var col2 = Number(values["CAP1_R205_C2"]);
        }

        if ((col1 > 0 && col2 == 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R205_C2',
                'weight': 4,
                'msg': Drupal.t('Cod eroare: 36-015 Cap.I, Daca Rind.030 COL10 <> 0, atunci Rind.205 COL2 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
            });
        }


    }


 //End 36-015


    // Start 36-016

    {



        if (!isNaN(Number(values["CAP1_R170_C11"]))) {
            var col1 = Number(values["CAP1_R170_C11"]);
        }

        if (!isNaN(Number(values["CAP1_R210_C2"]))) {
            var col2 = Number(values["CAP1_R210_C2"]);
        }

        if ((col1 > 0 && col2 == 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R210_C2',
                'weight': 4,
                'msg': Drupal.t('Cod eroare: 36-016 Cap.I, Daca Rind.170 COL11 <> 0, atunci Rind.210 COL2 <> 0 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
            });
        }


    }


 //End 36-016



    // Start 36-017

    {



        if (!isNaN(Number(values["CAP1_R220_C11"]))) {
            var col1 = Number(values["CAP1_R220_C11"]);
        }

        if (!isNaN(Number(values["CAP1_R215_C2"]))) {
            var col2 = Number(values["CAP1_R215_C2"]);
        }

        if ((col1 > 0 && col2 == 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R215_C2',
                'weight': 4,
                'msg': Drupal.t('Cod eroare: 36-017 Cap.I, Daca Rind.220 COL11 <> 0, atunci Rind.215 COL2 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
            });
        }


    }


 //End 36-017


    // Start 36-018

    {



        if (!isNaN(Number(values["CAP1_R300_C12"]))) {
            var col1 = Number(values["CAP1_R300_C12"]);
        }

        if (!isNaN(Number(values["CAP1_R290_C2"]))) {
            var col2 = Number(values["CAP1_R290_C2"]);
        }

        if ((col1 > 0 && col2 == 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R290_C2',
                'weight': 4,
                'msg': Drupal.t('Cod eroare: 36-018 Cap.I, Daca Rind.300 COL12 <> 0, atunci Rind.290 COL2 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
            });
        }


    }


 //End 36-018

    // Start 36-019

    {



        if (!isNaN(Number(values["CAP1_R080_C12"]))) {
            var col1 = Number(values["CAP1_R080_C12"]);
        }

        if (!isNaN(Number(values["CAP1_R295_C2"]))) {
            var col2 = Number(values["CAP1_R295_C2"]);
        }

        if ((col1 > 0 && col2 == 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R295_C2',
                'weight': 4,
                'msg': Drupal.t('Cod eroare: 36-019 Cap.I, Daca Rind.080 COL12 <> 0, atunci Rind.295 COL2 <> 0  &col1, -  &col2', { '&col1': col1, '&col2': col2 })
            });
        }


    }


 //End 36-019


    // Start 36-020

    {



        if (!isNaN(Number(values["CAP1_R230_C11"]))) {
            var col1 = Number(values["CAP1_R230_C11"]);
        }

        if (!isNaN(Number(values["CAP1_R240_C11"]))) {
            var col2 = Number(values["CAP1_R240_C11"]);
        }


        if (!isNaN(Number(values["CAP1_R250_C2"]))) {
            var col3 = Number(values["CAP1_R250_C2"]);
        }


        if ((col1 > 0 && (col2 == 0 && col3 == 0) )) {
            webform.errors.push({
                'fieldName': 'CAP1_R230_C11',
                'weight': 4,
                'msg': Drupal.t('Cod eroare: 36-020 Cap.I, Daca Rind.230 COL11 <> 0, atunci Rind.240 COL11 <> 0 sau Rind.250 COL2 <> 0  &col1, -  &col2, -  &col3', { '&col1': col1, '&col2': col2, '&col3': col3 })
            });
        }


    }


 //End 36-020

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