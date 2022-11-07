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