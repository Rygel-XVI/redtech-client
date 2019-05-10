This is a React front-end that allows the user to pick five cards from a standard deck. You can have multiple decks that persist in the back-end that is located <a href="https://github.com/Rygel-XVI/redtech-api">here</a>.

To be added. Game state persistence. A new migration that has the status of 5 cards set to null on creation of the deck and are updated as cards are drawn.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To use the app please clone both the front and back end repos then npm install the front end and bundle install the backend.

Start the Rails server first with rails s

After starting the Rails server start React with npm start and hit enter when asked if it should use a different port.



## Known Bugs

  When choosing an old deck, you can currently delete it and then choose the deck that is no longer available. To be fixed by removing the button after clicking delete.
