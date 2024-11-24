// vetur.config.cjs
/** @type {import('vls').VeturConfig} */
module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true,
    "vetur.ignoreProjectWarning": true // Add this line to ignore project warnings
  },
  projects: [
    "./packages/repo2",
    {
      root: "./packages/repo1",
      // other configurations...
    }
  ]
};