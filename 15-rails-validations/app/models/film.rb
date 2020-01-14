class Film < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    def average_rating
        if self.reviews.size == 0
            return 'N/A'
        end
        total = self.reviews.reduce(0){|total, review| total + review.rating }
        total / self.reviews.size
    end
end
