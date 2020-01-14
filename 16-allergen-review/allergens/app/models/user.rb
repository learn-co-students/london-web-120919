class User < ApplicationRecord
    has_many :allergies, dependent: :destroy
    has_many :ingredients, through: :allergies
    has_many :recipes, dependent: :destroy
    
end
