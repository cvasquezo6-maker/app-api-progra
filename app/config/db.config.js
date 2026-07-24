module.exports = {
  HOST: "ep-orange-darkness-atewj8ks-pooler.c-9.us-east-1.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_Rz7rHsCpqy2Q",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
