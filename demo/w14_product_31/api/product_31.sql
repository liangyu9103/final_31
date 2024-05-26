CREATE TABLE product_31 (
    id int NOT NULL PRIMARY KEY,
    /*varchar:變動資源*/
    /*(225):最多225字*/
    title varchar(225),
    /*real:實數*/
    price real,
    category varchar(225),
    img varchar(225),
    remote_url text
)

INSERT INTO product_31 (id, title, price, category, img, remote_url)
VALUES
(1, 'Emperor Bed', 21.99, 'Liddy', './images/product-1.jpg', ''),
(2, 'Accent Chair', 25.99, 'Caressa', './images/product-2.jpg', ''),
(3, 'High-Back Bench', 9.99, 'Ikea', './images/product-3.jpg', ''),
(4, 'Wooden Table', 19.99, 'Ikea', './images/product-4.jpg', ''),
(5, 'Dining Table', 6.99, 'Caressa', './images/product-5.jpg', ''),
(6, 'Entertainmint Center', 69.99, 'Liddy', './images/product-6.jpg', ''),
(7, 'Albany Sectional', 10.99, 'Ikea', './images/product-7.jpg', ''),
(8, 'Sofa Set', 69.99, 'Liddy', './images/product-8.jpg', '')

INSERT INTO product_31 (id, title, price, category, img, remote_url)
VALUES
(20, 'living room', 99.99, 'Liddy', './images/product-20.jpg', 'https://szbwskgtksqzkhaokhez.supabase.co/storage/v1/object/public/demo/1122/shche_-team-cwMr5XYhNew-unsplash.jpg'),


INSERT INTO product_31 (id, title, price, category, img, remote_url)
VALUES
(1, 'Emperor Bed', 21.99, 'Liddy', './images/product-1.jpg', ''),
(2, 'Accent Chair', 25.99, 'Caressa', './images/product-2.jpg', ''),
(3, 'High-Back Bench', 9.99, 'Ikea', './images/product-3.jpg', ''),
(4, 'Wooden Table', 19.99, 'Ikea', './images/product-4.jpg', ''),
(5, 'Dining Table', 6.99, 'Caressa', './images/product-5.jpg', ''),
(6, 'Entertainmint Center', 69.99, 'Liddy', './images/product-6.jpg', ''),
(7, 'Albany Sectional', 10.99, 'Ikea', './images/product-7.jpg', ''),
(8, 'Sofa Set', 69.99, 'Liddy', './images/product-8.jpg', ''),
(9, 'Utopia Sofa', 69.99, 'Liddy', './images/product-9.jpg', ''),
(10, 'Modern Bookshelf', 8.99, 'Marcos', './images/product-10.jpg', ''),
(11, 'Albany Table', 79.99, 'Marcos', './images/product-11.jpg', ''),
(12, 'Leather Sofa', 39.99, 'Liddy', './images/product-12.jpg', ''),
