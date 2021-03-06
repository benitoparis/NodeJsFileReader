"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    // Méthode pour lire un fichier css présent sur le serveur
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.fileName, { encoding: 'utf-8' })
            .split('\n')
            .map(function (match) {
            return match.split(',');
        });
        this.data.pop();
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
