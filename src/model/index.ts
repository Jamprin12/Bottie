import low from "lowdb";
import FileSync from "lowdb/adapters/FileAsync";

const adapter = new FileSync("./db.json");
export const db = low(adapter);
export const database = (async () => await db)();
