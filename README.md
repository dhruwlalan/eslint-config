# my eslint config

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
