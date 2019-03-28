## API practice with the BetterDoctor API
---

#### Joe Pritchett

### Description

This project uses the BetterDoctor API to allow the user to search a keyword (medical conditions, doctor name, etc..) and view the first returned result.

It is barebones in its current state and only displays on the first returned doctor. It has no custom CSS or styling. I focused solely on meeting the project objectives.

The search API call uses the 'query' paramater of the 'doctor search' operation, which searches every single field (practice name, description, etc..) for the search term. This has some interesting effects. Among others, searching a random name may not always return information on a doctor with that name. Essentially this search doesn't always return the most relevant result, because it is broad in its scope.


## Setup
**Note, this project uses a webpack environment that is tailored for windows, some commands may not run properly on other operating systems**

Make sure you have Node.js installed!

* Clone or download this repo
* Using the terminal or a console emulator, navigate to the project directory
* Run the commands 'npm install', 'npm run build', 'npm run start' consecutively


## Specs

Behavior|Input|Output
--------|:---:|:-----:|
The user enters a search term|headache|https://api.betterdoctor.com/2016-03-01/doctors?query=headache&location=...
If the search returns a list of results, the first result is displayed|foot|Vancouver Clinic Inc, OR, Portland, 1 N Center Court St, 97227, 5037326863, true, http://www.reboundmd.com/|
If there are no results for the search term, the site tells the user there are no results for that search term|abcdefg|No results for "abcdefg"

## Known Bugs

If a search term has no results, the site will not update correctly if the following search terms do have results. It will only update if the following search terms also have no results.

## Technologies Used

_Webpack (dependencies can be found in package.json), JavaScript, NPM, HTML, Git Bash, Atom_

## License

MIT license, Copyright © 2019 Joe Pritchett
