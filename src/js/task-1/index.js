function isEmpty(obj) {
    for(let key in obj) {
        return false;
    }
    return true;
}

let schedule = {};
console.log('Task-1. Проверка на пустоту объекта: ' + isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log('Task-1. Проверка на пустоту объекта: ' + isEmpty(schedule)); // false
