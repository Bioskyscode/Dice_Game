
// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$(".sides").hide();
$(".bt2").prop('disabled', true);
var diceNum1 = $(".oneSide");
var diceNum2 = $(".twoSide");
var diceNum3 = $(".threeSide");
var diceNum4 = $(".fourSide");
var diceNum5 = $(".fiveSide");
var diceNum6 = $(".sixSide");

var diceSides = ["oneSide", "twoSide", "threeSide", "fourSide", "fiveSide", "sixSide"];
$(".bt1").on("click", function () {
    $(".d1").empty();
    $(".score1").text("0");
    $(".d1").addClass("spinning");
    $(".winner").empty();
    $(".bt1").prop('disabled', true);
    $(".bt2").prop('disabled', true);

    
     ranNum1 = Math.floor(Math.random() * diceSides.length);
    var ranDice = diceSides[ranNum1];
   

    setTimeout(() => {
        
        $(".bt1").prop('disabled', false);
        $(".d1").removeClass("spinning");
    }, 1500);
    
    setTimeout(() => {
        switch (ranDice) {
            case "oneSide":
               
                $(".d1").html(diceNum1);
                diceNum1.fadeIn(2000);
                break;
               
            case "twoSide":
              
                $(".d1").html(diceNum2);
                diceNum2.fadeIn(2000);
               
                break;
   
            case "threeSide":
                
                 $(".d1").html(diceNum3);
                 diceNum3.fadeIn(2000);
                break;
   
            case "fourSide":
                
                 $(".d1").html(diceNum4);
                 diceNum4.fadeIn(2000);
                break;
   
            case "fiveSide":
                 $(".d1").html(diceNum5);
                 diceNum5.fadeIn(2000);
                break;
   
            case "sixSide":
                 $(".d1").html(diceNum6);
                 diceNum6.fadeIn(2000);
                break;
       
            default:
               console.log("error ooo");
                break;
        }

        $(".score1").html(ranNum1 +1);
        $(".bt2").prop('disabled', false);
        
    }, 1700);
    
})


$(".bt2").on("click", function () {
     ranNum2 = Math.floor(Math.random() * diceSides.length);
     $(".d2").addClass("spinning");
     $(".d2").empty();
     $(".score2").text("0");
     $(".bt2").prop('disabled', true);
     $(".bt1").prop('disabled', true);
     setTimeout(() => {
        $(".bt2").prop('disabled', false);
        $(".d2").removeClass("spinning");
     }, 1100);

    var ranDice = diceSides[ranNum2];
     setTimeout(() => {
        switch (ranDice) {
            case "oneSide":
               
                $(".d2").html(diceNum1);
                diceNum1.fadeIn(2000);
                break;
               
            case "twoSide":
              
                $(".d2").html(diceNum2);
                diceNum2.fadeIn(2000);
               
                break;
   
            case "threeSide":
                
                 $(".d2").html(diceNum3);
                 diceNum3.fadeIn(2000);
                break;
   
            case "fourSide":
                
                 $(".d2").html(diceNum4);
                 diceNum4.fadeIn(2000);
                break;
   
            case "fiveSide":
                 $(".d2").html(diceNum5);
                 diceNum5.fadeIn(2000);
                break;
   
            case "sixSide":
                 $(".d2").html(diceNum6);
                 diceNum6.fadeIn(2000);
                break;
       
            default:
               console.log("error ooo");
                break;
        }

        $(".score2").html(ranNum2 +1);
        $(".bt1").prop('disabled', false);
        if (ranNum1 > ranNum2) {
                $(".winner").html("Player 1 won");
             }
             else if (ranNum1 < ranNum2) {
                $(".winner").html("Player 2 won");
                    
             }
             else {
                $(".winner").html("It is a draw");
                
             }
        
    }, 1700);
 })

