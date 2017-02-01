class MessagesController < ApplicationController

  def index
    messages = [
      {
        id: 1,
        message: 'Hello Angular World!'
      },
      {
        id: 2,
        message: 'I already said hello...'
      }
    ]
    render json: messages
  end

end
