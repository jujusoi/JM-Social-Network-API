
const reformatDate = (date) => {
    const options = {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    };
    return date.toLocaleTimeString(undefined, options);
};

module.exports = reformatDate;