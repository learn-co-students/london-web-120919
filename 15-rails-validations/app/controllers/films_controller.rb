class FilmsController < ApplicationController
  def index
    @films = Film.all
  end

  def show
    @film = Film.find(params[:id])
    @review = Review.new(film: @film)
    @users = User.all
    @films = Film.all
    # @film = Film.find_by(params[:name])
    # @film = Film.find_by_id(params[:id])
  end

  def new
  end

  def create
    film = Film.create(
        title: film_params[:title], 
        director: film_params[:director],
        release_date: film_params[:release_date],
        runtime: film_params[:runtime],
        genre: film_params[:genre],
        )
    if film.valid?
      redirect_to film_path(film)
    else
      flash[:errors] = film.errors.full_messages
      redirect_to new_film_path
    end
  end

  def edit
    @film = Film.find(params[:id])
  end

  def update
    film = Film.find(params[:id])
    film.update(
        title: film_params[:title], 
        director: film_params[:director],
        release_date: film_params[:release_date],
        runtime: film_params[:runtime],
        genre: film_params[:genre],
        )
    redirect_to film_path(film)
  end

  def destroy
    film = Film.find(params[:id])
    film.destroy
    flash[:notice] = "#{film.title} was deleted successfully"
    redirect_to films_path
  end
  
  private

  def film_params
    params[:film]
  end
end
