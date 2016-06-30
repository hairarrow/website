# This is my website
This project uses webpack to build my [landing page](http://herrero.design).

It is currently hosted using the `gh-pages` branch for this project.

## Development
- run `npm install` to install dependencies
- run `npm start` to start serving files

*Note:* You might have to run `npm install -g webpack webpac-dev-server` before
running `npm start`

*Note:* `bundle.js` is not getting called in `index.html` because I'm not using
any scripts at the moment.

*Remember:* If you create new pages, remember to add them as an `entry` in `webpack.config.js`

## Deploying
- *If this is the first time* you're deploying after pulling
  - run `npm run deploy-init`
- *else* run `npm run deploy`

### TODO
[x] [Extract CSS to avoid FOUC](http://survivejs.com/webpack/building-with-webpack/separating-css/)
  - [ ] This is a better way of doing it.
