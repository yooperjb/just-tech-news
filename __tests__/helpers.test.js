const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
});

test('format_plural() correctly pluralizes words', () => {
    
    expect(format_plural("Tiger", 2)).toBe('Tigers');
    expect(format_plural("Lion", 1)).toBe('Lion');
});

// test format url
test('format_url() returns a simplified URL string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');
    
    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});