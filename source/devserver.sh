#!/bin/sh

jekyll build
~/bin/google_appengine/dev_appserver.py _static --host 0.0.0.0
