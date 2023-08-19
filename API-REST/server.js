import app from './src/app.js'
import dbConex from './db/db.js'
//constantes usam como padrão letras maiusculas
const PORT = 3000;

// escuta a porta  
dbConex.connect((erro) => {
    if(erro) {
        console.log(erro)
    }else{
        console.log("Conexão realizada com sucesso")
        //subir o servidor
        app.listen(PORT,()=>{
            console.log(`servidor rodando no endereço http://localhost:${PORT}`);
        })
    }
})

