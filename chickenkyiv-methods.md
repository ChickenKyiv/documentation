# ChickenKyiv Methods

| **Methods** | **Attributes** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Get list of all created Menus. Each menu contain an array of recipe ids.                                                                                     **Query GetMenus\(\)** |  |
|  |  |
|  |  |
| Get single Menu                                                                        **Query GetMenu\(id\)** | by passing menu id |
| Get latest published menu. return only one last menu from database. Later use GetMenu query by passing second variable, like \`latest=true\`                                                        **Query GetLatestMenu\(\)** |  |
| It'll have 2 ways - ASC/DESC for filtration                              **Query GetMenuByDate\(\)** |  |
| **Get Menu object with all data inside Query GetMenuFull\(\)** | by passing menu id |
|  |  |
| **Get list with all created recipes Query GetRecipes\(\)** |  |
| **Get one recipe Query GetRecipe\(id\)** | by passing recipe id |
| **Get recipe connected with other tables in order to form an object with all recipe data inside, that can be displayed on page Query Get FullRecipe\(id\)** {   recipe    ingredients   attributes meta directions } | by passing recipe id |
| **Get list of ingredients from one recipe Query GetRecipeIngredients\(recipe\_id\)** | by passing recipe id |
| **Find recipe by name Query** GetRecipeIngredients by name | by passing name \(string\) |
| **Get ingredients list from one grocery list, group by departments Query** Get ingredients, grouped by departments**Query** grocery\_id -&gt; departments -&gt; ingredientsrecipe\_id |  |
| **Return grocery list object, with all related data inside Query GenerateGrocery\(menu\_id\)**grocery  departments  ingredientsrecipe\_idrecipe\_name |  |
| **return oauth token that used in login functionality Query GenerateLoginToken\(\)** |  |

