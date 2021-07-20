require 'parsers/movie_parser'

class HomeController < ApplicationController
  
  def index
    # require 'json'
    # require 'faraday'
    @response_list = MovieParser.new
    @top_2019_list = @response_list.get_shelf("Year", "2019")
    @top_2018_list = @response_list.get_shelf("Year", "2018")
    @mystery_list = @response_list.get_shelf("Genre", "Mystery")
    @drama_list = @response_list.get_shelf("Genre", "Drama")
    @action_list = @response_list.get_shelf("Genre", "Action")
    @fantasy_list = @response_list.get_shelf("Genre", "Fantasy")
    @thriller_list = @response_list.get_shelf("Genre", "Thriller")
  end


end
