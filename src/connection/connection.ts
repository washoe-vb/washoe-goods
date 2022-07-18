const { connect } = require("mongoose");

export const connectToDatabase = (databaseUrl: string) =>
  connect(databaseUrl).then(onSuccess).catch(onError);

const onSuccess = () => console.log("[Database] connected to database");
const onError = (error: Error) => {
  console.error(`[Database] connection error: ${error.message}`);
  process.exit();
};
