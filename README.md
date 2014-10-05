# Fast Company Bracket Madness

## Dependencies

* [SASS](http://sass-lang.com/install)
* [Compass](http://compass-style.org/install/)

## Development

1. To view the project at http://localhost:8000/index.html, you'll need to do a python -m SimpleHTTPServer from the project directory.

## Update the following after each round
* treeData.json, moving the winners up a level by filling in the competitorIndex property and setting the loser flag to "true" on the losers
* Update divisions js object
* Update indicesRoundX

## For the final rounds
* Display the .viz-bracket-left-finals-surrogate and give it an ID of the left division winner's originalIndex
* Add .viz-date-finished classes to the dates that have passed
* Set and display the image for the .viz-champion-headshot, add appropriate division class to the headshot-wrap
* Reveal .viz-champion-name


## To Set Quiz Up
**This section needs work. Will revisit after project to detail how to extend the work.**
* Create Google Spreadsheet from template
* Have editor fill in column headers and populate rows
* Run GOOGLE APP SERVICE that transforms that spreadsheet into a Google quiz
* Get the url of that quiz and put it into the url spots in the formulas for the first three columns (A1, B1, C1)