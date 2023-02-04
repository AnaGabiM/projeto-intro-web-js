const cursos = ["HTML e CSS", "JavaScript", "APIs REST"];
const turmas = ["HC1", "JS1", "JS2", "REST1", "REST2"];
const estudantes = ["Lashana", "Halle", "Chris"];

const meusCursos = [
    {
        curso : "HTML e CSS",
        descriçao : "Aprenda a base de uma pagina Web!",
        duraçao : "1 meses",
        valor : 500
    },
    {
        curso :"JavaScript",
        descriçao : "Domine Java!",
        duraçao : "2 meses",
        valor : 900
    },
    {
        curso :"APIs REST",
        descriçao : "Domine APIs!",
        duraçao : "6 meses",
        valor : 2000
    }
]
const minhasTurmas = [
    {
        turma : "Hipátia",
        curso : "JavaScript",
        inicio : "30/11/2022",
        termino : "30/01/2023",
        nAlunos : 150,
        periodo : "noturno",
        concluida : false
    },
    {
        turma : "Sibyla",
        curso : "JavaScript",
        inicio : "30/10/2022",
        termino : "30/12/2022",
        nAlunos : 200,
        periodo : "integral",
        concluida : false
    },
    {
        turma : "Curie",
        curso : "HTML e CSS",
        inicio : "15/09/2022",
        termino : "15/10/2022",
        nAlunos : 180,
        periodo : "noturno",
        concluida : true
    },
    {
        turma : "Zhenyi",
        curso : "HTML e CSS",
        inicio : "01/11/2022",
        termino : "01/01/2023",
        nAlunos : 80,
        periodo : "integral",
        concluida : false
    },
    {
        turma : "Clarke",
        curso : "HTML e CSS",
        inicio : "04/07/2022",
        termino : "04/09/2022",
        nAlunos : 200,
        periodo : "noturno",
        concluida : true
    },
    {
        turma : "Blackwell",
        curso : "APIsRest",
        inicio : "20/03/2022",
        termino : "20/06/2022",
        nAlunos : 100,
        periodo : "integral",
        concluida : true
    },
    {
        turma : "Elion",
        curso : "APIsRest",
        inicio : "12/01/2022",
        termino : "12/06/2022",
        nAlunos : 200,
        periodo : "noturno",
        concluida : true
    },
    {
        turma : "Burnell",
        curso : "APIsRest",
        inicio : "18/10/2022",
        termino : "18/04/2023",
        nAlunos : 90,
        periodo : "integral",
        concluida : false
    }
]
const meusEstudantes = [
    {
        estudante : "Chris Evans",
        turma : "Hipátia",
        curso : "JavaScript",
        valor : "900",
        nParcelas : 9,
        desconto : false,
        parcelas : 100
    },
    {
        estudante : "Halle Berry",
        turma : "Burnell",
        curso : "APIsRest",
        valor : "2000",
        nParcelas : 4,
        desconto : false,
        parcelas : 500
    },
    {
        estudante : "Lashana Lynch",
        turma : "Zhenyi",
        curso : "HTML e CSS",
        valor : "500",
        nParcelas : 1,
        desconto : true,
        parcelas : 500
    }
]


function parcelarCurso (carrinhoCursos, parcelas) {
        
    valorTotal = 0;
    tamCarrinho = carrinhoCursos.length;

    for (i in carrinhoCursos) {
        valorTotal += carrinhoCursos[i]
    }
    switch (tamCarrinho) {
        
        case 1:
            descontoParcelado = valorTotal*0.2
            valorDescontado = valorTotal - descontoParcelado
            parceladoComDesconto = valorDescontado/parcelas
            parceladoSemDesconto = valorTotal/parcelas
            if (parcelas <= 2) {  
                return (`O valor do pagamento é de R$ ${valorDescontado} com 20% de desconto, parcelado em ${parcelas}x de R$${parceladoComDesconto}`) 
            } else {
                return (`O valor do pagamento é de R$${valorTotal}, parcelado em ${parcelas}x de ${parceladoSemDesconto}`)
            }
            break;

        case 2:
            desconto10 = valorTotal*0.1
            descontoParcelado = valorTotal*0.2
            valorDescontado = valorTotal - descontoParcelado
            descontoCurso2 = valorDescontado - desconto10
            parceladoCurso2= descontoCurso2/parcelas
            parceladoSemDesconto = valorTotal/parcelas
            valorTotalDesc10 = valorTotal - desconto10
            if (parcelas <= 2) {            
                return (`O valor do pagamento é de R$ ${descontoCurso2} com 30% de desconto, parcelado em ${parcelas}x de R$${parceladoCurso2}`)
            } else {
                return (`O valor do pagamento é de R$ ${valorTotalDesc10} com 10% de desconto, parcelado em ${parcelas}x de R$${parceladoSemDesconto}`)
            }
            break;

        case 3:
            desconto15 = valorTotal*0.15
            descontoParcelado = valorTotal*0.2
            valorDescontado = valorTotal - descontoParcelado
            descontoCurso3 = valorDescontado - desconto15
            parceladoCurso3= descontoCurso3/parcelas
            parceladoSemDesconto = valorTotal/parcelas
            valorTotalDesc15 = valorTotal - desconto15
            if (parcelas <= 2) {
                console.log(`O valor do pagamento é de R$ ${descontoCurso3} com 35% de desconto, parcelado em ${parcelas}x de R$${parceladoCurso3}`)
            } else {
                return (`O valor do pagamento é de R$ ${valorTotalDesc15} com 15% de desconto, parcelado em ${parcelas}x de R$${parceladoSemDesconto}`)
            }
            break;
        default:
            return("Desculpe, curso nao encontrado");
    }
    
}
console.log(parcelarCurso([], 2))

function adicionarCarrinho (cursoCarrinho) {
    carrinhoCursos = []
    cursoBuscado = buscarCursos(cursoCarrinho)
    carrinhoCursos.push(cursoBuscado.valor)
    return carrinhoCursos
}



//Funções buscar

function buscarCursos (buscaDoCurso) {
    cursoFiltrado = meusCursos.find((el) => el.curso.toLocaleLowerCase() === buscaDoCurso.toLocaleLowerCase())

    if (cursoFiltrado === undefined) {
        return (`Curso não encontrado`)
    } else {
        return cursoFiltrado
    }
}
//console.log(buscarCursos("javascript"))

function buscarTurma (buscaDeTurma) {
    buscaDeTurma = document.getElementsByClassName("input-pesquisaaa")
    cards = document.getElementsByClassName("mae-todos-quadrad")

    turmaFiltrada = minhasTurmas.filter(el => el.turma.toLocaleLowerCase() == buscaDeTurma.toLowerCase())

    turmaFiltrada.length === 0 ? console.log(`Turma não encontrada!`) : console.log(turmaFiltrada)
    return turmaFiltrada
}
buscarTurma()

function buscarEstudante (buscaDeEstudante) {
    estudanteFiltrado = meusEstudantes.filter((el) => {
        if (el.estudante.toLowerCase().indexOf(buscaDeEstudante.toLowerCase()) !== -1) {
            console.log(el)
        } else {
            console.log("Estudante não encontrado")
        }
    })
}
//buscarEstudante("")

//Funções matricular
function matricular (nomeDoAluno, nomeDoCurso, nomeDaTurma, numeroParcelas) {
    novoAluno = {
        estudante : nomeDoAluno,
        turma : nomeDaTurma,
        curso : nomeDoCurso,
        nParcelas : numeroParcelas
    }
    meusEstudantes.push(novoAluno)
    return (` Aluno matriculado \n Nome:${nomeDoAluno} \n Curso:${nomeDoCurso} \n Turma:${nomeDaTurma}`)
}
matricular()

function relatorioEstudante (estudanteBuscado) {
    busca = buscarEstudante(estudanteBuscado);
    return (`Aluno: ${busca.estudante} \n Turma: ${busca.turma} \n Curso: ${busca.curso} \n Valor Total: ${busca.valor} \n Valor Parcela: ${busca.parcelas} \n Nº Parcelas: ${busca.nParcelas}`)
}
//relatorioEstudante()


