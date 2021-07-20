require 'requests/request_movie_api'

class MovieParser
    attr_accessor :parsed_response
    def initialize
        request_all_movies
    end

    def get_shelf(category, value)
        @parsed_response.select {|k,v|
            k[category].include?(value.to_s)
        }
    end
    private
    def request_all_movies
        url = 'http://localhost:4000/api/movies'
        
        connection = RequestMovieApi.new({url:'http://localhost:4000/api/movies'})
        @parsed_response = JSON.parse(connection.get_all.body)
    end
end