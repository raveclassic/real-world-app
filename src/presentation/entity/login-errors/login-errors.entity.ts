import { readonlyArray, record, string } from 'io-ts'

export interface LoginErrors extends Record<string, readonly string[]> {}

export const loginErrorsCodec = record(string, readonlyArray(string))
