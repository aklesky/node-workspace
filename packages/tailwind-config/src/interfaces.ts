import { ExtractorFn, FilePath, RawFile, TransformerFn } from 'tailwindcss/types/config.js'

export type FileType = {
    files: (FilePath | RawFile)[]
    relative?: boolean
    extract?: ExtractorFn | { [extension: string]: ExtractorFn }
    transform?: TransformerFn | { [extension: string]: TransformerFn }
}

export interface TailwindOptions {
    forms?: boolean
    typography?: boolean
    aspectRatio?: boolean
    lineClamp?: boolean
}
