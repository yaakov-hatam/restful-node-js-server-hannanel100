const dal = require('./dal');

// function getRunner(id, callback) {
//     callback(null, { "id": id, "name": "abc", "km": 42 });
//     /*
//     dal.getRunner(id, function (runnerData) {

//     })
//     */
// }

function getPhones(callback) {
    dal.readAll((e, allPhones) => {
        if (e) {
            callback(e);
        } else {
            callback(null, allPhones);
        }
    })
}

function createPhone(addedPhone, callback) {
    if (typeof addedPhone.id !== 'number') {
        callback('Phone id should be string');
    } else {
        dal.saveOne(addedPhone, (e) => {
            if (e) {
                callback(e);
            } else {
                callback(null);
            }
        })
    }
}

function updatePhone(runner) {

}

function deletePhone(phoneToDelete, callback) {
    dal.deleteOne(phoneToDelete, (e) => {
        if (e) {
            callback(e);
        } else {
            callback(null);
        }
    })
}

function filterPhoneList(selectedFiltersValues, callback) {
    dal.readAll((e, allPhones) => {
        let newArr = [];
        for (let i = 0; i < allPhones.length; i++) {
            if (allPhones[i].id == selectedFiltersValues.id) {
                newArr.push(allPhones[i]);
            } else if (allPhones[i].name == selectedFiltersValues.name) {
                newArr.push(allPhones[i]);
            } else if (allPhones[i].km == selectedFiltersValues.km) {
                newArr.push(allPhones[i]);
            }
        }
        if (e) {
            callback(e);
        } else {
            callback(null, newArr);
        }
    })
}
module.exports.updateRunner = function () {

}
// module.exports.getRunner = getRunner;
module.exports.getPhones = getPhones;
module.exports.createPhone = createPhone;
module.exports.filterPhoneList = filterPhoneList;
module.exports.deletePhone = deletePhone;
