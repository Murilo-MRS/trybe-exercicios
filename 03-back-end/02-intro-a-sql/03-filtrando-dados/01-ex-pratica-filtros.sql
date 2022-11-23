USE store;
SELECT * FROM itens
WHERE name LIKE 'GR%';

SELECT * FROM supplies
WHERE item_id = 2 ORDER BY supplier_id;

SELECT item_id, price, supplier_id FROM supplies
WHERE supplier_id LIKE '%N%';

SELECT * FROM suppliers
WHERE name LIKE '%LTDA%' ORDER BY name DESC;

SELECT COUNT(*) FROM suppliers
WHERE id LIKE '%F%';

SELECT * FROM supplies
WHERE price BETWEEN 15 AND 40 ORDER BY price;

SELECT COUNT(*) FROM sales
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';