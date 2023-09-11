const express = require("express");
const router = express.Router();

const {
  create: createBlog,
  read: readBlog,
  delete: deleteBlog,
  update: updateBlog,
} = require("../Controllers/blogController");

const {
  create: createComment,
  read: readComment,
  delete: deleteComment,
  update: updateComment,
} = require("../Controllers/commentController");

const {
  create: createMessage,
  read: readMessage,
  delete: deleteMessage,
  update: updateMessage,
} = require("../Controllers/messageController");

const {
  create: createPortfolio,
  read: readPortfolio,
  delete: deletePortfolio,
  update: updatePortfolio,
} = require("../Controllers/portfolioController");

const {
  create: createProduct,
  read: readProduct,
  delete: deleteProduct,
  update: updateProduct,
} = require("../Controllers/productController");

router.get("/blogs/create", createBlog);
router.get("/blogs/read", readBlog);
router.get("/blogs/delete", deleteBlog);
router.get("/blogs/update", updateBlog);

router.get("/comments/create", createComment);
router.get("/comments/read", readComment);
router.get("/comments/delete", deleteComment);
router.get("/comments/update", updateComment);

router.get("/messages/create", createMessage);
router.get("/messages/read", readMessage);
router.get("/messages/delete", deleteMessage);
router.get("/messages/update", updateMessage);

router.get("/portfolios/create", createPortfolio);
router.get("/portfolios/read", readPortfolio);
router.get("/portfolios/delete", deletePortfolio);
router.get("/portfolios/update", updatePortfolio);

router.get("/products/create", createProduct);
router.get("/products/read", readProduct);
router.get("/products/delete", deleteProduct);
router.get("/products/update", updateProduct);

module.exports = router;
