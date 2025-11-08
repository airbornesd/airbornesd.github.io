clean:
	rm -rf public resources .hugo_build.lock

run:
	hugo server -D

post:
	hugo new content content/posts/$(NAME).md

# # currently using post directory only, later can be updated to more modular structure
# dir:
# 	hugo new content content/posts/$(PATH)/index.md
