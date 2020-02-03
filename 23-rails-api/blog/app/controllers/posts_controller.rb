class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  def index
    @posts = Post.all

    # Because we specified this project should be an API, we now render JSON and return that as the response to our client, rather than using erb to return HTML.
    # render json: @posts
    # Specify what attributes of an instance we want to be included in the JSON object that is rendered for it. We can use only to include only the attributes we specify, or except to include all of the attributes except the ones we specify.
    # render json: @posts, only: [:id, :title, :body]
    render json: @posts, except: [:created_at, :updated_at]
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:title, :body)
    end
end
