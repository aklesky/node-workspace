import { deepmergeCustom } from 'deepmerge-ts'
export const deepmerge = deepmergeCustom({
    enableImplicitDefaultMerging: true,
    mergeArrays(values) {
        const array = values.reduce((prev, next) => {
            return [...prev, ...next]
        }, [])
        return Array.from(new Set([...array]))
    },
    mergeOthers(records, utils, meta) {
        if (records.every(record => typeof record === 'boolean')) {
            return utils.defaultMergeFunctions.mergeOthers(records)
        }
        if (meta && meta?.parents?.every(record => record?.constructor?.name === 'Object')) {
            const { key, parents } = meta
            const value = parents.reduce((prev, next) => {
                const v = next?.[key] || prev?.[key] || undefined
                return {
                    ...(prev || {}),
                    [key]: v,
                }
            })
            return value?.[key]
        }

        return utils.defaultMergeFunctions.mergeOthers(records)
    },
})

export default deepmerge
