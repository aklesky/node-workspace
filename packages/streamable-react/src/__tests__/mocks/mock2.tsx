import { PropsWithChildren } from 'react'
export default (props: PropsWithChildren<any>) => {
    return (
        <>
            {props.test.mocking.error}
            <div>Mock2</div>
        </>
    )
}
