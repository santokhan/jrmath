export function valid(params: string | string[]) {
    if (typeof params === 'string') {
        return params
    } else {
        // return if `Array.isArray(params)`
        return ""
    }
}