



        SELECT 
        
            CUIIO,
            COUNT (*) AS CNT 
        
        
        FROM CIS2.VW_DATA_ALL
        
        WHERE 
        
        FORM = 34
        AND PERIOADA = 2010 
        
        GROUP BY 
        CUIIO
        
        ORDER BY 
        COUNT (*) DESC