// let data = [
//   {id: 1, name: "Generic Steel Chips", price: 151.67, store: "99 Ranch Market", free_return_days: 14, sameItem_Id: '[]'},
//   {id: 2, name: "Handcrafted Metal Bike", price: 122.87, store: "Best Buy", free_return_days: 5, sameItem_Id: '[]'},
//   {id: 3, name: "Handcrafted Concrete Ball", price: 11.33, store: "Boxed", free_return_days: 13, sameItem_Id: '[]'},
//   {id: 4, name: "Fantastic Concrete Fish", price: 114.98, store: "99 Ranch Market", free_return_days: 13, sameItem_Id: '[]'},
//   {id: 5, name: "Unbranded Metal Mouse", price: 14.52, store: "Bargains N More", free_return_days: 10, sameItem_Id: '[]'},
//   {id: 6, name: "Handmade Wooden Bacon", price: 229.81, store: "Target", free_return_days: 17, sameItem_Id: '[]'},
//   {id: 7, name: "Small Granite Fish", price: 98.57, store: "Bargains N More", free_return_days: 16, sameItem_Id: '[]'},
//   {id: 8, name: "Intelligent Concrete Gloves", price: 65.78, store: "Yobys", free_return_days: 7, sameItem_Id: '[]'},
//   {id: 9, name: "Licensed Plastic Keyboard", price: 53.48, store: "Best Buy", free_return_days: 16, sameItem_Id: '[]'},
//   {id: 10, name: "Gorgeous Metal Keyboard", price: 91.32, store: "Target", free_return_days: 15, sameItem_Id: '[]'},
//   {id: 11, name: "Fantastic Fresh Gloves", price: 226.09, store: "Target", free_return_days: 10, sameItem_Id: '[]'},
//   {id: 12, name: "Handcrafted Frozen Shoes", price: 198.83, store: "Target", free_return_days: 14, sameItem_Id: '[]'},
//   {id: 13, name: "Handcrafted Granite Chips", price: 88.42, store: "Best Buy", free_return_days: 15, sameItem_Id: '[]'},
//   {id: 14, name: "Refined Steel Chips", price: 40.5, store: "Overstock", free_return_days: 11, sameItem_Id: '[]'},
//   {id: 15, name: "Incredible Steel Towels", price: 123.75, store: "Overstock", free_return_days: 14, sameItem_Id: '[]'},
//   {id: 16, name: "Incredible Granite Car", price: 179.14, store: "Yobys", free_return_days: 6, sameItem_Id: '[]'},
//   {id: 17, name: "Gorgeous Rubber Salad", price: 12.13, store: "Target", free_return_days: 13, sameItem_Id: '[]'},
//   {id: 18, name: "Rustic Granite Bike", price: 95.74, store: "Target", free_return_days: 14, sameItem_Id: '[]'},
//   {id: 19, name: "Handmade Fresh Hat", price: 169.11, store: "Bargains N More", free_return_days: 14, sameItem_Id: '[]'},
//   {id: 20, name: "Tasty Plastic Cheese", price: 241.62, store: "Best Buy", free_return_days: 8, sameItem_Id: '[]'},
//   {id: 21, name: "Intelligent Soft Computer", price: 51.45, store: "Boxed", free_return_days: 11, sameItem_Id: '[]'},
//   {id: 22, name: "Refined Concrete Fish", price: 26.75, store: "Boxed", free_return_days: 14, sameItem_Id: '[]'},
//   {id: 23, name: "Sleek Cotton Soap", price: 53.12, store: "99 Ranch Market", free_return_days: 14, sameItem_Id: '[]'},
//   {id: 24, name: "Generic Fresh Bacon", price: 241.7, store: "Target", free_return_days: 13, sameItem_Id: '[]'},
//   {id: 25, name: "Gorgeous Wooden Salad", price: 193.58, store: "Yobys", free_return_days: 15, sameItem_Id: '[]'},
//   {id: 26, name: "Handcrafted Wooden Chair", price: 234.83, store: "Target", free_return_days: 15, sameItem_Id: '[]'},
//   {id: 27, name: "Licensed Steel Ball", price: 205.96, store: "Overstock", free_return_days: 15, sameItem_Id: '[]'},
//   {id: 28, name: "Incredible Rubber Chair", price: 90.48, store: "Yobys", free_return_days: 8, sameItem_Id: '[]'},
//   {id: 29, name: "Ergonomic Concrete Shirt", price: 101.33, store: "Yobys", free_return_days: 12, sameItem_Id: '[]'},
//   {id: 30, name: "Practical Wooden Shirt", price: 59.05, store: "99 Ranch Market", free_return_days: 12, sameItem_Id: '[]'},
//   {id: 31, name: "Gorgeous Metal Pizza", price: 7.03, store: "Bargains N More", free_return_days: 9, sameItem_Id: '[]'},
//   {id: 32, name: "Handmade Plastic Ball", price: 106.36, store: "Costco", free_return_days: 10, sameItem_Id: '[]'},
//   {id: 33, name: "Handcrafted Plastic Tuna", price: 209.65, store: "Bargains N More", free_return_days: 10, sameItem_Id: '[]'},
//   {id: 34, name: "Intelligent Cotton Cheese", price: 245.83, store: "Best Buy", free_return_days: 17, sameItem_Id: '[]'},
//   {id: 35, name: "Refined Cotton Chips", price: 36.33, store: "Google Store", free_return_days: 4, sameItem_Id: '[]'},
//   {id: 36, name: "Handcrafted Soft Keyboard", price: 133.2, store: "Google Store", free_return_days: 6, sameItem_Id: '[]'},
//   {id: 37, name: "Tasty Rubber Cheese", price: 73.34, store: "99 Ranch Market", free_return_days: 12, sameItem_Id: '[]'},
//   {id: 38, name: "Sleek Soft Chair", price: 220.51, store: "Best Buy", free_return_days: 16, sameItem_Id: '[]'},
//   {id: 39, name: "Gorgeous Cotton Table", price: 29.08, store: "Bargains N More", free_return_days: 9, sameItem_Id: '[]'},
//   {id: 40, name: "Small Cotton Sausages", price: 85.41, store: "Costco", free_return_days: 6, sameItem_Id: '[]'},
//   {id: 41, name: "Licensed Plastic Bike", price: 49.74, store: "Boxed", free_return_days: 9, sameItem_Id: '[]'},
//   {id: 42, name: "Licensed Wooden Gloves", price: 204.14, store: "Costco", free_return_days: 12, sameItem_Id: '[]'},
//   {id: 43, name: "Gorgeous Granite Chair", price: 216.15, store: "Best Buy", free_return_days: 8, sameItem_Id: '[]'},
//   {id: 44, name: "Tasty Frozen Chicken", price: 177.62, store: "Best Buy", free_return_days: 9, sameItem_Id: '[]'},
//   {id: 45, name: "Incredible Wooden Tuna", price: 58.05, store: "Best Buy", free_return_days: 12, sameItem_Id: '[]'},
//   {id: 46, name: "Awesome Soft Hat", price: 208.61, store: "Bargains N More", free_return_days: 7, sameItem_Id: '[]'},
//   {id: 47, name: "Tasty Steel Ball", price: 194.58, store: "Target", free_return_days: 15, sameItem_Id: '[]'},
//   {id: 48, name: "Sleek Fresh Shirt", price: 212.91, store: "Bargains N More", free_return_days: 14, sameItem_Id: '[]'},
//   {id: 49, name: "Refined Granite Hat", price: 19.98, store: "Yobys", free_return_days: 14, sameItem_Id: '[]'},
//   {id: 50, name: "Refined Frozen Gloves", price: 236.76, store: "Target", free_return_days: 10, sameItem_Id: '[]'},
//   {id: 51, name: "Refined Steel Bike", price: 56.14, store: "Target", free_return_days: 8, sameItem_Id: '[]'},
//   {id: 52, name: "Incredible Cotton Keyboard", price: 202.09, store: "Overstock", free_return_days: 16, sameItem_Id: '[]'},
//   {id: 53, name: "Handmade Metal Shirt", price: 8.38, store: "Overstock", free_return_days: 4, sameItem_Id: '[]'},
//   {id: 54, name: "Handcrafted Metal Towels", price: 15.46, store: "Yobys", free_return_days: 12, sameItem_Id: '[]'},
//   {id: 55, name: "Rustic Rubber Hat", price: 228.81, store: "Costco", free_return_days: 14, sameItem_Id: '[]'},
//   {id: 56, name: "Rustic Soft Bacon", price: 133.5, store: "Google Store", free_return_days: 16, sameItem_Id: '[]'},
//   {id: 57, name: "Sleek Granite Table", price: 66.15, store: "Boxed", free_return_days: 5, sameItem_Id: '[]'},
//   {id: 58, name: "Intelligent Granite Table", price: 186, store: "Best Buy", free_return_days: 15, sameItem_Id: '[]'},
//   {id: 59, name: "Licensed Steel Shoes", price: 125.73, store: "Target", free_return_days: 11, sameItem_Id: '[]'},
//   {id: 60, name: "Refined Wooden Gloves", price: 170.18, store: "Target", free_return_days: 14, sameItem_Id: '[]'},
//   {id: 61, name: "Generic Soft Chicken", price: 135.85, store: "Boxed", free_return_days: 5, sameItem_Id: '[]'},
//   {id: 62, name: "Handmade Concrete Table", price: 8.95, store: "Costco", free_return_days: 12, sameItem_Id: '[]'},
//   {id: 63, name: "Tasty Steel Chair", price: 218.39, store: "Google Store", free_return_days: 12, sameItem_Id: '[]'},
//   {id: 64, name: "Incredible Granite Towels", price: 203.53, store: "99 Ranch Market", free_return_days: 13, sameItem_Id: '[]'},
//   {id: 65, name: "Handcrafted Fresh Fish", price: 51.72, store: "Costco", free_return_days: 14, sameItem_Id: '[]'},
//   {id: 66, name: "Sleek Steel Pants", price: 115.06, store: "Overstock", free_return_days: 4, sameItem_Id: '[]'},
//   {id: 67, name: "Tasty Granite Chair", price: 125.52, store: "Costco", free_return_days: 9, sameItem_Id: '[]'},
//   {id: 68, name: "Unbranded Granite Pizza", price: 76.81, store: "Target", free_return_days: 17, sameItem_Id: '[]'},
//   {id: 69, name: "Sleek Fresh Pizza", price: 94.22, store: "Overstock", free_return_days: 9, sameItem_Id: '[]'},
//   {id: 70, name: "Practical Steel Mouse", price: 133.54, store: "Costco", free_return_days: 15, sameItem_Id: '[]'},
//   {id: 71, name: "Sleek Metal Sausages", price: 222.31, store: "Best Buy", free_return_days: 4, sameItem_Id: '[]'},
//   {id: 72, name: "Handcrafted Concrete Hat", price: 188.28, store: "Overstock", free_return_days: 7, sameItem_Id: '[]'},
//   {id: 73, name: "Unbranded Concrete Soap", price: 199.84, store: "99 Ranch Market", free_return_days: 5, sameItem_Id: '[]'},
//   {id: 74, name: "Generic Wooden Shoes", price: 62.77, store: "Best Buy", free_return_days: 16, sameItem_Id: '[]'},
//   {id: 75, name: "Awesome Rubber Gloves", price: 243.08, store: "99 Ranch Market", free_return_days: 4, sameItem_Id: '[]'},
//   {id: 76, name: "Sleek Rubber Soap", price: 88.3, store: "Yobys", free_return_days: 14, sameItem_Id: '[]'},
//   {id: 77, name: "Licensed Fresh Chips", price: 176.57, store: "Best Buy", free_return_days: 11, sameItem_Id: '[]'},
//   {id: 78, name: "Tasty Soft Mouse", price: 122.51, store: "Best Buy", free_return_days: 10, sameItem_Id: '[]'},
//   {id: 79, name: "Unbranded Wooden Car", price: 197.96, store: "Google Store", free_return_days: 7, sameItem_Id: '[]'},
//   {id: 80, name: "Incredible Frozen Mouse", price: 26.26, store: "Bargains N More", free_return_days: 14, sameItem_Id: '[]'},
//   {id: 81, name: "Licensed Steel Tuna", price: 167.27, store: "Costco", free_return_days: 10, sameItem_Id: '[]'},
//   {id: 82, name: "Practical Cotton Shirt", price: 206.9, store: "Costco", free_return_days: 5, sameItem_Id: '[]'},
//   {id: 83, name: "Refined Rubber Chicken", price: 11.37, store: "Boxed", free_return_days: 10, sameItem_Id: '[]'},
//   {id: 84, name: "Unbranded Concrete Chicken", price: 155.28, store: "Google Store", free_return_days: 10, sameItem_Id: '[]'},
//   {id: 85, name: "Rustic Plastic Soap", price: 166.16, store: "Overstock", free_return_days: 6, sameItem_Id: '[]'},
//   {id: 86, name: "Intelligent Steel Fish", price: 148.38, store: "Google Store", free_return_days: 15, sameItem_Id: '[]'},
//   {id: 87, name: "Refined Concrete Cheese", price: 89.93, store: "Yobys", free_return_days: 10, sameItem_Id: '[]'},
//   {id: 88, name: "Fantastic Steel Soap", price: 150.46, store: "Costco", free_return_days: 5, sameItem_Id: '[]'},
//   {id: 89, name: "Fantastic Steel Soap", price: 147.57, store: "Bargains N More", free_return_days: 5, sameItem_Id: '[]'},
//   {id: 90, name: "Handcrafted Cotton Ball", price: 210.22, store: "Best Buy", free_return_days: 6, sameItem_Id: '[]'},
//   {id: 91, name: "Incredible Frozen Pizza", price: 38.15, store: "Best Buy", free_return_days: 14, sameItem_Id: '[]'},
//   {id: 92, name: "Sleek Fresh Pants", price: 80.71, store: "Overstock", free_return_days: 10, sameItem_Id: '[93]'},
//   {id: 93, name: "Sleek Fresh Pants", price: 90.71, store: "Yobys", free_return_days: 12, sameItem_Id: '[92]'},
//   {id: 94, name: "Rustic Plastic Computer", price: 219.75, store: "Overstock", free_return_days: 15, sameItem_Id: '[95]'},
//   {id: 95, name: "Rustic Plastic Computer", price: 89.01, store: "Best Buy", free_return_days: 10, sameItem_Id: '[94]'},
//   {id: 96, name: "Small Steel Shoes", price: 162.32, store: "Target", free_return_days: 17, sameItem_Id: '[97]'},
//   {id: 97, name: "Small Steel Shoes", price: 86.47, store: "Bargains N More", free_return_days: 11, sameItem_Id: '[96]'},
//   {id: 98, name: "Unbranded Granite Car", price: 195.31, store: "Google Store", free_return_days: 13, sameItem_Id: '[99, 100]'},
//   {id: 99, name: "Unbranded Granite Car", price: 200.47, store: "Overstock", free_return_days: 17, sameItem_Id: '[98, 100]'},
//   {id: 100, name: "Unbranded Granite Car", price: 190.50, store: "Costco", free_return_days: 15, sameItem_Id: '[98, 99]'}
// ]

// module.exports.data = data;