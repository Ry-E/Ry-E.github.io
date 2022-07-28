## How I worked on this project
This project has transformed many times as I have explored programming. Orginally a react app, as react was the first thing I learned, I soon discovered that my small personal website didn't quite justify the tooling react provided. The site now functions as a sort of coding sandbox, where tools and libraries are only used on an as-needed basis.

My goal was to create a simple but interesting portfolio site that also serves as a personal coding sandbox
![Screen ![Screen Shot 2022-06-07 at 4 12 34 PM](https://user-images.githubusercontent.com/47878230/172475458-9b5e77f4-bc3f-4dfe-8dd6-1b4163946016.png)
Shot 2022-06-07 at 4 13 26 PM](https://user-images.githubusercontent.com/47878230/172475366-77e8f200-940b-4924-89d8-266cfa56dede.png)

  * 
  
  * I built the http server with vanilla node.js: [Screenshot of server](https://user-images.githubusercontent.com/47878230/141239383-89176f2d-bf70-4beb-aee8-3a437da7b24c.png)  
  * I used vanilla css with media queries to make a responsive website: [Example media query](https://user-images.githubusercontent.com/47878230/141241172-2804ec08-3e69-4c21-8214-ba136f7fd879.png)
  * I worked with tasks on a github project board: [Screenshot of tasks](https://user-images.githubusercontent.com/47878230/141241031-a6405a66-3755-468b-a2a4-44126d6c9f8b.png)
  * I used development and production branches and pull requests: [Example PR](https://user-images.githubusercontent.com/47878230/141242711-78f9830f-e72c-47e6-81e1-1cc625d00d4a.png)
![viking](https://user-images.githubusercontent.com/47878230/172467918-43aecc1b-f94d-4adb-bb91-a5498ca13fa6.png)

# How to navigate this project
  * The UI is handled with React: [Example code](https://user-images.githubusercontent.com/47878230/141388352-8302acf6-ac1f-4012-92cb-56c02dd7613f.png)
  * AJAX is used to send data to server: [Example code](https://user-images.githubusercontent.com/47878230/141387627-2e0d0407-96ab-4ad2-b91f-3ed88749948b.png)
  * Form submissions were parsed with the Formidable API: [Example code](https://user-images.githubusercontent.com/47878230/141386978-0a79c401-5a1f-4d8e-9cf4-a30083f19a8a.png)
  * The application sends emails with the Nodemailer API: [Example code](https://user-images.githubusercontent.com/47878230/141386194-164f7711-59e2-4326-9eb9-1f0085120328.png)

# Why I built the project this way
  * I plan on being a full-stack developer, so decided to build a custom server with node.js to handled the api as well as to statically serve the website
  * Not using frameworks in some places allowed me to keep the app lightweight, while also developing a better understanding of the technology
  * I didnt use a state management library like Redux since the app is simple enought where '''useState''' is efficient
  
# If I had more time I would change this
  * Add end-to-end tests with cypress
  * Update React to use hooks for state
  * Refactor some of the code

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


