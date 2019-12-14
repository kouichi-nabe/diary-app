$(document).on('turbolinks:load', function(){
  var previews = document.querySelectorAll('.preview');

  previews.forEach( function(value, index){
    var key = "preview" + index
    value.setAttribute("id", key);
  });


  //画像ファイルプレビュー表示のイベント追加 fileを選択時に発火するイベントを登録
  $('form').on('change', 'input[type="file"]', function(e) {
    if( this.id == "diary_images_attributes_0_image" ){
      var file = e.target.files[0],
          reader = new FileReader(),
          $preview = $("#preview0");
          t = this;
    } else if ( this.id == "diary_images_attributes_1_image" ){
      var file = e.target.files[0],
          reader = new FileReader(),
          $preview = $("#preview1");
          t = this;
    } else if ( this.id == "diary_images_attributes_2_image" ){
      var file = e.target.files[0],
          reader = new FileReader(),
          $preview = $("#preview2");
          t = this;
    }

    // 画像ファイル以外の場合は何もしない
    if(file.type.indexOf("image") < 0){
      return false;
    }

    // ファイル読み込みが完了した際のイベント登録
    reader.onload = (function(file) {
      return function(e) {
        //既存のプレビューを削除
        $preview.empty();
        // .prevewの領域の中にロードした画像を表示するimageタグを追加
        $preview.append($('<img>').attr({
                  src: e.target.result,
                  width: "150px",
                  class: "preview",
                  title: file.name
              }));
      };
    })(file);

    reader.readAsDataURL(file);
  });
});
