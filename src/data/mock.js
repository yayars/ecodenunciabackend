// dados fake pra simular um banco de dados
// quando o servidor reiniciar, volta tudo ao original

const usuarios = [
    {
        id: 1,
        nome: "Ana",
        email: "ana@gmail.com",
        senha: "123456"
    },
    {
        id: 2,
        nome: "Sabrina",
        email: "sabrinagarcia@gmail.com",
        senha: "Sgg2204!"
    },
    {
        id: 3,
        nome: "Yasmin",
        email: "yasmin@gmail.com",
        senha: "123456"
    }
    
]

const denuncias = [
    {
        id: 1,
        tipo: "Descarte irregular de lixo doméstico",
        descricao: "Lixo jogado na calçada da Rua das Flores",
        local: "Rua das Flores, 123 - Centro",
        nome: "Ana",
        email: "ana@gmail.com",
        anonimo: false,
        criadoEm: "2026-04-20T10:30:00"
    },
    {
        id: 2,
        tipo: "Poluição de rios / água",
        descricao: "Água do rio com cor esverdeada e mau cheiro",
        local: "Rio Tietê - próximo à ponte da Av. Brasil",
        nome: "",
        email: "",
        anonimo: true,
        criadoEm: "2026-04-22T14:15:00"
    }
]

// contadores pra gerar ids novos
let proximoIdUsuario = 4
let proximoIdDenuncia = 3

function gerarIdUsuario() {
    return proximoIdUsuario++
}

function gerarIdDenuncia() {
    return proximoIdDenuncia++
}

export { usuarios, denuncias, gerarIdUsuario, gerarIdDenuncia }