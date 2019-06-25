module.exports = {
    "env": {
        "commonjs": true,
        "node": true,
        "es6": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "no-empty": ["error", { "allowEmptyCatch": true }]
    }
};