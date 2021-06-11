let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]

function getParkingLotState(someArray) {
        let totalSlots = 0
        let availableSlots = 0
        let occupiedSlots = 0 
        for (let i of someArray) {
            // console.log(i);
            for (let j of i) {
                // console.log(j)
                totalSlots++
                if (j == 1) {occupiedSlots++}
                else if (j == 2){ availableSlots++}
                else totalSlots--
            }
        }
        return {totalSlots, availableSlots, occupiedSlots}
    }
console.log(getParkingLotState(parking_state));