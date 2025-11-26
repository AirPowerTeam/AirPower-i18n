<p align="center">
  <img width="300" src="assets/airpower-bg.svg"/>
</p>

<p align="center">
<a href="https://www.npmjs.com/@airpower/i18n">
<img src="https://img.shields.io/npm/v/@airpower/i18n"/>
</a>
<a href="https://www.npmjs.com/@airpower/i18n">
<img src="https://img.shields.io/npm/dm/@airpower/i18n"/>
</a>
</p>

<p align="center">
<a href="https://github.com/AirPowerTeam/AirPower-i18n">Github</a> /
<a href="https://gitee.com/air-power/AirPower-i18n">Gitee</a> /
<a href="https://www.npmjs.com/package/@airpower/i18n">NPM</a>
</p>

## 🎉 项目介绍

**AirPower-i18n** 是一个基于 `TypeScript` 原生支持的国际化工具。

## 💻 如何安装

```shell
npm install @airpower/i18n
# or
yarn add @airpower/i18n
# or
cnpm install @airpower/i18n
# or ...
```

## 📖 参考文档

- #### 声明语言包实现类

实现一个继承 `I18n` 的类，加入属性作为语言包的 `Key`, 且可作为默认语言：

```ts
export class Strings extends I18n {
  // 如果默认语言不是简体中文，可以给 `language` 属性赋值
  // language = Language.ChineseSimplified
  Hello_World = '你好，世界！'
}
```

- #### 声明一种新的语言包

```ts
const English: Strings = {
  language: Language.English,
  Hello_World: 'Hello World!'
}
```

- #### 添加语言包

```ts
// 添加一个新的语言包
Strings.addLanguage(English)
```

- #### 设置当前语言

```ts
// 默认为简体中文
Strings.setCurrentLanguage(Language.ChineseSimplified)
```

- #### 获取语言列表

```ts
// 返回已注册的语言列表
Strings.getLanguages()
```

- #### 使用多语言

```ts
console.log(Strings.get().Hello_World)
```

## ⏰ 欢迎反馈

如有疑问，可以通过本仓库的 **Issues** 与我们联系，如果你有一些代码贡献，可以通过 **Pull Request** 将代码贡献，为这个项目添砖加瓦。

如果有更多的需求和建议，欢迎通过本仓库的 `Issues` 提出，也欢迎加入 QQ群 555156313 与我们及时反馈。
