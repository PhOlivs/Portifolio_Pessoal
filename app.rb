require "sinatra/base"

class PortfolioApp < Sinatra::Base
  set :root, __dir__
  set :public_folder, File.join(root, "public")

  get "/" do
    erb :index
  end
end

if $PROGRAM_NAME == __FILE__
  PortfolioApp.run!(
    host: ENV.fetch("HOST", "127.0.0.1"),
    port: Integer(ENV.fetch("PORT", "4567"))
  )
end
