function combineUsers(...args) {
  const combinedObject = {
    users: []
};

for (const arg of args) {
  combinedObject.users = [...combinedObject.users, ...arg];
}

combinedObject.merge_date = new Date().toString("M/d/yyyy");

 return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })

};