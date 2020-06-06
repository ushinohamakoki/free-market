document.addEventListener('turbolinks:load', function () {
  if (!$('.select-category')[0]) return false;
  console.log("hoge");

  $(".input-field-main").on("change", ".select-category", function () {
    const category_id = $(this).val();
    console.log("選択されたカテゴリのID:", category_id);


    $.ajax({
      url: "/api/categories",
      type: "GET",
      data: { category_id: category_id },
      dataType: 'json',
    })

    .done(function (categories) {
      console.log("success")
    })
    .fail(function () {
      alert('error');
    })






  });
});