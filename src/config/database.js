import Firebird from "node-firebird";

const dbOptions = {
    host: '127.0.0.1',
    port: 3050,
    database: 'C:\\Users\\mateus.duarte\\Documents\\Firebirb\\BANCONODE',
    user: 'SYSDBA',
    password: 'masterkey',
    lowercase_keys: false, // set to true to lowercase keys
    role: null,            // default
    pageSize: 4096,        // default when creating database
};

function executeQuary(ssql, params, callback) {
    Firebird.attach(dbOptions, function(err, db) {

        if (err){
            return callback(err, []);
        }
       
        db.query(ssql, params, function(err, result) {
            
            db.detach();

            if (err){
                return callback(err, []);
            } else {
                return callback(undefined, result);
            }
        });
    
    });
}

export {executeQuary};