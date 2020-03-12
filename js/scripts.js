var repository = [
    {
        name: 'Fearow', 
        height: 1.2, 
        types: ['flying', 'normal']
    },
    {
        name: 'Gible', 
        height: 0.7, 
        types: ['dragon', 'ground']
    },
    {
        name: 'Graveler', 
        height: 1, 
        types: ['rock', 'ground'] 
}];

for (var i = 0; i < repository.length; i++) {
    document.write("<p>" + repository[i].name + ' (Height: ' + repository[i].height + ')' + "</p>")
    if (repository[i].height > 1) {
         document.write("<p>" + 'The tallest Pokémon on this list!' + "</p>")
    }
  }