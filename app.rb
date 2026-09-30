require "sinatra/base"
require "yaml"

class PortfolioApp < Sinatra::Base
  set :root, __dir__
  set :public_folder, File.join(root, "public")

  helpers do
    def h(value)
      Rack::Utils.escape_html(value.to_s)
    end
  end

  get "/" do
    @projects = YAML.safe_load_file(
      File.join(settings.root, "data", "projects.yml"),
      permitted_classes: [],
      aliases: false
    )

    erb :index
  end
end

if $PROGRAM_NAME == __FILE__
  PortfolioApp.run!(
    host: ENV.fetch("HOST", "127.0.0.1"),
    port: Integer(ENV.fetch("PORT", "4567"))
  )
end
