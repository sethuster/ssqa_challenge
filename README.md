![travisci-build](https://travis-ci.org/sethuster/ssqa_challenge.svg?branch=master)

# SSQA Challenge
This is the ShapeShift QA Challenge assignment.  In this assignment I've added some API tests for a few different endpoints.  Additionally I've added a few UI tests verifying some dynamically refreshing data.  

## Local Setup
This was built and tested with nodejs 9.10.1.  To run everything locally you'll need to have Java 10 installed as well. 

download the selenium-server jar:
```bash
$ curl -O http://selenium-release.storage.googleapis.com/3.11/selenium-server-standalone-3.11.0.jar
```

To run locally, you'll also need the newest geckodriver for chrome or firefox.

linux:
```bash
$ curl -L https://github.com/mozilla/geckodriver/releases/download/v0.16.0/geckodriver-v0.16.0-linux64.tar.gz | tar xz
```
osx:
```bash
$ curl -L https://github.com/mozilla/geckodriver/releases/download/v0.16.0/geckodriver-v0.16.0-macos.tar.gz | tar xz
```

start the selenium server:

```bash
$ java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.11.0.jar
```

Then run install the node packages with npm:

```bash
$ npm install
```

Then finally start the tests:

```bash
$ npm test
```

## Docker
This repo is using Docker to to allow for portable builds on Travis CI.  Instead of running through the install steps above you can run the server bits from docker, and just run the test peices from your local machine.

To start everything in Docker simply run:

```bash
$ docker-compose up -d
```

Then on your local machine you can run **npm install** then **npm test**.

## Pull Requests
PRs are built using Travis CI automatically.  The master branch is protected, so all PRs must be approved before they're merged.

### Notes on Test setup

This was built using webdriver.io a Javascript based Selenium-Webdriver framework.  I have never actually built any tests in webdriver.io before.  Although I have extensive experience with webdriver in other languages, and I managed a team of SDET's that recently converted our tests built in Ruby to webdriver.io; this is the first time i've actually built tests in this framework myself. 

I'm fairly happy with the results having only spent around 5 hours working in this framework. There are a lot of improvements I can think of to make with the implementation.  The page object implemenation is not as clean as I would like.  Additionally, I'm not using ES2015 standard.  With a little more research and setup time, I'm confident that would help make design and maintenance easier. 
