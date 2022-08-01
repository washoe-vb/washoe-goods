"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const { connect } = require("mongoose");
const connectToDatabase = (databaseUrl) => connect(databaseUrl).then(onSuccess).catch(onError);
exports.connectToDatabase = connectToDatabase;
const onSuccess = () => console.log("[Database] connected to database");
const onError = (error) => {
    console.error(`[Database] connection error: ${error.message}`);
    process.exit();
};
