/*
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⢛⣉⣥⣶⡖⠚⠛⠛⠛⠛⢲⣶⢬⣍⡛⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠟⣡⡶⠏⠁⠄⠄⢉⣷⣶⣶⣶⣾⡉⠄⠄⠈⠙⢷⣌⠻⣿⣿⣿⣿⣿
⣿⣿⣿⡟⣡⣾⠋⠄⠄⠄⠄⢰⣾⣿⠿⠿⡿⣿⣿⣆⠄⠄⠄⠄⠈⣳⣎⠻⣿⣿⣿ 
⣿⣿⠟⣴⠋⠄⠙⠲⢄⣀⠄⣿⣿⣭⣧⣴⣥⣥⣿⣿⡄⢀⣠⠔⠊⠁⠘⣧⠙⣿⣿ 
⣿⡟⣰⡏⠄⠄⠄⠄⠄⠉⠙⠛⠻⠿⠿⠿⠿⠿⠿⠛⠛⠉⠁⠄⠄⠄⠄⠸⣦⢹⣿ 
⣿⠃⣿⠄⣠⡤⣄⡀⢠⣤⣤⣄⢠⣬⣭⣤⣤⣤⠄⢀⣤⠄⡄⢀⣠⢤⣄⠄⣿⡌⣿ 
⣿⠄⣿⢸⡇⠄⣈⣁⢸⣀⣀⡟⢸⣧⣤⡄⣿⣿⡄⣸⢹⠄⡇⣿⠁⠄⢸⡇⢸⡇⣿ 
⣿⡄⣿⠈⠷⢤⠴⠻⠸⠄⠄⠿⠸⠧⠤⠤⠿⠇⠷⠇⠸⠄⠇⠹⠧⡤⠼⠃⣿⢃⣿ 
⣿⣧⠹⣇⠄⠄⠄⠄⢀⣀⣤⣴⣶⣶⣶⣶⣶⣶⣶⣦⣤⣀⡀⠄⠄⠄⠄⢰⠟⣸⣿ 
⣿⣿⣦⠻⣄⢀⣠⠴⠋⠉⠄⣿⣿⠿⠻⡛⠛⠟⣿⣿⠃⠈⠙⠲⢤⡀⢠⡟⣠⣿⣿
⣿⣿⣿⣧⡙⢿⣄⠄⠄⠄⠄⠸⢿⣿⣾⣶⣿⣶⣿⠏⠄⠄⠄⠄⢀⡽⢏⣼⣿⣿⣿ 
⣿⣿⣿⣿⣿⣦⡙⠷⣆⡀⠄⠄⣈⡿⠿⠿⠿⢿⣁⠄⠄⢀⣠⡾⢋⣴⣿⣿⣿⣿⣿ 
⣿⣿⣿⣿⣿⣿⣿⣷⣮⣉⡛⠿⠧⢤⣤⣤⣤⣤⠼⠿⢚⣋⣥⣾⣿⣿⣿⣿⣿⣿⣿ 
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿

*/

class aluno{
    constructor(nome, email, ra, curso){
        this.nome = nome
        this.email = email
        this.ra = ra
        this.curso = curso
    }

}
    const aluno1 = new aluno("Tigas","tigas@yahoo","123456789",("Matematica","Historia","Sociologia"))

    const aluno2 = new aluno("Parlin","parlin@gmail.com","987654321",("Português","Inglês","Filosofia","Sociologia"))


console.log(aluno1)

console.log(aluno2) 