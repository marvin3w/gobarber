module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  passwords: 'docker',
  database: 'gobarber',
  define: {
    timestamp: true,
    underscore: true,
    underscoreAll: true,
  },
};
