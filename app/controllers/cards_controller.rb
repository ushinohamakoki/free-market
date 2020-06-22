class CardsController < ApplicationController

  def new
    @card = Card.new
  end



  def create
    redirect_to cards_path, alert: "カードの登録が完了しました。トークン：#{params[:payjp_token]}"
  end

end

