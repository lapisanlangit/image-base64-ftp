var Client = require('ftp');

module.exports = {
    getPhotoFtp: async (pathPhoto,ftpHost,ftpUsername,ftpPassword) => {
        return new Promise((resolve, reject) => {
            data = ''
            result64 = ''
            var c = new Client();
            c.on('ready', function () {
                c.get(pathPhoto, function (err, stream) {
                    if (err) {
                        resolve('error no file');
                        c.end();
                        return;
                    }
                    stream.once('close', function () { c.end(); });
                    stream.on("data", function (chunk) {
                        result64 = new Buffer.from(chunk).toString('base64')
                        data = data + result64
                        resolve(data);
                    });

                });
            });
            c.connect({ host: ftpHost, user: ftpUsername, password: ftpPassword })
        })
    }
}