export function escapeRegExp(stringToGoIntoTheRegex: string) {
    return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

