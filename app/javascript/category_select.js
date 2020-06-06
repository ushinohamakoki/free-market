document.addEventListener('turbolinks:load', function () {
  if (!$('.select-category')[0]) return false;
  console.log("hoge");

  $(".input-field-main").on("change", ".select-category", function () {
    const category_id = $(this).val();
    console.log("選択されたカテゴリのID:", category_id);
  });

});