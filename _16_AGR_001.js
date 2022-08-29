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




    // Start 29-001
    if (!isNaN(Number((values.CAP1_R300_C6)))) {
        var R300_C6 = Number(values.CAP1_R300_C6);
    }

    if (!isNaN(Number(values.CAP1_R300_C7))) {
        var R300_C7 = Number(values.CAP1_R300_C7);
    }


    if ((R300_C6 < R300_C7)) {
        webform.errors.push({
            'fieldName': 'CAP1_R300_C6',
            'weight': 1,
            'msg': Drupal.t('Cod eroare: 29-001 Rind.1 COL1 >= Rind(2+3+6) COL1  ( @R300_C6 < @R300_C7)', { '@R300_C6': R300_C6, '@R300_C7': R300_C7 })
        });
    }
    // End  29-001




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