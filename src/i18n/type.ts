import type { I18n } from './I18n'

export type I18nClassConstructor<T extends I18n> = (new () => T) & typeof I18n
