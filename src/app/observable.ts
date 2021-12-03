class Observable {
    a = 1;

    evento(valor: number) {
        console.log("Recebeu valor!" + valor);
    }
}


class Transmiter {
    observadores: Observable[] = [];

    mudou(valor: number) {
        for (let ob of this.observadores) {
            ob.evento(
                valor
            )
        }
    }
}

export class Main {
    transmissor: Transmiter = new Transmiter(); 

    async fazerAlgumaCoisa(url: string) {
        setTimeout(() => {this.transmissor.mudou(154);}, 3000);        
    }

    pegarUrl(url: string): Observable {
        let ob = new Observable();
        this.transmissor.observadores.push(ob);
        
        this.fazerAlgumaCoisa(url);

        return ob;
    }

    main() {
        let resposta = this.pegarUrl("aa");

        console.log(resposta.a);
    }
}