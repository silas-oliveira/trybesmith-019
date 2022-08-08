export const createProduct = `
INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)
`;

export const getAllProducts = 'SELECT * FROM Trybesmith.Products';

export const createUser = `INSERT INTO Trybesmith.Users (username, classe, level, password)
  values (?, ?, ?, ?)`;

export const getAllOrders = `SELECT O.id, O.userId, P.id AS productsIds
    FROM Trybesmith.Orders AS O
    INNER JOIN Trybesmith.Products AS P 
    ON O.id = P.orderId
    ORDER BY O.userId
  `;