"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDifferenceInSeconds = void 0;
function getDifferenceInSeconds(dateLater, dateEarlier) {
    var difference = dateLater.valueOf() - dateEarlier.valueOf();
    return difference / 1000;
}
exports.getDifferenceInSeconds = getDifferenceInSeconds;
//# sourceMappingURL=DateHelper.js.map