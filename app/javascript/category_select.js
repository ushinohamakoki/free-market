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
    var changed_form = $(this);
    $.ajax({
      url: "/api/categories",
      type: "GET",
      data: { category_id: category_id },
      dataType: 'json',
    })

    .done(function (categories) {
      if (categories.length == 0) return false;
      changed_form.nextAll(".select-category").remove();
      console.table(categories);
      const html = buildCategoryForm(categories);
      console.log(html);
      $(".select-category:last").after(html);
    })
    
    .fail(function () {
      alert('error');
    })






  });
});