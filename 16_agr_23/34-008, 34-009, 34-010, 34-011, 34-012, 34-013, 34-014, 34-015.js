for (var i = 1; i <= 1; i++) {

    // Initialize all variables to 0
    var R0688 = 0, R0689 = 0;
    var R0690 = 0, R0691 = 0;
    var R0692 = 0, R0693 = 0;
    var R0694 = 0, R0695 = 0;
    var R0696 = 0, R0697 = 0;
    var R0698 = 0, R0699 = 0;
    var R0700 = 0, R0701 = 0;
    var R0702 = 0, R0703 = 0;

    // Fetch values ensuring they are numbers, default to 0 if NaN
    R0688 = !isNaN(Number(values["CAP11_R0688_C" + i])) ? Number(values["CAP11_R0688_C" + i]) : 0;
    R0689 = !isNaN(Number(values["CAP11_R0689_C" + i])) ? Number(values["CAP11_R0689_C" + i]) : 0;
    if ((R0688 > 0 && R0689 == 0) || (R0689 > 0 && R0688 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP11_R0688_C' + i,
            'weight': 8,
            'msg': Drupal.t('Cod eroare: 34-008. Daca Rind.0689 <> 0, atunci Rind.0688 <> 0 si invers - [@R0689, @R0688]', { '@R0689': R0689, '@R0688': R0688 })
        });
    }

    R0690 = !isNaN(Number(values["CAP11_R0690_C" + i])) ? Number(values["CAP11_R0690_C" + i]) : 0;
    R0691 = !isNaN(Number(values["CAP11_R0691_C" + i])) ? Number(values["CAP11_R0691_C" + i]) : 0;
    if ((R0690 > 0 && R0691 == 0) || (R0691 > 0 && R0690 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP11_R0690_C' + i,
            'weight': 9,
            'msg': Drupal.t('Cod eroare: 34-009. Daca Rind.0691 <> 0, atunci Rind.0690 <> 0 si invers - [@R0691, @R0690]', { '@R0691': R0691, '@R0690': R0690 })
        });
    }

    R0692 = !isNaN(Number(values["CAP11_R0692_C" + i])) ? Number(values["CAP11_R0692_C" + i]) : 0;
    R0693 = !isNaN(Number(values["CAP11_R0693_C" + i])) ? Number(values["CAP11_R0693_C" + i]) : 0;
    if ((R0692 > 0 && R0693 == 0) || (R0693 > 0 && R0692 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP11_R0692_C' + i,
            'weight': 10,
            'msg': Drupal.t('Cod eroare: 34-010. Daca Rind.0693 <> 0, atunci Rind.0692 <> 0 si invers - [@R0693, @R0692]', { '@R0693': R0693, '@R0692': R0692 })
        });
    }

    R0694 = !isNaN(Number(values["CAP11_R0694_C" + i])) ? Number(values["CAP11_R0694_C" + i]) : 0;
    R0695 = !isNaN(Number(values["CAP11_R0695_C" + i])) ? Number(values["CAP11_R0695_C" + i]) : 0;
    if ((R0694 > 0 && R0695 == 0) || (R0695 > 0 && R0694 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP11_R0694_C' + i,
            'weight': 11,
            'msg': Drupal.t('Cod eroare: 34-011. Daca Rind.0695 <> 0, atunci Rind.0694 <> 0 si invers - [@R0695, @R0694]', { '@R0695': R0695, '@R0694': R0694 })
        });
    }

    R0696 = !isNaN(Number(values["CAP11_R0696_C" + i])) ? Number(values["CAP11_R0696_C" + i]) : 0;
    R0697 = !isNaN(Number(values["CAP11_R0697_C" + i])) ? Number(values["CAP11_R0697_C" + i]) : 0;
    if ((R0696 > 0 && R0697 == 0) || (R0697 > 0 && R0696 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP11_R0696_C' + i,
            'weight': 12,
            'msg': Drupal.t('Cod eroare: 34-012. Daca Rind.0697 <> 0, atunci Rind.0696 <> 0 si invers - [@R0697, @R0696]', { '@R0697': R0697, '@R0696': R0696 })
        });
    }

    R0698 = !isNaN(Number(values["CAP11_R0698_C" + i])) ? Number(values["CAP11_R0698_C" + i]) : 0;
    R0699 = !isNaN(Number(values["CAP11_R0699_C" + i])) ? Number(values["CAP11_R0699_C" + i]) : 0;
    if ((R0698 > 0 && R0699 == 0) || (R0699 > 0 && R0698 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP11_R0698_C' + i,
            'weight': 13,
            'msg': Drupal.t('Cod eroare: 34-013. Daca Rind.0699 <> 0, atunci Rind.0698 <> 0 si invers - [@R0699, @R0698]', { '@R0699': R0699, '@R0698': R0698 })
        });
    }

    R0700 = !isNaN(Number(values["CAP11_R0700_C" + i])) ? Number(values["CAP11_R0700_C" + i]) : 0;
    R0701 = !isNaN(Number(values["CAP11_R0701_C" + i])) ? Number(values["CAP11_R0701_C" + i]) : 0;
    if ((R0700 > 0 && R0701 == 0) || (R0701 > 0 && R0700 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP11_R0700_C' + i,
            'weight': 14,
            'msg': Drupal.t('Cod eroare: 34-014. Daca Rind.0701 <> 0, atunci Rind.0700 <> 0 si invers - [@R0701, @R0700]', { '@R0701': R0701, '@R0700': R0700 })
        });
    }

    R0702 = !isNaN(Number(values["CAP11_R0702_C" + i])) ? Number(values["CAP11_R0702_C" + i]) : 0;
    R0703 = !isNaN(Number(values["CAP11_R0703_C" + i])) ? Number(values["CAP11_R0703_C" + i]) : 0;
    if ((R0702 > 0 && R0703 == 0) || (R0703 > 0 && R0702 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP11_R0702_C' + i,
            'weight': 15,
            'msg': Drupal.t('Cod eroare: 34-015. Daca Rind.0703 <> 0, atunci Rind.0702 <> 0 si invers - [@R0703, @R0702]', { '@R0703': R0703, '@R0702': R0702 })
        });
    }
}
