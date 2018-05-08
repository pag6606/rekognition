const Rekognition = require('node-rekognition')
var  fs = require('fs');
 
// Set your AWS credentials
const AWSParameters = {
    accessKeyId: '',
    secretAccessKey: '',
    region: '',
    bucket: ''
};
var reconocimiento  = new Rekognition(AWSParameters);
var folder= "imagenes"; 
const imagen =reconocimiento.uploadToS3('billgates.jpg', folder);
imagen.then(function(result){
    reconocimiento.detectFaces(result)
    .then(function(res){
        console.log(res.FaceDetails);
    });
})


