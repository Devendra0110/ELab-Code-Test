# Project Details
It's a Server app based on node.js.


# Endpoint Details
## 1. POST (/)
It  allows user to upload multiple files. In the multipart the keyname to file array should be `files`.
On successful completion it sends the response object, which have `message` key with `'file(s) uploaded successfully'`.
On Error it returns the error to the client
## 2. GET (/)
It is to download the file from server. For the file specifiation,
it takes the field `fileName` from `query-params`.

# Dependencies
## 1.ExpressJs@^4.18.1
## 2.Multer@^1.4.4


# Before start
## install the dependencies using `npm i`

# How to Run
## run script `npm run start` to start the server
