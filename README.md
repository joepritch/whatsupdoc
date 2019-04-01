## API practice with the BetterDoctor API
---

#### Joe Pritchett

### Description

This project uses the BetterDoctor API to allow the user to search a keyword (medical conditions, doctor name, etc..) and view the first returned result.

There are two search forms, one that lets you search by doctor name, and another that lets you search by a keyword.

The name search API call uses the 'name' paramater of the 'doctor search' operation. It returns a list of doctors with the name you searched for.

The keyword search API call uses the 'query' paramater of the 'doctor search' operation. It returns a list of doctors that contain the keyword at some point in their information. Keep in mind that the displayed information is filtered down, so the keyword may not appear in the information you see.


## Setup
**Note, this project uses a webpack environment that is tailored for windows, some commands may not run properly on other operating systems**

Make sure you have Node.js installed!

*You will need your own key for the BetterDoctor API - [CLick here](https://developer.betterdoctor.com/signup) to get started*

* Clone or download this repo
* Using the terminal or a console emulator, navigate to the project directory
* Create a '.env' file in the root directory
* Using a text editor, type "exports.apiKey = 'YOUR-API-KEY'" in the '.env' file and save it
* Run the commands 'npm install' and 'npm run start' consecutively


## Specs

Behavior|Input|Output
--------|:---:|:-----:|
The user enters a search term|headache|https://api.betterdoctor.com/2016-03-01/doctors?query=headache&location=...
If the search returns a list of results, the first result is displayed|foot|Vancouver Clinic Inc, OR, Portland, 1 N Center Court St, 97227, 5037326863, true, http://www.reboundmd.com/|
If there are no results for the search term, the site tells the user there are no results for that search term|abcdefg|No results for "abcdefg"

## Known Bugs

None.

## Technologies Used

_Webpack (dependencies can be found in package.json), JavaScript, NPM, HTML, Git Bash, Atom_

## License

MIT license, Copyright © 2019 Joe Pritchett
