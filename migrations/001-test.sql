-- up
CREATE TABLE Product (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    category TEXT,
    price INTEGER,
    status BOOLEAN NOT NULL CHECK (status IN (0, 1)),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

insert into Product (name, category, price, status) values ("product 1", "category A", 10000, 1);
insert into Product (name, category, price, status) values ("product 2", "category B", 20000, 0);

-- down
DROP TABLE Product;
