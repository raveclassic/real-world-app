import { readonlyArray, string, Type } from 'io-ts'

export type Tag = string

export const tagCodec: Type<Tag, unknown> = string

export interface Tags extends ReadonlyArray<Tag> {}

export const tagsCodec: Type<Tags, unknown> = readonlyArray(tagCodec)
