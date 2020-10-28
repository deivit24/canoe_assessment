-- PostgreSQL syntax

SELECT code,AVG(govt_debt) AS average_gov_debt, (SELECT SUM(gdp_per_capita) FROM countries 
WHERE gdp_per_capita > 40000 AND year >= EXTRACT(YEAR FROM CURRENT_DATE) -4) AS sum_of_all_over_40k,
ROUND((AVG(govt_debt)/(SELECT SUM(gdp_per_capita) FROM countries WHERE gdp_per_capita > 40000 AND year >= EXTRACT(YEAR FROM CURRENT_DATE) -4))*100,2) AS percent_of_all_over_40k
FROM countries WHERE gdp_per_capita > 40000 AND year >= EXTRACT(YEAR FROM CURRENT_DATE) - 4 GROUP BY code ORDER BY AVG(govt_debt) DESC LIMIT 3;



