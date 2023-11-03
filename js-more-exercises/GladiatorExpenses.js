/* As a gladiator, Peter has to repair his broken equipment when he loses a fight. His equipment consists of a helmet, sword, shield, and armor. You will receive Peter`s lost fights count.

· Every second lost game, his helmet is broken.

· Every third lost game, his sword is broken.

· When both his sword and helmet are broken in the same lost fight, his shield also breaks.

· Every second time, when his shield brakes, his armor also needs to be repaired */

function calculateExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let totalSum =0;
    let brokenShields=0;

    for(let i=1; i<=lostFightsCount; i++){
        let brokenSwordsAndHelmets=0; 
       
        if(i%2==0){
            /*· Every second lost game, his helmet is broken. */
            totalSum+=helmetPrice;
            brokenSwordsAndHelmets++;
        }

        if(i%3==0){
            /*· Every third lost game, his sword is broken. */
            totalSum+=swordPrice;
            brokenSwordsAndHelmets++;
        }
        /* When both his sword and helmet are broken in the same lost fight, his shield also breaks. */
        if(brokenSwordsAndHelmets%2==0 && brokenSwordsAndHelmets!=0){
            totalSum+= shieldPrice;
            brokenShields++;
        }

        /*· Every second time, when his shield brakes, his armor also needs to be repaired */ 
        if(brokenShields %2 ==0 && brokenShields !=0){
            totalSum+= armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);
}

calculateExpenses(23,
    12.50,
    21.50,
    40,
    200);