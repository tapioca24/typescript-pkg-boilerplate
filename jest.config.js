module.exports = {
  globals: {
    "ts-jest": {
      "tsConfigFile": "tsconfig.json"
    }
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  testMatch: [
    "**/__tests__/*.+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
};
