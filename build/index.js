"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csvFileReader_1 = require("./csvFileReader");
var reader = new csvFileReader_1.CsvFileReader('original.csv');
reader.read();
console.log('reader data', reader.data);
