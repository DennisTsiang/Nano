# Nano
A simple redirecter. Useful to take advantage of free domain names

## Deploy to Heroku
```
heroku create <app-name>
git push heroku master
```
Afterwards go to the app settings in Heroku and modify the environmental variable REDIRECT to point to the full qualified host
that you want to redirect the requests to.
