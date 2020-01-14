class IngredientsController < ApplicationController

    def index
        @ingredients = Ingredient.all_sorted_by_num_allergic
    end

    def show
        @ingredient = Ingredient.find(params[:id])
    end
end
