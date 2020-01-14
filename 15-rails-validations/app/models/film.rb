class Film < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :title, presence: true
    validates :director, presence: true
    validates :genre, { presence: true, inclusion: { in: %w(action comedy romance),
    message: "%{value} is not a valid genre" } }

    validate :date_cannot_be_in_the_future

    def average_rating
        if self.reviews.size == 0
            return 'N/A'
        end
        total = self.reviews.reduce(0){|total, review| total + review.rating }
        total / self.reviews.size
    end

    def date_cannot_be_in_the_future
        if self.release_date && self.release_date > Date.today
            errors.add(:release_date, "must not be in the future, the film must already be released for you to add it to this app")
        end
    end
end
