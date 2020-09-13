"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var HtmlReport = /** @class */ (function () {
    function HtmlReport(dataSet) {
        this.dataSet = dataSet;
        this.html = '';
        //console.log('this.dataSet', this.dataSet);
    }
    HtmlReport.prototype.generateHtml = function () {
        var _this = this;
        this.html = "<table>";
        this.dataSet.forEach(function (row) {
            _this.html += "<tr>\n            <td>" + row[0] + "</td>\n            <td>" + row[1] + "</td>\n            <td>" + row[2] + "</td>\n            <td>" + row[3] + "</td>\n            <td>" + row[4] + "</td>\n            <td>" + row[5] + "</td>\n            \n            </tr>";
        });
        this.html += "</table>";
        console.log('this.html', this.html);
    };
    // Méthode pour créer le fichier html
    HtmlReport.prototype.createHtmlFile = function () {
        this.generateHtml();
        fs_1.default.writeFileSync('reporting.html', this.html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
