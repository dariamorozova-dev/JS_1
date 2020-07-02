class Config {
    constructor() {
        const settings = new Settings();
        this.rowCount = settings.rowCount;
        this.colCount = settings.colCount;
    }
    
    // init(settings) {
    //     this.settings = settings;
    // }

    getRowsCount() {
        return this.rowCount;
    }

    getColsCount() {
        return this.colCount;
    }
}