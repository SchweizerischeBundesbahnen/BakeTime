class Baker {
    constructor(id, name, quota, flavours, pastries) {
        this.id = id;
        this.name = name;
        this.quota = quota;
        this.flavours = flavours; // Array of strings
        this.pastries = pastries; // Array of Pastry objects
    }
}

module.exports = Baker;