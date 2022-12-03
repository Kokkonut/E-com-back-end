// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');



//Catergory / Product Joins
Category.hasMany(Product, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
  foreignKey: 'id',
});



// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
