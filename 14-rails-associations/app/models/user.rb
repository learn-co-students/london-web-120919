class User < ApplicationRecord
    has_many :reviews
    has_many :films, through: :reviews

    def text_for_option
        self.username[0..2]
    end
end
