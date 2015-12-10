export class Registration {
    firstName: string;
    lastName: string;
    type: string;
    address: string;

    constructor(fname: string='', lname: string='', addType: string='', add: string='') {
        this.firstName = fname;
        this.lastName = lname;
        this.type = addType;
        this.address = add;
    }
}
 