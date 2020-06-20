class Category < ApplicationRecord

  def self.search_by_categories(category_ids)
    return Item.where(category_id: category_ids).includes(:images)
  end

  has_many :items

  has_ancestry

  validates :name, presence: true
end
