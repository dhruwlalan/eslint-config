# my eslint config

![NPM](https://img.shields.io/npm/l/@dhruwlalan/eslint-config) ![npm (scoped)](https://img.shields.io/npm/v/@dhruwlalan/eslint-config) [![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

`npm i -d eslint prettier @dhruwlalan/eslint-config`

---

**.vscode / settings.json**
```json
{
  "editor.formatOnPaste": false,
  "[javascript]": {
     "editor.formatOnSave": false
  },
  "editor.codeActionsOnSave": {
     "source.fixAll": true
  }
}
```

---

**.eslintrc**
```json
{
  "extends": [
    "@dhruwlalan"
  ]
}
```

---

**package.json**
```json
{
  "eslintConfig": {
      "extends": [
         "@dhruwlalan"
       ]
   }
}
```
