import db from "../db.json";

export type Product = (typeof db.products)[0];
