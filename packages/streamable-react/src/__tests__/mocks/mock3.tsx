const arr = new Array(3000000).fill(0)
export default () => {
    return (
        <div>
            {arr.map((value: number, i: number) => {
                return <p key={i}>{value}</p>
            })}
        </div>
    )
}
