import { PropsWithChildren, useEffect } from 'react'

const MockComponent2 = (props: PropsWithChildren<any>) => {
    useEffect(() => {
        console.info('mocking component mounted')
    }, [])

    return (
        <>
            {props.test.mocking.error}
            <div>A mocking component</div>
        </>
    )
}

export default MockComponent2
