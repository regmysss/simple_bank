const UPPERCASE_WORDS = ['atm'];

export default function formatSegment(segment: string): string {
    return segment
        .split('-')
        .map(word =>
            UPPERCASE_WORDS.includes(word)
                ? word.toUpperCase()
                : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(' ');
}