const SapphiraListener = require('./SapphiraListener').SapphiraListener;
const fs = require('fs');
class Translator extends SapphiraListener {

    table = []
    file_name
    constructor() {
        super();
        return this;
    }

    enterProgram_block(ctx) {
        this.file_name = ctx.ID().getText() +".alp" 
        fs.writeFileSync(this.file_name, "",function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
          });
    }
    enterState_block(ctx){
        //console.log(ctx.getText());
    }
    enterState_declr(ctx){
        var ID = ctx.ID().getText()
        var STRING = ctx.STRING().getText()
        var new_string = "state " + ID + " " + STRING + " "
        this.table.push({"state" : ID,"state_declr" : new_string})
        //console.log(this.table);
    }
    enterTrans_declr(ctx){
        for(var i = 0; i  < this.table.length; i++){
            if (ctx.ID(0) == this.table[i]["state"]){
                var au_string = "to " + ctx.ID(1) + " "
                this.table[i]["trans"] = au_string
                if(ctx.CUANDO()){
                    var num = ctx.cuant_state(0).NUM()
                    var state = ctx.cuant_state(0).ID()
                    var onum = ctx.cuant_state(1).NUM()
                    var ostate = ctx.cuant_state(1).ID()
                    this.table[i]["when"] = " when " + num + " " + state
                    this.table[i]["ostates"] = " " + onum + " " + ostate
                       
                }
                if(ctx.DOT()){
                    this.table[i]["sign"] = ctx.DOT().getText() 

                }else{
                    this.table[i]["sign"] = ctx.COLON().getText()

                }
            }
        }
        
        //console.log(this.table);
    }
    enterExpr(ctx){
        for(var i = 0; i  < ctx.logic_expr().length; i++){
            var aux_string
            if(ctx.logic_expr(i).getText() == "y"){
                aux_string = " and "
                   
            }else if(ctx.logic_expr(i).getText() == "o"){
                aux_string = " or "
                
            }
            if(ctx.term(i)){
                if(ctx.term(i).getText() == "no"){
                    aux_string = aux_string + "not"
                       
                }else if(ctx.term(i).getText() == "verdadero"){
                    aux_string = aux_string + "true"
                    
                }else if(ctx.term(i).getText() == "falso"){
                    aux_string = aux_string + "false"
                    
                }
            }
            for(var j = 0; j  < this.table.length; j++){
                if(this.table[j]["when"] && !this.table[j]["expr"]){
                    this.table[j]["expr"] = aux_string

                }
            }
            
        }
        //console.log(this.table);
    }
    enterSimulation_block(ctx){
        var text
        for(var i = 0; i < this.table.length; i++){
           
                if(!this.table[i]["trans"]){
                    text = this.table[i]["state_declr"] + ";" + '\n'
                    
                }else if(this.table[i]["trans"] && !this.table[i]["when"]){
                    text = text + this.table[i]["state_declr"] + this.table[i]["trans"] + this.table[i]["sign"] + '\n'
                    
                }else{
                    text = text + this.table[i]["state_declr"] + this.table[i]["trans"] + 
                    this.table[i]["when"] + this.table[i]["expr"] + this.table[i]["ostates"] + this.table[i]["sign"] + '\n';
                } 
        }
        fs.writeFileSync(this.file_name, text,function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
          });


    }
}


exports.Translator = Translator;