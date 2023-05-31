const ConnectionConfig = {
    default :{
        server : 'localhost',
        database : 'FanCartDB',
        authentication: { type: 'default' ,options : { userName: 'sa' , password : '12345678'}  } , 
        requesttimeout : 300000,
        Options :{
            encrypt : false,
            enableArithAbort :true
        }
    },
}

module .exports = ConnectionConfig;