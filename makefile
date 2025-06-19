clean:
	rm -rf public resources .hugo_build.lock

run:
	hugo server -D

post:
	hugo new content content/posts/$(NAME).md
