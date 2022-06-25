# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The purpose of the following is extending the aspects of the ApplicationController class to the BlogPostController class
class BlogPostsController < ApplicationController
  def index
    # ---2) Assigning BlogPost.all to the instance variabe of @posts returns the whole collection of individual instances in the BlogPost model. Essentially placing the whole list of all of the blogs
    @posts = BlogPost.all
  end

  # ---3) The def show is the start of the the show method. Show is a part of the RESTful routes which is a convention used when developing with Rails. This method corresponds with a view (an html.erb) which will do the "showing" of the elements within this show method.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This method calls for a new instance of data to be passed into the BlogPost model.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This assigns the creation of a new instance within the BlogPost model to the instance variabe @post that will be used when this create method is called. The .create is given the parameter of the blog_post_params which corresponds with another method that makes sure that the only parts of the database that can be changed/added/edited are the columns of the BlogPost database
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) The id corresponds to the primary key of a piece of data in the BlogPost model. When id is passed in params it allows for dynamic passing of information. When those params are used in .find the method finds the piece of data in BlogPost that has the primary key identical to the one passed in the params. This particular piece of data is assigned to the instance variable @post so it can be used later.  
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This allows the edits to be applied to the post. The only parts that can be edited are the parts specified by the blog_post_params method
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) This redirects (stays on) the view page of the current post (the post that was found based upon is Primary key/id) in case the .destroy does not work
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) This "private" keyword denotes the strong parameters section. Restricts the scope of where a method can be used. This makes sure that the important permissions and parameters stay away from cyber attacks like SQL injection and Cross Site Scripting
  private
  def blog_post_params
    # ---10) This makes sure that only the title and content sections in an instance of the blog post model are permitted to be updated or created
    params.require(:blog_post).permit(:title, :content)
  end
end
