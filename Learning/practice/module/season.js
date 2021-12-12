let seasons = ['Winter', 'Winter', 'Winter', 'Spring', 'Spring', 'Spring', 'Summer', 'Summer', 'Summer', 'Fall', 'Fall', 'Fall'];

export default {
    getSeason: (date) => {
        const month = date.getMonth();
        return seasons[month]
    }
}