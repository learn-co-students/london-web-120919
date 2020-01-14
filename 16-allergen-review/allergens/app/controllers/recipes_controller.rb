class RecipesController < ApplicationController

    def index
        @recipes = params[:sort] ? Recipe.all_sorted_by_ingredients : Recipe.all
    end

    def new
        @recipe = Recipe.new
    end

    def create
        recipe = Recipe.create(recipe_params)
        if recipe.valid?
            redirect_to recipes_path
        else
            redirect_to new_recipe_path
        end
    end

    private

    def recipe_params
        params.require(:recipe).permit(:name, :user_id, ingredient_ids: [])
    end
end
