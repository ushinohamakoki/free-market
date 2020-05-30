document.addEventListener('turbolinks:load', function () {

  if (!$('#item_form')[0]) return false;

  function newFileField(index) {
    const html = `
                  <input accept="image/*" class="new-item-image" style="display: block;" data-index="${index}" type="file" name="item[images_attributes][${index}][src]" id="item_images_attributes_${index}_src">
                  `;
    return html;
  }

  $("#select-image-button").on("click", function () {
    const file_field = $(".new-item-image:last");
    file_field.trigger("click"); 
  });

  $("#image-file-fields").on("change", `input[type="file"]`, function (a) {
    console.table(a.target.files);
    console.log("画像が選択されました")
    const file = a.target.files[0];
    let index = $(this).data("index");
    console.log("選択した画像のindex=", index);
    const blob_url = window.URL.createObjectURL(file);
    console.log(blob_url);
    const preview_html = `<img src="${blob_url}" width="20%">`;
    $("#select-image-button").before(preview_html);
    index += 1;
    const file_field_html = newFileField(index);
    $("#image-file-fields").append(file_field_html);
  });
  
});