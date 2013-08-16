#|/bin/sh

jekyll build
~/bin/google_appengine/appcfg.py update _static
