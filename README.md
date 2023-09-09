# Event Manager

## Technologies and libraries using in this project

- Remix (https://remix.run/docs/en/main)
- ReactJs (https://react.dev/)
- Taillwind css (https://tailwindcss.com/docs)
- Prisma (https://www.prisma.io/docs/concepts/components/prisma-client/crud)
- Devexpress (https://js.devexpress.com/Overview/Widgets)


## Quickstart

Install latest Node js and Mysql server to your pc

Clone the project

Create empty Mysql database on local PC and add user and privilages to that user

create .env file and add DB connection string to it.
eg: 
```.txt
DATABASE_URL="mysql://em_user:f5yf$56d@localhost:3306/em_db"
SESSION_SECRET="123w4223b94eb8409de4d288e33294b9"
PORT=3005
```

## Development

- Install reqiured modules:

  ```sh
  npm install
  ```

- Initial setup:

  ```sh
  npm run setup
  ```

- Run the first build:

  ```sh
  npm run build
  ```

- Start dev server:

  ```sh
  npm run dev
  ```

This starts your app in development mode, rebuilding assets on file changes.

The database seed script creates a new user with some data you can use to get started:

- Email: `admin@eventmanager.lk`
- Password: `abcabcabc`

### Relevant code:

This is a pretty Event manager app.
The main functionality is creating users, logging in and out, and creating and deleting events, contacts.

- creating users, and logging in and out [./app/models/user.server.ts](./app/models/user.server.ts)
- user sessions, and verifying them [./app/session.server.ts](./app/session.server.ts)
- creating, and deleting events [./app/models/note.server.ts](./app/models/note.server.ts)

## Deployment



## Testing

### Cypress

We use Cypress for our End-to-End tests in this project. You'll find those in the `cypress` directory. As you make changes, add to an existing file or create a new file in the `cypress/e2e` directory to test your changes.

We use [`@testing-library/cypress`](https://testing-library.com/cypress) for selecting elements on the page semantically.

To run these tests in development, run `npm run test:e2e:dev` which will start the dev server for the app as well as the Cypress client. Make sure the database is running in docker as described above.

We have a utility for testing authenticated features without having to go through the login flow:

```ts
cy.login();
// you are now logged in as a new user
```

We also have a utility to auto-delete the user at the end of your test. Just make sure to add this in each test file:

```ts
afterEach(() => {
  cy.cleanupUser();
});
```

That way, we can keep your local db clean and keep your tests isolated from one another.

### Vitest

For lower level tests of utilities and individual components, we use `vitest`. We have DOM-specific assertion helpers via [`@testing-library/jest-dom`](https://testing-library.com/jest-dom).

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.
