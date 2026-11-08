const formatter = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
});

// Formats a date value as YYYY/MM/DD in the viewer's local timezone.
const formatDate = date => {
    if (!date) return '';
    return formatter.format(new Date(date)).replaceAll('-', '/');
};

export default formatDate;
