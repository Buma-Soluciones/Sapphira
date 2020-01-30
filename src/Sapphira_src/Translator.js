const SapphiraListener = require('./SapphiraListener').SapphiraListener;

class Translator extends SapphiraListener {

    table = []
    constructor() {
        super();
        return this;
    }

    enterProgram_block(ctx) {
        //console.log("wenos dias chavales");
    }
    enterState_block(ctx){
        //console.log(ctx.getText());
    }
    enterState_declr(ctx){
        var ID = ctx.ID().getText()
        var STRING = ctx.STRING().getText()
        var new_string = "state " + ID + " " + STRING
        this.table.push({"state" : ID,"state_declr" : new_string})
        //console.log(this.table);
    }
    enterTrans_declr(ctx){
        for(var i = 0; i  < this.table.length; i++){
            if (ctx.ID(0) == this.table[i]["state"]){
                var au_string = "to " + ctx.ID(1)
                this.table[i]["trans"] = au_string
            }
        }
        console.log(this.table);
    }

}


exports.Translator = Translator;