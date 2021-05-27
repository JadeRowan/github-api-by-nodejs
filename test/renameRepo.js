const renameRepo = require('../src/renameRepo')

describe('Example №1: simpleDelay', () => {
    let array

    beforeEach(() => {
        array = []
    })

    test('is NOT empty', done => {
        simpleDelay(array, result => {
            console.log('Сallback-function actions...')
            result.push('Сallback-function actions...')
            console.log(result)
            try{
                expect(result.length).toBeGreaterThan(0)
                done()
            } catch (e) {
                done(e)
            }
        })
    })

    test('has right order of elements', done => {
        simpleDelay(array, result => {
            console.log('Сallback-function actions...')
            result.push('Сallback-function actions...')
            console.log(result)
            try {
                expect(result[0]).toBe('Start')
                expect(result[1]).toBe('End')
                expect(result[2]).toBe('Actions after timeout...')
                expect(result[3]).toBe('Сallback-function actions...')
                done()
            } catch (e) {
                done(e)
            }
        })
    })
})