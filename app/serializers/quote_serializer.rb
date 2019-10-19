class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :content
  belongs_to :author, serializer: AuthorSerializer

end
