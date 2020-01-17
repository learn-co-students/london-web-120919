class Answer < ApplicationRecord
  belongs_to :question
  belongs_to :cookie
  belongs_to :user
  
  def correct
    self.cookie == self.question.instructor.cookie
  end

  def user_name
    self.user ? self.user.name : nil
  end

  def user_name= name
    self.user = User.find_or_create_by name: name
  end

end
