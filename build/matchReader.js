"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader = /** @class */ (function () {
    function MatchReader(matches) {
        this.matches = matches;
        this.data = [];
        this.data = this.matches.map(function (row, index) {
            return [
                new Date(row[0]),
                row[1].toString(),
                row[2].toString(),
                parseInt(row[3]),
                parseInt(row[4]),
                row[5].toString()
            ];
        });
    }
    ;
    return MatchReader;
}());
exports.MatchReader = MatchReader;
