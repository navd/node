To create an HTTPS server, you need two things: an SSL certificate, and Node's built-in https module.

We need to start out with a word about SSL certificates. Speaking generally, there are two kinds of certificates: those signed by a 'Certificate Authority', or CA, and 'self-signed certificates'. A Certificate Authority is a trusted source for an SSL certificate, and using a certificate from a CA allows your users to be trust the identity of your website. In most cases, you would want to use a CA-signed certificate in a production environment - for testing purposes, however, a self-signed certicate will do just fine.

To generate a self-signed certificate, run the following in your shell: 


`openssl genrsa -out key.pem`

`openssl req -new -key key.pem -out csr.pem`

`openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem`

`rm csr.pem`


This should leave you with two files, cert.pem (the certificate) and key.pem (the private key). This is all you need for a SSL connection. So now you set up your quick secure server by using provided file named with "secureserver.js" and when server is started, go to your browser, and test it on https://localhost:8000. 
