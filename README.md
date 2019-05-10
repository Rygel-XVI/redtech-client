This is a React front-end that allows the user to pick five cards from a standard deck. You can have multiple decks that persist in the back-end that is located <a href="https://github.com/Rygel-XVI/redtech-api">here</a>.

To be added. Game state persistence. A new migration that has the status of 5 cards set to null on creation of the deck and are updated as cards are drawn.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To use the app please clone both the front and back end repos then npm install the front end and bundle install the backend.

Start the Rails server first with rails s

After starting the Rails server start React with npm start and hit enter when asked if it should use a different port.



## Known Bugs

Turning over a card currently does not work due to something with webpack. The path location is correct though.

Have to rename the jpg files for aces (A) to 1, jacks (J to 11), queens (Q) to 12, kings (K) to 13 so routes are consistent.


PlayContainer!!
Added another component Card2 that shows how the cards change properly due to issue with image loading change to Card component for images.
