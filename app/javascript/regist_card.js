document.addEventListener('turbolinks:load', function () {
  if (!$('#card_form')[0]) return false;

  Payjp.setPublicKey("pk_test_89b36770be8d15264122f4db");
  const regist_button = $("#regist_card");
  regist_button.on("click", function (e) {

    const card = {
      number: $("#card_number_form").val(),
      cvc: $("#cvc_form").val(),
      exp_month: $("#exp_month_form").val(),
      exp_year: $("#exp_year_form").val()
    };

    Payjp.createToken(card, (status, response) => {
      if (status === 200) { 
        alert("カードを登録しました");

        $("#card_token").append(
          `<input type="hidden" name="payjp_token" value=${response.id}>`
        );
        $('#card_form')[0].submit();
        $("#card_number_form").removeAttr("name");
        $("#cvc_form").removeAttr("name");
        $("#exp_month_form").removeAttr("name");
        $("#exp_year_form").removeAttr("name");
      } else { 
        alert("カード情報が正しくありません。");
        regist_button.prop('disabled', false);
      }

    });

  });

});