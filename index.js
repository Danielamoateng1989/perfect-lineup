
* eslint-disable no-irregular-whitespace */

// Finds and returns each element and it's count in the array with a new object
const compressedArray = (original) => {
  let compressed = []


  // Make a copy of the input array
  let copy = original.slice(0)


  // Loop over every element in the 
  for (let i = 0; i < original.length; i++) {
    var myCount = 0


    // looping over every element in the copy to see if it's the same
    for (let e = 0; e < copy.length; e++) {
      if (original[i] === copy[e]) {
        myCount++

        delete copy[e]
      }
    }

    if (myCount > 0) {
      let newObject = new Object()

      newObject.value = original[i]
      newObject.count = myCount
      compressed.push(newObject)
    }
  }

  return compressed
}


// 1) returns false when the lineup has a total salary greater than 45000
const totalSalary = (lineup) => {
  let totalSalary = 0

  lineup.forEach(player => {
    totalSalary += player.salary
  })

  return totalSalary <= 45000
}

// 2) returns false when the lineup includes too many players from a single team
const singleTeam = (lineup) => {
  const teamIDArray = lineup.map(player => player.teamId)
  const newArray = compressedArray(teamIDArray)
  let foundTooManyPlayers = newArray.some(element => element.count > 2)

  return !foundTooManyPlayers
}

// 3) returns false when the lineup includes too many players from a single game
const singleGame = (lineup) => {
  const gameIDArray = lineup.map(player => player.gameId)
  const newArray = compressedArray(gameIDArray)
  let foundTooManyPlayers = newArray.some(element => element.count > 3)

  return !foundTooManyPlayers
}


// 4) returns false when the lineup does not have the right number of players at each position
  const rightNumberOfPlayers = (lineup) => {
  const positionArray = lineup.map(player => player.position)
  const newArray = compressedArray(positionArray)

  return newArray.some(item => item.value === 'P' && item.count === 1) &&
         newArray.some(item => item.value === 'C' && item.count === 1) &&
         newArray.some(item => item.value === '1B' && item.count === 1) &&
         newArray.some(item => item.value === '2B' && item.count === 1) &&
         newArray.some(item => item.value === '3B' && item.count === 1) &&
         newArray.some(item => item.value === 'SS' && item.count === 1) &&
         newArray.some(item => item.value === 'OF' && item.count === 3)
}

// validates lineup
const validateLineup = (lineup) => {
  return totalSalary(lineup) && singleTeam(lineup) && singleGame(lineup) && rightNumberOfPlayers(lineup)
}

module.exports = validateLineup



