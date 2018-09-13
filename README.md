# Gatsby Starter Pack

This is my own opinionated setup for what a Gatsby default baseline should be. I began with [gatsby-starter-default v2](https://github.com/gatsbyjs/gatsby-starter-default) and started making modifications and enhancements from there. This is still a work in progress for the time being.

### Todo

- mdx (or filestystem plugin combined w/ markdown plugin)
- styled components or emotion
- typography
- gatsby image
- Setup storybook (or similar)
- Add test suite
  - Jest
  - react-testing-library
  - cypress
  - add to the precommit routine
    - [pre-commit](https://github.com/observing/pre-commit) or [husky](https://github.com/typicode/husky) might help

### Changelog

- 9/12/18
  - remove `yarn.lock` (I prefer using npm)
  - modify `.prettierrc` settings
  - run prettier as a pre-commit git hook
  - add basic eslint integration and npm script
  - add prop-types package
