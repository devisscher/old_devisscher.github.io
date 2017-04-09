---
layout: post
comments: true
title:  "Localhost trick: SSL"
date:   2017-04-08T09:00:00Z
categories: notes
tags: localhost ssl keychain certificates
---
Have you ever tested a website locally and run into the annoying warning Google Chrome provides when a site is insecure? Well the thing is, you know it is secure, it's running on your machine. You can create a certificate yourself and trust it yourself to avoid this warning and run a secure site on localhost. This is really useful too if you are doing iOS development and would like to test hitting API endpoints from your phone. Apple doesn't allow you to make requests to non secure servers. It is recommended you always keep things secure.

Let's get started, shall we?

1. Open Key Chain Access, open the Keychain Access menu and select: ``` Certificate Assistant -> New Certificate ```.
2. Name it ``` localhost ```. Choose ``` Self Signed Root ``` and ``` SSL Server ```. Click continue and accept the warning about self-signed certificates.
![Certificate Assistant Window](/assets/post_images/localhost_tricks1.png "Certificate Assistant")
3. You should see your certificate in the list of certificates: 
![Certificate Assistant Window](/assets/post_images/localhost_tricks2.png "Certificate Assistant")
4. Double click on it and choose always trust in the first dropdown menu:
![Certificate Assistant Window](/assets/post_images/localhost_tricks3.png "Certificate Assistant")
5. Export your certificate into a known location. Right click on the certificate from within Keychain Access and choose ``` Export "localhost" ```. Save it as ``` Certificates.p12 ```. You don't have to enter a password here. We will need to convert this to a key pair later. (Note: To use it in your website, you could create a folder on your machine, I created mine at ``` /Users/tdev/local-ssl ```). This is easy to get to so I can tell my sites to use this certificate quickly. 
6. Open terminal and make your way to the certificates folder you created in #5. ``` cd /Users/tdev/local-ssl ```.
7. Run the following command to create a .pem file.
``` openssl pkcs12 -in Certificates.p12 -out Certificates.pem -nodes ``` 
8. If you didn't enter a password when exporting the certificates then you don't need to enter a password when you are prompted to. Just press enter and continue.
9. Now you need to split the ``` Certificates.pem ``` into 2 files: ``` cert.pem ``` and ``` key.pem ```. Look at the contents of the Certificates file and you should see something like this. Take the certificate and its key and copy each of them into separate files.

![Certificate Assistant Window](/assets/post_images/localhost_tricks4.png "Certificate Assistant")

Once that is done, you can start using these certificates for testing sites locally. You should see this in your browser and life is good! 😄

![Certificate Assistant Window](/assets/post_images/localhost_tricks5.png "Certificate Assistant")

Enjoy!

