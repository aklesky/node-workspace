export function match(regex: RegExp[] | RegExp) {
    let expression: RegExp
    if (Array.isArray(regex)) {
        expression = (regex.length > 1 && new RegExp(regex.map(x => x.source).join('|'))) || regex[0]
    } else {
        expression = regex
    }
    return (url?: string): boolean => {
        if (!expression || !url) {
            return false
        }
        const matched = url.match(expression)
        return (matched && true) || false
    }
}

export default match
