class Recipe < ApplicationRecord
  belongs_to :user
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients

  def self.all_sorted_by_ingredients
    self.all.sort_by{|r| -r.ingredients.size }
  end

  def ingredient_names
    self.ingredients.map{|i| i.name }.join(", ")
  end
end
