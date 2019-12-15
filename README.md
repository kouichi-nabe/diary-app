# 簡単な日記アプリケーション(Ruby on Rails)です。





## ER図

![diary-app2](https://user-images.githubusercontent.com/47510849/70861171-94689680-1f6d-11ea-9159-364d40c75198.png)


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|sring|null: false|
|email|sring|null: false|
|password|string|null: false|


### Association
- has_one :profile
- has_many :diaries, dependent::destory


## diariesテーブル

|Column|Type|Options|
|------|----|-------|
|title|sring|null: false|
|content|text|
|user_id|references|null: false, foreign_key: true|


### Association
- belongs_to :user
- has_many :images, dependent: :destroy


## profilesテーブル

|Column|Type|Options|
|------|----|-------|
|gender|integer|null: false|
|age|integer|null: false|
|prefecture_id|integer|null: false|
|city|string|
|user_id|references|null: false, foreign_key: true|


### Association
- belongs_to_active_hash :prefecture
- belongs_to :user


## imagesテーブル

|Column|Type|Options|
|------|----|-------|
|image|string|null: false|
|diary_id|references|null: false, foreign_key: true|


### Association
- belongs_to :diary


## like_diariesテーブル

|Column|Type|Options|
|------|----|-------|
|diary_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|


### Association
- belongs_to :diary
- belongs_to :user


## relationshipsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|follow_id|references|null: false, foreign_key: true|


### Association
- belongs_to :user
- belongs_to :follow, class_name: 'User'
