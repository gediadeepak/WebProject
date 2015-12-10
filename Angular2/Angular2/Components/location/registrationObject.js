var Registration = (function () {
    function Registration(fname, lname, addType, add) {
        if (fname === void 0) { fname = ''; }
        if (lname === void 0) { lname = ''; }
        if (addType === void 0) { addType = ''; }
        if (add === void 0) { add = ''; }
        this.firstName = fname;
        this.lastName = lname;
        this.type = addType;
        this.address = add;
    }
    return Registration;
})();
exports.Registration = Registration;
//# sourceMappingURL=registrationObject.js.map