class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }


  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100);
    Player.getAllPlayersInfo();


    if(allPlayersInfo!= undefined){

      var displayPos = 130;

      for(var plr in allPlayersInfo){ 


        if(plr === "player"+ this.index){
          fill("red");
        }else{
          fill("black");
        }

        displayPos = displayPos + 20;
        textSize(15);
        text(allPlayersInfo[plr].name + ": " + allPlayersInfo[plr].distance, 120, displayPos);





      }

    }


    if(keyIsDown(UP_ARROW) && player.index!=null){
      player.distance = player.distance + 50;
      player.update();
    }
  }
}
