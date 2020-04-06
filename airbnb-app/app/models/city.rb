class City < ApplicationRecord
  has_many :properties, dependent: :destroy
end
