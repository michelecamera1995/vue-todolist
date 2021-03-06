console.log("js-ok")


/*

MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

*/

const app = new Vue({
    el: '#app',
    data: {
        toDoList: [{ text: 'fare esercizio', done: true }, { text: 'pulire', done: false }, { text: 'andare al supermercato', done: true },{ text: 'comprare i pomodori', done: false },],
        newListElement:'',
        mycolor: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    },
    methods: {
        taskDone(item) {
           if (item.done === true){
               return 'barred' ;
           }
        },
        removeElement (index) {
            this.toDoList.splice(index.index, 1);
        },
        addNewThingToList () {
            const inputWord = this.newListElement.trim()
            const newMember = {
                text: inputWord,
                done: false,
              }
              this.toDoList.push(newMember);
        },
        taskCheck (index) {
            console.log(index);
            this.toDoList[index].done = true;
        },
    }
});

