class Cookie < ApplicationRecord

    def self.options cookie
        possible_cookies = self.all.sample 3
        if possible_cookies.include?(cookie)
            return possible_cookies
        else
            return possible_cookies[0...2].concat([cookie]).uniq.shuffle
        end
    end
end
