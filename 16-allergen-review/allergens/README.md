## Rails Recipes Mini Project

In this project, we will be practicing object relationships in Rails. We will be building out a domain model in which a User can author a recipe. A single Recipe `belongs_to` a user. A Recipe also has many Ingredients, while a single Ingredient can be found in many Recipes. There are Ingredients that some Users may be allergic to. **Build out full CRUD functionality as well as validations for this app.**

## Deliverables

### `Recipe`

- `index`––show all recipe instances, with the ability to sort by number of ingredients. You can use a [search for this feature](http://guides.rubyonrails.org/form_helpers.html#a-generic-search-form)
- `new`––ability to create a new recipe and associate it with a particular user. You may want to look into [collection select](http://api.rubyonrails.org/v5.2.0/classes/ActionView/Helpers/FormBuilder.html#method-i-collection_select)

### `User`

- `show` page for a user. This should include all of the recipes that a user has authored.
- The ability to delete a user should also exist

### `Ingredient`

- `index` should show all ingredients, sorted by the number of users allergic to it. For example, if several users are allergic to peanut butter, it should appear higher on the list. You might want to look into [ActiveRecord Query Methods](https://guides.rubyonrails.org/active_record_querying.html)
- `show` a particular ingredient. I should be able to see all of the recipes that an ingredient appears in

### `**Bonus**`

- Add [bootstrap for styling](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

### Allergy

### RecipeIngredient
