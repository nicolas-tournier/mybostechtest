# Frontend Technical Exam for MYBOS

## Requirements
- [PHP CLI (v8.x)](https://www.digitalocean.com/community/tutorials/how-to-install-php-8-1-and-set-up-a-local-development-environment-on-ubuntu-22-04)
- [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos)
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

If you use MacOS, consider using Brew to install these dependencies.
Or feel free to use Docker to run this Repository.

---

# Step 1 - Initialise and start the API Server
- `$ cd api`
- `$ composer install`
- `$ php artisan serve --port=8000`

With the above, take note of your available routes
- GET http://localhost:8000/api/cases
- GET http://localhost:8000/api/cases/{id}

The Cases Endpoint supports `page` and `per_page` query string parameters

---

# Step 2 - Initialise and start the APP Server
- `$ cd app`
- `$ npm install`
- `$ npm start -- --port 9000`

With the above, take note of your availble route
- GET http://localhost:9000/

---

# Step 3 - Exam Instructions
Fork this repository to a personal public repository on GitHub.

This personal repository will be provided to MYBOS at the end of the Exam.

Please feel free to customise all logic and the provided routes to meet the requirements of this exam.

---

# Step 4 - Task

The objective of this task is to create 2 components that are data bound to the provided API Endpoints

Using the following design from Figma, please create the required Components.

[MYBOS - Figma Design](https://www.figma.com/file/xXIsvJmavZ6g92Cfhdn1bw/Cases?type=design&node-id=0%3A1&mode=design&t=kIPB2pPGVsHC3ftM-1)

Note: Please log in to a Figma account to get access to Ruler tools and other features to help produce the design

### The Figma Design
The above Figma design is for the MYBOS Cases Module. Everything you see there is as intended for our product ready App.
Feel free to imitate this design to your best ability in the process of completing this Exam.

Please note that we only require the Exam Components (the highlighted frame in Figma) in this test

[MYBOS - Figma Design - Required Components](https://www.figma.com/file/xXIsvJmavZ6g92Cfhdn1bw/Cases?type=design&node-id=2809%3A6328&mode=design&t=I9HcfPFlr8yhS9oV-1)

However, any attempt to complete the design would be viewed favourably.

NOTE: It is important to understand that in the Exam, the API is read only. That is, there are no post/update/delete
requests included. Please imitate the design to your best ability.

### Requirement 1 - Case Grid List Component

The first component is to create a paginated Grid List. This component should be bound to the following API Endpoint

GET http://localhost:8000/api/cases

Please note, you can set the `per_page` and `page` values using query string parameters

GET http://localhost:8000/api/cases?per_page=20&page=2

**Clicking on a row within the Grid List should direct the browser to the second Component/Route.**

### Requirement 2 - Case Details Component

The second component is a Cases Details page. This component should be bound to the following API Endpoint

GET http://localhost:8000/api/cases/30

---

Please feel free to utilise any publicly available components or assets that you feel will help produce the desired outcome.

Any packages installed should be listed here in your version of the Projects README.md file.
