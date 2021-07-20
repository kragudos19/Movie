require 'faraday'

class RequestMovieApi
  attr_reader :response
  attr_accessor :connection
  attr_writer :options

  def initialize(options)
      @options = options || {}
  end

  def get_all
      call_get_all(@options)
  end

  private
  def call_get_all(options)
    URI(options[:url])
    mid_settings =  {
        headers: {
            'Content-Type'      => 'application/json',
            'Accepts'           => 'application/json'
      }
    }

    @connection = Faraday.new(mid_settings.merge(options))

    @response = @connection.get(options[:url])
    # @connection = Faraday.new(
    # url: @url,
    # headers: {
    #     'Content-Type'      => 'application/json',
    #     'Accepts'           => 'application/json',
    # }
    # )
    # @categories = JSON.parse(@response.body)
  end
end