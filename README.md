# image-base64-ftp

Description
===========
image-base64-ftp is function for generate base64 string format from image in FTP server.

File photos/images usually put on the folder project backend server, for example  folder public/images, so backend server can serve easily images to the client. For now backend is put on container with stateless environtment. File photos/images will put on FTP server.

To serve images from backend server to client, we can use format base64 the images, and put on json format.

Install
=======
`npm install image-base64-ftp `


Dependencies
============

* [ftp package](https://www.npmjs.com/package/ftp)


Examples
========

    var img64=require('image-base64-ftp')

    async function tesPhoto(){
         result= await img64.getImage64Ftp('store/photo.png',
         varFtp.host,varFtp.username,varFtp.password)
         console.log(result)
    }
    tesPhoto()



API
===

Methods
-------

* **getImage64Ftp**(< _object_ >config) - _(void)_ - Connects to an FTP server. Valid config properties:

    * pathimagelocation - _string_ - folder and name file image

    * host - _string_ - The hostname or IP address of the FTP server. **Default:** 'localhost'

    * user - _string_ - Username for authentication. **Default:** 'anonymous'

    * password - _string_ - Password for authentication. **Default:** 'anonymous@'

   

