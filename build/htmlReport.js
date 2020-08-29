"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var HtmlReport = /** @class */ (function () {
    function HtmlReport(
    //private dataSet: MatchData
    ) {
        this.html = '';
    }
    HtmlReport.prototype.generateHtml = function () {
        this.html = "\n        <div>Reporting</div>\n        <div>fdfsdfdfsfd</div>\n        ";
    };
    // Méthode pour créer le fichier html
    HtmlReport.prototype.createHtmlFile = function () {
        this.generateHtml();
        fs_1.default.writeFileSync('reporting.html', this.html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
