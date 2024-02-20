export const orderByDate = (data) => {
    const arrayOfDates = [];
    data.forEach((item) => {
        if (!arrayOfDates.includes(item.dueDate)) {
        arrayOfDates.push(item.dueDate);
        };
    });
    arrayOfDates.sort();
    const arrayOfSortedTasks = [];
    arrayOfDates.forEach((dueDate) => {
        const tasks = [];
        data.forEach((item) => {
            if (item.dueDate === dueDate) {
                tasks.push(item);
            };
        });
        arrayOfSortedTasks.push({date: dueDate, tasks: tasks});
    })
    return arrayOfSortedTasks;
};