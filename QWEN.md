# AirPower-i18n 项目上下文

## 项目概述

AirPower-i18n 是一个基于 TypeScript 原生支持的国际化（i18n）工具，旨在为管理多语言应用程序提供简洁、面向对象的方法。该库允许开发人员使用类创建强类型的语言包，并提供简单的 API 来切换语言。

### 主要特性
- 基于类的语言包定义
- 强类型国际化
- 通过继承支持多种语言
- 简单的语言切换 API
- 使用 TypeScript 构建以增强开发体验

### 架构
该项目由三个主要组件组成：
1. `I18n.ts` - 管理语言切换和存储的核心类
2. `Language.ts` - 定义支持语言的枚举，包含详细文档
3. `type.ts` - 库的类型定义

## 构建和运行

### 先决条件
- Node.js（兼容支持 TypeScript 5.8.3 的版本）
- npm、yarn 或 pnpm 包管理器

### 设置
1. 克隆仓库
2. 安装依赖项：`npm install`（或使用您首选的包管理器）

### 开发命令
- `npm run build` - 使用 ESLint、TypeScript 编译器和 Vite 构建项目

### 构建过程
构建过程使用：
- TypeScript 编译器转换源代码
- ESLint 进行代码质量检查
- Vite 与 `vite-plugin-dts` 插件生成声明文件
- 输出放置在 `dist` 目录中作为 ES 模块

## 开发约定

### 代码风格
- 遵循 Antfu ESLint 配置（`@antfu/eslint-config`）
- 启用严格的 TypeScript 设置
- 现代 ES2020+ 语法与 ES 模块
- 启用装饰器支持（experimentalDecorators 和 emitDecoratorMetadata）

### 命名约定
- 类名使用帕斯卡命名法（例如 `I18n`、`Strings`）
- 翻译键使用大写下划线命名法（例如 `Hello_World`）
- 方法和属性使用驼峰命名法

### 国际化模式
该库实现了基于类的方法：
1. 开发人员扩展 `I18n` 类来定义他们的语言包
2. 类中的属性成为翻译键
3. 使用 `addLanguage()` 添加不同的语言实现
4. 使用 `setCurrentLanguage()` 切换当前语言

### 示例使用模式
```ts
// 定义您的语言类
export class Strings extends I18n {
  Hello_World = '你好，世界！'
}

// 定义其他语言
const English: Strings = {
  language: Language.English,
  Hello_World: 'Hello World!'
}

// 注册语言
Strings.addLanguage(English)

// 切换语言
Strings.setCurrentLanguage(Language.English)

// 使用翻译
console.log(Strings.get().Hello_World) // 输出: 'Hello World!'
```

## 项目结构
```
src/
├── index.ts          # 主导出文件
└── i18n/             # 核心 i18n 功能
    ├── I18n.ts       # 主 I18n 类
    ├── Language.ts   # 语言枚举
    └── type.ts       # 类型定义
```

## 依赖项
- 生产环境：无（零依赖）
- 开发环境：TypeScript、ESLint、Vite 及相关插件

## 测试
该项目在当前代码库中似乎不包含单元测试，尽管其基于类的设计支持测试。

## 发布
该包以 `@airpower/i18n` 名称发布在 npm 上，具有公共访问权限。

## 版本发布自动化流程

- 使用 `eslint --fix` 修复项目中可能出现的问题
- 更新 `package.json` 中的版本号
- 使用 `yarn build` 构建项目
- 使用 `npm publish` 发布包
- 提交本地变更的代码到 Github
- 创建 `git tag` 并推送到Github
