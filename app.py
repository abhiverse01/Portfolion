from flask import render_template, Flask

app = Flask(__name__)

# Sample data for project cards, personal thoughts, and blog posts:

# Add projects here
sample_projects = [
    {"title": "Project 1", "description": "Project 1 description goes here.", "image": "path_to_project_image_1"},
    {"title": "Project 2", "description": "Project 2 description goes here.", "image": "path_to_project_image_2"},
]

# Add thoughts here
sample_thoughts = [
    {"title": "Thought 1", "content": "This is my first thought."},
    {"title": "Thought 2", "content": "This is my second thought."},
]

# Add blog posts here
sample_blog_posts = [
    {"title": "Blog Post 1", "content": "This is my first blog post."},
    {"title": "Blog Post 2", "content": "This is my second blog post."},
    {"title": "Blog Post 3", "content": "This is the content for third blog post."}

]


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/github-projects')
def github_projects():
    return render_template('github_projects.html', projects=sample_projects)


@app.route('/photos')
def photos():
    return render_template('photos.html')


@app.route('/personal-thoughts')
def personal_thoughts():
    return render_template('personal_thoughts.html', thoughts=sample_thoughts)


@app.route('/blogs')
def blogs():
    return render_template('blogs.html', blog_posts=sample_blog_posts)


@app.route('/careers')
def careers():
    return render_template('careers.html')


if __name__ == '__main__':
    app.run()
