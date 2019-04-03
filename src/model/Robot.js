const MAX_INTEGRITY = 100;
const MIN_INTEGRITY = 0;

export default class Robot {
    constructor(name="name", integrity=100) {
      this.name = name;
      this.integrity= integrity;
    }
  
    getName(){
      return this.name;
    }
  
    getIntegrity(){
      return this.integrity;
    }
    
    /**
     * Change la valeur de l'intégrité du Robot en fonction de la valeur donnée en parametres
     * @param {int} value valeur à ajouter/retirer de l'intégrité
     */
    changeIntegrity(value)
    {
        //pour pas augmenter de plus que la maxintegrity
        let diffMax = MAX_INTEGRITY-this.integrity;
        console.log(diffMax)
        console.log(this.integrity)
        console.log(value)

        if((this.integrity < MAX_INTEGRITY && (value >= 0 && value < diffMax)) || (this.integrity > MIN_INTEGRITY && (value < 0 && value < this.integrity)))
        {
            this.integrity += value;
        }
    }
  }
  