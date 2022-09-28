## Getting Started

The project aims to use the following tools/technologies on top of Next.js :

- Typescript 
- Storybook
- React Testing library with Jest
- Cypress
- Contentful CMS
- Redux Toolkit
- Tailwind
- ESLint/Prettier


### Clone the repo using: 

```git clone https://github.com/axelerant-trainings-frontend/grocery-plus.git```

### Navigate to project:

``` cd grocery-plus ```

### Install dependencies
Assuming you have yarn installed, run ``` yarn ``` to install dependencies.

## Starting the project's development server

``` yarn dev ```

This starts the project's development server on port 3000 by default.
Check your terminal output to get the exact url to access your project instance.

## Component structure approach

Each component should have its related files as siblings within the same parent directory.

/components/button
- Button.tsx
- Button.test.tsx
- Button.stories.tsx

Same approach should be followed for pages:


## Running tests with RTL and Jest
``` yarn lint ```

## Starting Storybook
``` yarn storybook ```

## Generate types for content from Contentful
``` yarn generate-types ```

This needs to be executed only once or when you modify content model/schema in contentful.

# [Design Reference](https://www.figma.com/file/elrNw4OBVb7wGGfAcBoyKK/Grocery-Plus---Grocery-App-UI-Kit-(Community)-(Copy)?node-id=0%3A1)
