const express = require("express");
const { isAdmin, requireSignIn } = require("./../middlewares/authMiddleware");
const { createCategoryController,
    updateCategoryController,
    categoryController,
    singleCategoryController,
    deleteCategoryController } = require("../controllers/createCategoryController");

const router = express.Router()


//routes
// create category
router.post(
    "/create-category",
    requireSignIn,
    isAdmin,
    createCategoryController
);

// update category
router.put(
    '/update-category/:id',
    requireSignIn,
    isAdmin,
    updateCategoryController
);

// getAll category
router.get(
    '/get-category',
    categoryController
);
// single category
router.get(
    '/single-category/:slug',
    singleCategoryController
);

// Delete category
router.delete(
    '/delete-category/:id',
    requireSignIn,
    isAdmin,
    deleteCategoryController
);

module.exports = router;
