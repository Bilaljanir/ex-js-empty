/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} true if n is bigger than 2
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
    if (typeof needle !== 'string' || typeof haystack !== 'string' || typeof newWord !== 'string') {
        throw new Error("Invalid input types");
    }

    const regex = new RegExp(needle, 'gi');
    return haystack.replace(regex, (match) =>
        newWord
            .split('')
            .map((char, index) =>
                index < match.length
                    ? match[index].toUpperCase() === match[index]
                        ? char.toUpperCase()
                        : char.toLowerCase()
                    : ''
            )
            .join('')
    );
}
