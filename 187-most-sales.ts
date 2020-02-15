interface SalesDB {
  products: string[];
  amounts: number[];
  prices: number[];
}

interface Product {
  name: string;
  sold: number;
  price: number;
  revenue: number;
}

/**
 * Get an array of names of the most valuable products 
 */
function mostSales(db: SalesDB): string[] {
  const products: Product[] = salesDbToProducts(db);
  return mostValuableProducts(products).map(p => p.name);
}

/**
 * Normalize the DB into a Product list
 */
function salesDbToProducts(db: SalesDB): Product[] {
  return db.products.map((p, idx) => ({
    name: p,
    sold: db.amounts[idx],
    price: db.prices[idx],
    revenue: db.amounts[idx] * db.prices[idx]
  }));
}

/**
 * Return a list of products with the highest revenue
 * Typically this will return one product but can return multiple if they
 * have the same revenue
 */
function mostValuableProducts(products: Product[]): Product[] {
  return products.reduce((acc: Product[], cur, idx, arr) => {
    if (acc.every(p => p.revenue === cur.revenue)) {
      return [...acc, cur];
    } else if (acc.every(p => p.revenue < cur.revenue)) {
      return [cur];
    } else {
      return acc;
    }
  }, []);
}

(function main(): void {
  const tests: [SalesDB, string[]][] = [
    [
      {
        products: ["Computer", "Cell Phones", "Vacuum Cleaner"],
        amounts: [3, 24, 8],
        prices: [199, 299, 399]
      },
      ["Cell Phones"]
    ],
    [
      {
        products: [
          "Cell Phones",
          "Vacuum Cleaner",
          "Computer",
          "Autos",
          "Gold",
          "Fishing Rods",
          "Lego",
          "Speakers"
        ],
        amounts: [0, 12, 24, 17, 19, 23, 120, 8],
        prices: [9, 24, 29, 31, 51, 8, 120, 14]
      },
      ["Lego"]
    ]
  ];

  for (const [test, expected] of tests) {
    console.log(mostSales(test), expected, test);
  }
})();
