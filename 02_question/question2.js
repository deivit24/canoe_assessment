class Mouth{
  constructor(person, mouth = false){
    this.mouth = mouth
    this.person = person
  }

  open(){
    this.mouth = true
      if (this.mouth){
        console.log(`${this.person}: 'O' AHHHHH`);

        setTimeout(() => {
          this.mouth = false
          console.log(`${this.person}: '-'`);
        }, 3000)
      }
  }
  close(){
    this.mouth = false;
    console.log(`${this.person}: Who are you my doctor?  '-' `);
  }
  askToOpen(person){
    console.log(`${person.occupation}: Open your mouth please.`);
    if(person.occupation === 'doctor'){
      console.log(`${this.person}: Okay Doc!`);
      this.open()
    } else {
      this.close()
    }
   
    
  }

  

}

class Person{
  constructor(occupation){
    this.occupation = occupation.toLowerCase();
  }
}

let d = new Person('Doctor');
let t = new Person('Teacher');
let l = new Person('lawyer');
let m = new Mouth('David');

m.askToOpen(t)

m.askToOpen(d);