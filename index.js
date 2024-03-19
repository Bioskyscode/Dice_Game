
// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
$(".sides").hide();
$(".bt2").prop('disabled', true);

var diceNum1 = $(".oneSide");
var diceNum2 = $(".twoSide");
var diceNum3 = $(".threeSide");
var diceNum4 = $(".fourSide");
var diceNum5 = $(".fiveSide");
var diceNum6 = $(".sixSide");

var diceNum11 = $(".oneSide2");
var diceNum22 = $(".twoSide2");
var diceNum33 = $(".threeSide2");
var diceNum44 = $(".fourSide2");
var diceNum55 = $(".fiveSide2");
var diceNum65 = $(".sixSide2");

var diceSides = ["oneSide", "twoSide", "threeSide", "fourSide", "fiveSide", "sixSide"];
$(".bt1").on("click", function () {
    $(".d1").empty();
    $(".score1").text("0");
    $(".d1").addClass("spinning");
    $(".winner").empty();
    $(".bt1").prop('disabled', true);
    $(".bt2").prop('disabled', true);

    var diceSides = ["oneSide", "twoSide", "threeSide", "fourSide", "fiveSide", "sixSide"];
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
     $(".d2").addClass("spinning");
     $(".d2").empty();
     $(".score2").text("0");
     $(".bt2").prop('disabled', true);
     $(".bt1").prop('disabled', true);

     setTimeout(() => {
        $(".bt2").prop('disabled', false);
        $(".d2").removeClass("spinning");
     }, 1100);

     var diceSides2 = ["oneSide2", "twoSide2", "threeSide2", "fourSide2", "fiveSide2", "sixSide2"];
     ranNum2 = Math.floor(Math.random() * diceSides2.length);
    var ranDice = diceSides2[ranNum2];
     setTimeout(() => {
        switch (ranDice) {
            case "oneSide2":
               
                $(".d2").html(diceNum11);
                diceNum11.fadeIn(2000);
                break;
               
            case "twoSide2":
              
                $(".d2").html(diceNum22);
                diceNum22.fadeIn(2000);
               
                break;
   
            case "threeSide2":
                
                 $(".d2").html(diceNum33);
                 diceNum33.fadeIn(2000);
                break;
   
            case "fourSide2":
                
                 $(".d2").html(diceNum44);
                 diceNum44.fadeIn(2000);
                break;
   
            case "fiveSide2":
                 $(".d2").html(diceNum55);
                 diceNum55.fadeIn(2000);
                break;
   
            case "sixSide2":
                 $(".d2").html(diceNum65);
                 diceNum65.fadeIn(2000);
                break;
       
            default:
               console.log("error ooo");
                break;
        }

        $(".score2").html(ranNum2 +1);
        $(".bt1").prop('disabled', false);
        var text1 = "Player 1 won";
        var text2 = "Player 2 won";
        var text3 = "It is a draw";
        if (ranNum1 > ranNum2) {
                $(".winner").html(text1);
                // $(".winner").slide();
             }
             else if (ranNum1 < ranNum2) {
                $(".winner").html(text2);
                // $(".winner").slide();
                    
             }
             else {
                $(".winner").html(text3);
                // $(".winner").slide();
                
             }
        
    }, 1700);
 })

