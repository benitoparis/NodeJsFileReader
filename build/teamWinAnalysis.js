"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TeamWinAnalysis = /** @class */ (function () {
    function TeamWinAnalysis(matchesData, teamName) {
        this.matchesData = matchesData;
        this.teamName = teamName;
    }
    TeamWinAnalysis.prototype.getMatchWin = function () {
        var _this = this;
        var win = 0;
        this.matchesData.forEach(function (match) {
            if ((match[1] === _this.teamName && match[5] === 'H') || (match[2] === _this.teamName && match[5] === 'A')) {
                win++;
            }
        });
        return win;
    };
    TeamWinAnalysis.prototype.getMatchLost = function () {
        var _this = this;
        var lost = 0;
        this.matchesData.forEach(function (match) {
            if ((match[1] === _this.teamName && match[5] === 'A') || (match[2] === _this.teamName && match[5] === 'H')) {
                lost++;
            }
        });
        return lost;
    };
    return TeamWinAnalysis;
}());
exports.TeamWinAnalysis = TeamWinAnalysis;
