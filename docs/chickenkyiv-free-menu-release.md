---
id: chickenkyiv-free-menu-release
title: ChickenKyiv Free Menu Release API Server
sidebar_label: ChickenKyiv Free Menu Release API Server
---

### API endpoints \( Free Menu Release \)

## Menu

**List of all created menus\(with recipe Ids\)**

Method: GET Path: /api/menu/

Input: JSON with properties ... @TODO finish it

GET [http://localhost:3000/api/menu?access\_token={token}](http://localhost:3000/api/menu?access_token={token})



**Get menu by menu id**

Method: GET Path: /api/menu/{menu\_id}

Input: JSON with properties ...

GET [http://localhost:3000/api/menu/{menu\_id}?access\_token={token}](http://localhost:3000/api/menu/{menu_id}?access_token={token})



**Get latest published menu\(only one\)**

Method: GET Path: /api/menu/last

Input: JSON with properties ...

GET [http://localhost:3000/api/menu/last?access\_token={token}](http://localhost:3000/api/menu/last?access_token={token})



**Filter By Published Date: ASC/DESC**

Method: GET Path: /menu/filter/date

Input: JSON with properties ...



**Get Menu with all data inside**

Method: GET Path: /menu/full

Input: JSON with properties ...



## Recipes

**List with all created recipes**

Method: GET Path: /api/recipe/

Input: JSON with properties ...

GET [http://localhost:3000/api/recipe?access\_token={token}](http://localhost:3000/api/recipe?access_token={token})



**Get recipe by recipe id**

Method: GET

Path: /api/recipe/{id}

Input: JSON with properties ...

GET [http://localhost:3000/api/recipe/{recipe\_id}?access\_token={token}](http://localhost:3000/api/recipe/{recipe_id}?access_token={token})



**Get recipe with all necessary data like ingredients. @TODO Later add stuff like allergies, etc.**

Method: GET

Path: /api/recipe/{id}/full

Input: JSON with properties ...



### GET recipe/:id/full

**Get Ingredients By Recipe id**

Method: GET Path: recipe/{id}/list/ingredients

Input: JSON with properties ...

### [http://localhost:3000/api/recipe/{id}/list/ingredients?recipeId={recipe\_id}&access\_token={token}](http://localhost:3000/api/recipe/{id}/list/ingredients?recipeId={recipe_id}&access_token={token})

###

**Recipes\_Find not sure if i test this URL before**

Method: GET

Path: /api/recipes/recipes\_find

Input: JSON with properties ...

### [http://localhost:3000/explorer/\#!/recipes/recipes\_find](http://localhost:3000/explorer/#!/recipes/recipes_find)

**Get ingredients and display them in list view with directions and link to recipy by recipeId**

Method: GET

Path: /api/grocery/menu?groceryId={groceryId}

Input: JSON with properties ...

### GET [http://localhost:3000/api/grocery/menu?groceryId={grocery\_id}&access\_token={token}](http://localhost:3000/api/grocery/menu?groceryId={grocery_id}&access_token={token})

**Get Grocery List by Menu id**

Method: GET Path: grocery/menu/{id}

### Input: JSON with properties ...



## User

**Generate Login token**

Method: POST Path: /api/customer/customer\_login Input: JSON with properties ... [http://localhost:3000/explorer/\#!/customer/customer\_login](http://localhost:3000/explorer/#!/customer/customer_login) will return a token

### Worked URLs

GET [https://recipe-api-loopback.herokuapp.com/api/menu?access\_token=%token%](https://recipe-api-loopback.herokuapp.com/api/menu?access_token=%token%)

Get list with all created menus\(with recipe Ids\)



GET [https://recipe-api-loopback.herokuapp.com/api/menu/593ac56c2c941720bc3091b1?access\_token=%token%](https://recipe-api-loopback.herokuapp.com/api/menu/593ac56c2c941720bc3091b1?access_token=%token%)

Get one menu by Id



GET [https://recipe-api-loopback.herokuapp.com/api/menu/last?access\_token=%token%](https://recipe-api-loopback.herokuapp.com/api/menu/last?access_token=%token%)

Get only one latest published menu



GET [https://recipe-api-loopback.herokuapp.com/api/recipe?access\_token=%token%](https://recipe-api-loopback.herokuapp.com/api/recipe?access_token=%token%)

Get list with all created recipes



GET [https://recipe-api-loopback.herokuapp.com/api/recipe/593abe383199170e50a5272d?access\_token=%token%](https://recipe-api-loopback.herokuapp.com/api/recipe/593abe383199170e50a5272d?access_token=%token%)

Get one recipe by Id



GET [https://recipe-api-loopback.herokuapp.com/api/recipe/:id/full](https://recipe-api-loopback.herokuapp.com/api/recipe/:id/full)

Get recipe with all necessary data like ingredients.



GET [https://recipe-api-loopback.herokuapp.com/api/grocery/menu?groceryId=594d45227741a0312874c465&access\_token=%token%](https://recipe-api-loopback.herokuapp.com/api/grocery/menu?groceryId=594d45227741a0312874c465&access_token=%token%)

Get ingredients and display them in list view with directions and link to recipy by recipeId



GET [https://recipe-api-loopback.herokuapp.com/api/menu/filter/date](https://recipe-api-loopback.herokuapp.com/api/menu/filter/date)

Filter By Published Date: ASC/DESC



GET [https://recipe-api-loopback.herokuapp.com/api/menu/full](https://recipe-api-loopback.herokuapp.com/api/menu/full)

grocery/menu/:id recipe/:id/list/ingredients

[https://recipe-api-loopback.herokuapp.com/api/recipe/{id}/list/ingredients?recipeId=594d3b97fef8430a3c5eff8d&access\_token=y2GcakK5pffy5LSueSdEQ8i40bkoSQixgZKMwImlyEsMLCrbk4ktjoV0OuxmnWNF](https://recipe-api-loopback.herokuapp.com/api/recipe/{id}/list/ingredients?recipeId=594d3b97fef8430a3c5eff8d&access_token=y2GcakK5pffy5LSueSdEQ8i40bkoSQixgZKMwImlyEsMLCrbk4ktjoV0OuxmnWNF)

[https://recipe-api-loopback.herokuapp.com/explorer/\#!/recipes/recipes\_find](https://recipe-api-loopback.herokuapp.com/explorer/#!/recipes/recipes_find)

[https://recipe-api-loopback.herokuapp.com/api/recipe](https://recipe-api-loopback.herokuapp.com/api/recipe)

[https://recipe-api-loopback.herokuapp.com/api/menu](https://recipe-api-loopback.herokuapp.com/api/menu)

[https://recipe-api-loopback.herokuapp.com/explorer/\#!/customer/customer\_login](https://recipe-api-loopback.herokuapp.com/explorer/#!/customer/customer_login) will return a token
