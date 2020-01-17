class User < ApplicationRecord
    has_many :answers
    validates :name, presence: true

    def self.all_sorted_by_answers
        User.all.sort do |user_a, user_b|
            user_b.answers.length <=> user_a.answers.length
        end
    end
end
