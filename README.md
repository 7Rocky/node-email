# Node-email

This project is used to send e-mails formatted in HTML/CSS via Node.js

To use this code yo will need to have [Node.js and npm](https://nodejs.org/en/download/) installed.

Moreover, if your are usin Gmail, your account must be set as "insecure": check [https://www.google.com/settings/security/lesssecureapps](https://www.google.com/settings/security/lesssecureapps).

## Install dependencies

```
npm install
```

You will need to change the *sender* and *receiver* e-mails, as well as the *password* of the user (sender), and maybe the *subject* of the e-mail. This information is configured in module [src/constantsconstants.js](https://github.com/7Rocky/node-email/tree/master/src/constants/constants.js).

## Run the application

```
npm start
```

Now, you have send your first e-mail using Node.js :smile:
