## @dhruwlalan/eslint-config

<p>
   <a href="https://github.com/dhruwlalan/eslint-config/blob/master/LICENSE" target="_blank">
      <img alt="License: MIT" src="https://img.shields.io/npm/l/@dhruwlalan/eslint-config" />
   </a>
   <a href="https://www.npmjs.com/package/@dhruwlalan/eslint-config" target="_blank">
      <img alt="Version" src="https://img.shields.io/npm/v/@dhruwlalan/eslint-config">
   </a>
   <a href="https://github.com/dhruwlalan/eslint-config/actions" target="_blank">
      <img alt="Version" src="https://github.com/dhruwlalan/eslint-config/actions/workflows/release.yml/badge.svg?branch=master">
   </a>
   <a href="https://github.com/semantic-release/semantic-release" target="_blank">
      <img alt="Version" src="https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release">
   </a>
</p>

**My Eslint Config**

## Install

<code>npm i -d eslint prettier <b>@dhruwlalan/eslint-config</b></code>

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

_or in:_

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
