const rolePermission = {
    Admin : [
        "GET category",                        //get all active store categories
        "GET /",                                //get all categories
        "POST /category/list",                  //add category
        "PUT /api/category/:id",                             //update category
        "DELETE /delete/:id",                   //delete category

        "GET /api/product/",                        //get all products
        "POST /api/product/add",                    //add product
        "PUT /api/product/:id",                     //update product by id
        "DELETE /api/product/delete/:id",           //delete product

        "GET /api/brand/brands",                    //get all active brands
        "GET /api/brand/brand",                     //get brands based on role
        "GET /api/brand/brand/list/select",          //get brand list for selection
        "POST /api/brand/add",                      //add brand
        "PUT /api/brand/:id",                       //update brand
        "DELETE /api/brand/delete/:id",             //delete brand
    ],

    Distributor : [
        "GET /api/category",                      //get all active store categories
        "DELETE /api/delete/:id",                 //delete category
        
        "GET /api/product/",                      //get all products
        "POST /api/product/add",                  //add product
        
        "GET /api/brand/brands",                  //get all active brands
        "POST /api/brand/add",                    //add brand
    ]
};

module.exports = rolePermission;