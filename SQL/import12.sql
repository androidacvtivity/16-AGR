WITH src AS (
    SELECT /*+ NO_MERGE */
           f.FORMID,
           f.DATA_REG,
           XMLTYPE(f.XML) AS XML_DOC
    FROM USER_BANCU.F_XML_FORMS f
    WHERE f.DATA_REG >= DATE '2026-04-01'
      AND f.FORM_TYPE = '16_agr_23'
      AND f.STATUS = 5
),
xml_nodes AS (
    SELECT
        f.FORMID,
        f.DATA_REG,
        n.COLUMN_VALUE.GETROOTELEMENT() AS XML_NODE_NAME,
        TRIM(EXTRACTVALUE(n.COLUMN_VALUE, '/*/text()')) AS XML_NODE_VALUE,
        EXTRACTVALUE(f.XML_DOC, '/dec/DataSet/Header/CUIIO') AS XML_CUIIO,
        EXTRACTVALUE(f.XML_DOC, '/dec/DataSet/Header/ENT_NAME') AS DENUMIRE,
        EXTRACTVALUE(f.XML_DOC, '/dec/DataSet/Header/IDNO') AS XML_IDNO
    FROM src f,
         TABLE(XMLSEQUENCE(EXTRACT(
             f.XML_DOC,
             '/dec/DataSet/Data/CAP11_R0688_C1 |
              /dec/DataSet/Data/CAP11_R0689_C1 |
              /dec/DataSet/Data/CAP11_R0690_C1 |
              /dec/DataSet/Data/CAP11_R0691_C1 |
              /dec/DataSet/Data/CAP11_R0692_C1 |
              /dec/DataSet/Data/CAP11_R0693_C1 |
              /dec/DataSet/Data/CAP11_R0694_C1 |
              /dec/DataSet/Data/CAP11_R0695_C1 |
              /dec/DataSet/Data/CAP11_R0696_C1 |
              /dec/DataSet/Data/CAP11_R0697_C1 |
              /dec/DataSet/Data/CAP11_R0698_C1 |
              /dec/DataSet/Data/CAP11_R0699_C1 |
              /dec/DataSet/Data/CAP11_R0700_C1 |
              /dec/DataSet/Data/CAP11_R0701_C1 |
              /dec/DataSet/Data/CAP11_R0702_C1 |
              /dec/DataSet/Data/CAP11_R0703_C1 |
              /dec/DataSet/Data/CAP11_R0704_C1 |
              /dec/DataSet/Data/CAP11_R0705_C1'
         ))) n
)
SELECT
    REGEXP_SUBSTR(XML_NODE_NAME, 'R[0-9]+') AS MOD_XML_NODE_NAME,
    XML_NODE_NAME,
    XML_NODE_VALUE,
    XML_CUIIO,
    DENUMIRE,
    XML_IDNO,
    DATA_REG
FROM xml_nodes
WHERE XML_NODE_VALUE IS NOT NULL
ORDER BY
    DATA_REG DESC,
    REGEXP_SUBSTR(XML_NODE_NAME, 'R[0-9]+'),
    XML_NODE_NAME;