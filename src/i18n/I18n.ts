import type { I18nClassConstructor } from './type'
import { Language } from './Language'

/**
 * # 语言国际化
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
   * ### 当前使用的语言
   */
  private static currentLanguage: string = Language.ChineseSimplified

  /**
   * ### 当前使用的语言包
   */

  private static package?: I18n

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
    return this.currentLanguage
  }

  /**
   * ### 获取支持的语言列表
   * @returns 语言列表
   */
  static getLanguages(): string[] {
    return this.languages.map(item => item.language)
  }

  /**
   * ### 获取翻译后的字符串
   * @returns 翻译后的字符串
   */
  static get<T extends I18n>(
    this: I18nClassConstructor<T>,
  ): T {
    this.initDefaultLanguage()
    return (this.package || new I18n()) as T
  }

  /**
   * ### 添加国际化语言
   * @param languages 语言包列表
   */
  static addLanguage<T extends I18n>(this: I18nClassConstructor<T>, ...languages: T[]): void {
    if (languages.length === 0) {
      throw new Error('languages is empty')
    }
    // 添加语言
    this.initDefaultLanguage()
    languages.forEach((item) => {
      I18n.languages.push(item)
    })
    // 初始化语言包
    I18n.package = I18n.languages.find(item => item.language === I18n.currentLanguage) || I18n.languages[0]
  }

  /**
   * ### 设置当前使用的语言
   * @param language 语言
   */
  static setCurrentLanguage(language: Language | string): void {
    this.currentLanguage = language
    this.package = this.languages.find(item => item.language === this.currentLanguage) || this.languages[0]
  }

  /**
   * ### 初始化默认语言
   */
  private static initDefaultLanguage<T extends I18n>(this: I18nClassConstructor<T>) {
    if (this.languages.length === 0) {
      this.languages.push(JSON.parse(JSON.stringify(new this())))
      this.setCurrentLanguage(this.languages[0].language)
    }
  }
}
