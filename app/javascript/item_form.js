document.addEventListener('turbolinks:load', function () {

  if (!$('#item_form')[0]) return false;
  $("#select-image-button").on("click", function () {
    const file_field = $("#item_images_attributes_0_src");
    file_field.trigger("click"); 
  });

  $("#image-file-fields").on("change", `input[type="file"]`, function () {
    console.log("画像が選択されました")
  });

});