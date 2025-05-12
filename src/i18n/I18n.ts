import type { I18nClassConstructor } from './type'
import { Language } from './Language'

/**
 * ### 语言国际化
 *
 * - #### 声明语言包实现类
 *
 * 实现一个继承 `I18n` 的类，加入属性作为语言包的 `Key`, 且可作为默认语言：
 *
 * ```ts
 * export class Strings extends I18n {
 *   Hello_World = '你好，世界！'
 * }
 * ```
 * - #### 声明一种新的语言包
 *
 * ```ts
 * const English: Strings = {
 *   language: Language.English,
 *   Hello_World: 'Hello World!'
 * }
 * ```
 *
 * - #### 添加语言包
 *
 * ```ts
 * Strings.addLanguage(English)
 * ```
 *
 * - #### 设置当前语言
 *
 * ```ts
 * Strings.setCurrentLanguage(Language.ChineseSimplified)
 * ```
 *
 * - #### 使用多语言
 *
 * ```ts
 * console.log(Strings.get().Hello_World)
 * ```
 *
 * @author Hamm.cn
 */
export class I18n {
  /**
   * ### 当前使用的语言包
   */
  private static currentLanguage: I18n

  /**
   * ### 语言列表
   */
  private static languages: Array<I18n> = []

  /**
   * ### 语言名称
   */
  language: string = Language.ChineseSimplified

  /**
   * ### 获取当前使用的语言
   * @returns 当前使用的语言
   */
  static getCurrentLanguage(): string {
    return I18n.currentLanguage.language
  }

  /**
   * ### 获取支持的语言列表
   * @returns 语言列表
   */
  static getLanguages(): string[] {
    return I18n.languages.map(item => item.language)
  }

  /**
   * ### 获取翻译后的字符串
   * @returns 翻译后的字符串
   */
  static get<T extends I18n>(this: I18nClassConstructor<T>): T {
    I18n.update(new this())
    return I18n.currentLanguage as T
  }

  /**
   * ### 添加国际化语言
   * @param languages 语言包列表
   */
  static addLanguage<T extends I18n>(this: I18nClassConstructor<T>, ...languages: T[]): void {
    if (languages.length === 0) {
      throw new Error('请传入语言包')
    }
    I18n.update(new this())
    // 添加语言
    languages.forEach((item) => {
      I18n.languages.push(item)
    })
  }

  /**
   * ### 设置当前使用的语言
   * @param language 语言
   */
  static setCurrentLanguage(language: Language | string): void {
    if (I18n.languages.length === 0) {
      I18n.update(new this())
    }
    I18n.currentLanguage = I18n.languages.find(item => item.language === language) || I18n.languages[0]
  }

  /**
   * ### 更新语言
   * @param language 语言
   */
  private static update(language: I18n): void {
    let isExist = false
    for (let i = 0; i < I18n.languages.length; i++) {
      if (I18n.languages[i].language === language.language) {
        I18n.languages[i] = language
        isExist = true
        break
      }
    }
    if (!isExist) {
      I18n.languages.push(language)
    }
  }
}
