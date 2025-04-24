import type { I18n } from './I18n'

/**
 * ### 语言类构造器
 */
export type I18nClassConstructor<T extends I18n> = (new () => T) & typeof I18n
