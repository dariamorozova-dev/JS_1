class Config {
    constructor() {
        const settings = new Settings();
        this.rowCount = settings.rowCount;
        this.colCount = settings.colCount;
    }

    getRowsCount() {
        return this.rowCount;
    }

    getColsCount() {
        return this.colCount;
    }
}