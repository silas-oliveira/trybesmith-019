export const createProduct = `
INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)
`;

export const getAllProducts = 'SELECT * FROM Trybesmith.Products';

export const createUser = `INSERT INTO Trybesmith.Users (username, classe, level, password)
  values (?, ?, ?, ?)`;