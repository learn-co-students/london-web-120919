class Ingredient < ApplicationRecord
    has_many :allergies
    has_many :users, through: :allergies
    has_many :recipe_ingredients
    has_many :recipes, through: :recipe_ingredients

    def num_users_allergic
        self.users.size
    end

    def recipe_names
        self.recipes.map{|r| r.name}.join(', ')
    end

    def self.all_sorted_by_num_allergic
        self.all.sort_by{|ingredient| -ingredient.num_users_allergic }
    end
end
