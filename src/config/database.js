import firebird from "node-firebird";

const dbOptions = {
    host: '127.0.0.1',
    port: 3050,
    database: 'E:\\Documentos\\Firebird\\BANCONODE.FDB',
    user: 'SYSDBA',
    password: 'R@&%64t3',
    lowercase_keys: false, // set to true to lowercase keys
    role: null,            // default
    pageSize: 4096,        // default when creating database
};

export {dbOptions};