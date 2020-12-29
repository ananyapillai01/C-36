class Player {
  constructor(){

    this.name = null;
    this.distance = 0;
    this.index = null;
  }

  //object.prop

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;  //players{player1{name: "", distance: 200}, player2{name:"", distance:}}
    database.ref(playerIndex).set({
      name:this.name,
      distance: this.distance
    });
  }
//object.fn()
//Class.fn();

 static getAllPlayersInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value", (data)=>{
      allPlayersInfo = data.val();
    })
  }
}
