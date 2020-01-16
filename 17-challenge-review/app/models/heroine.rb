class Heroine < ApplicationRecord
    has_many :heroine_powers
    has_many :powers, through: :heroine_powers

    validates :name, :super_name, { presence: true, uniqueness: true }

    # def power_ids= (id)

    # end
end
