const rolePermission = {
    Admin : {
        category : ["view", "add","edit"],
        products : ["view","edit", "delete"],
        brands : ["view", "add", "edit", "delete"],
        usres : ["view", "edit"],
        reviews : ["view", "delete"],
        wishlist : ["view","add", "delete"],
        createroles : ["view", "add", "edit", "delete"],
        assignroles : ["view", "add"],
    },

    Distributor : {
        category : ["view", "delete"],
        products : ["view", "add"],
        brands : ["view", "add"],
        reviews : ["view"],
        wishlist : ["view", "add", "delete"],
    }
};

module.exports = rolePermission;