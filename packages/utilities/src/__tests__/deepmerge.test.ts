import { deepmerge } from '../deepmerge.js'

const defaultConfig = {
    test: 1,
    initial: 100,
    value: true,
    namespace: {
        value: 'somevalue',
        somevalue: {
            value: 'somevalue',
            value1: ['somevalue', 'somevalue1'],
        },
    },
}

const receivedObject = {
    test: undefined,
    initial: 200,
}

describe('Deepmerge config merge', () => {
    it('should combine the two objects with default value', () => {
        const result = deepmerge(defaultConfig, receivedObject)
        expect(result).toEqual(
            expect.objectContaining({
                initial: 200,
            }),
        )
    })
    it('should combine the two objects with default value', () => {
        const result = deepmerge(
            defaultConfig,
            {
                initial: 200,
            },
            { initial: 600 },
            {
                initial: 980,
            },
        )
        expect(result).toEqual(
            expect.objectContaining({
                initial: 980,
            }),
        )
    })

    it('should combine 2 strings into array of strings', () => {
        const result = deepmerge('somevalue', 'somevalue1')
        expect(result).toEqual('somevalue1')
    })
    it('should combine 2 arrays into one', () => {
        const result = deepmerge(['somevalue', 'somevalue1'], ['somevalue2'])
        expect(result).toEqual(['somevalue', 'somevalue1', 'somevalue2'])
    })
    it('should combine the two objects with default value', () => {
        const result = deepmerge(
            defaultConfig,
            {
                initial: 200,
                namespace: {
                    value: 'somevalue',
                    somevalue: {
                        value: 'somevalue2',
                        value1: ['somevalue', 'somevalue1', 'somevalue2'],
                    },
                },
            },
            { initial: 600 },
            {
                initial: 980,
                namespace: {
                    value: 'somevalue1',
                    somevalue: {
                        value: undefined,
                    },
                },
            },
            {
                initial: 970,
                namespace: {
                    value: 'somevalue2',
                    somevalue: {
                        value: 'somevalue3',
                        value1: ['somevalue3'],
                    },
                },
            },
        )

        expect(result).toEqual(
            expect.objectContaining({
                initial: 970,
                namespace: {
                    value: 'somevalue2',
                    somevalue: {
                        value: 'somevalue3',
                        value1: ['somevalue', 'somevalue1', 'somevalue2', 'somevalue3'],
                    },
                },
            }),
        )
    })

    it('should combine the two objects with default value and return default', () => {
        const result = deepmerge(
            defaultConfig,
            {
                initial: 200,
                value: false,
                namespace: {
                    value: 'somevalue',
                    value1: 'somevalue1',
                },
            },
            { initial: 600 },
            { initial: 601 },
        )

        expect(result).toEqual(
            expect.objectContaining({
                initial: 601,
                value: false,
                namespace: {
                    value: 'somevalue',
                    value1: 'somevalue1',
                    somevalue: {
                        value: 'somevalue',
                        value1: ['somevalue', 'somevalue1'],
                    },
                },
            }),
        )
    })
})
