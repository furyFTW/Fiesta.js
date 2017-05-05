import * as esprima from 'esprima';

let code = esprima.parse(`
    function a (){ 
        return 1 ;
    }
    var b = () => 2;
    `);
console.log(code);