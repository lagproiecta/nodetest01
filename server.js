const express = require('express');
const app=express();
app.get('/',(req,res)=>res.send('LAG Hola mundo con express SEGUNDA VERSION!!'))

app.listen(3000);
console.log('Server on port 3000 LAG2 ');
