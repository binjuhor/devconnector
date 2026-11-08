import formatDate from './formatDate';

describe('formatDate', () => {
    it('formats dates as YYYY/MM/DD', () => {
        expect(formatDate(new Date(2024, 0, 5))).toBe('2024/01/05');
    });

    it('returns empty string for missing values', () => {
        expect(formatDate(null)).toBe('');
        expect(formatDate(undefined)).toBe('');
    });
});
