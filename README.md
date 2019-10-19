# My NM Demo App

## Skills assessment description

Requested on: Aug 28, 2018

> Please complete the following skills assessment:
>
> Develop a SPA application to collect following information:
>
> - Client First name, Last name, Gender, City, Street, State and Zip
> - Children (First name, Last name, Gender, Date of Birth)
>
> Application should allow to collect more than one child’s details (First > name, Last name, Gender, Date of Birth)
> Build NodeJS REST microservice to save Client & Children information in a > text file in CSV format
> SPA Application should send request to NodeJS REST microservice to save both > Client & Children information in a CSV file

## Getting Started

This project comes in two parts; a frontend and backend. The file structure was seeded using my favorite boilerplate project; `create-react-app`. This means most of the project's file structure and resources are for the frontend. The backend is fairly small. Just the `server.js` file at root.

```
$ cd /path/to/this/project
$ yarn && yarn build && yarn server
```

1. Go to http://localhost:9000
2. Fill in (or edit) form field values
3. Click submit, POSTing to backend server
4. Backend takes the payload and appends it to a CSV file

You can optionally fire up the frontend development server (part of `create-react-app`) with:

```
$ yarn start
```

## Things I didn't do (but if there was time...)

- First check if CSV file exists. Create it if not present
- server.js to be a little more DRY
- Provide some basic unit tests
- Rate limit form submissions
- Check for existing records
- Double-click prevention
- Form field validation
- Nicer looking lay out (:
