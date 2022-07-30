export const createProduct = `
INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)
`;

export const getAllProducts = 'SELECT * FROM Trybesmith.Products';
