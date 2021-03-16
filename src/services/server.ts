import { database, db } from "../model";

export const getServerPrefix = async () => {
  (await database).defaults({ prefix: "!" }).write();
  db.then(console.log);
  const prefix = (await database).get("prefix");
  console.log(prefix.value());
};
