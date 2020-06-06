document.addEventListener('turbolinks:load', function () {
  if (!$('.select-category')[0]) return false;

  function buildCategoryForm(categories) {
    let options = "";
    categories.forEach(function (category) {
      options += `
                  <option value="${category.id}">${category.name}</option>
                 `;
    });
    const html = `
                  <select required="required" class="select-category" id="parent-category" name="item[category_id]">
                    <option value="">---</option>
                    ${options}
                  </select>
                 `;
    return html;
  }



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
      console.table(categories);

      const html = buildCategoryForm(categories);
      console.log(html);
      
    })
    .fail(function () {
      alert('error');
    })






  });
});