class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :weights, :preferences, :weight_unit, :token
end
