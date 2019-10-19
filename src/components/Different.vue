<template>
  <div id="parent">
    <div id="table" style="display: table;">
      <div v-for="i in 3" :key="`row_${i}`" :id="`row${i}`" style="display: table-row;">
        <div 
          v-for="j in 3" :key="`row_${i}_col_${j}`" 
          :class="`tile${j+(i-1)*3}`"  
          :id="`cell${i}${j}`"
          :ref="`cell${i}${j}`"
          style="display: table-cell;"
          v-on:click="clickTile(i,j)"
        >
        </div>
      </div>  
    </div>

  </div>
</template>
<script>
export default {
  name: 'different-page',
  mounted() {
    this.shuffle();
  },
  data() {
    return {
      numberOfTiles: 9,
      numberOfRows: 3,
      numberOfColumns: 3,
    }
  },
  methods: {
    puzzleIsSolved() {
      for (let i = 1; i <= this.numberOfRows; i++) {
        for (let j = 1; j <= this.numberOfColumns; j++) {
          let cname = this.$refs[`cell${i}${j}`][0].className 
          let tile = `tile${j+(i-1)*3}`
          console.log(`cname: ${cname} -- tile: ${tile}`)
          if (this.$refs[`cell${i}${j}`][0].className !== `tile${j+(i-1)*3}`){
            return false;
          }
        }
      }
      return true;
    },
    swapTiles(cell1,cell2) {
      var temp = this.$refs[cell1][0].className;
      this.$refs[cell1][0].className = this.$refs[cell2][0].className;
      this.$refs[cell2][0].className = temp;
      if (this.puzzleIsSolved()) {
        this.$nextTick(()=>{
          alert('howdy')
          // TODO: do something, like unlocking access to the page
        })
      }

    },
    shuffle() {
      //Use nested loops to access each cell of the 3x3 grid
      for (var row=1;row<=3;row++) { //For each row of the 3x3 grid
        for (var column=1;column<=3;column++) { //For each column in this row
        
          var row2=Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
          var column2=Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3
          
          this.swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
        } 
      } 
    },
    clickTile(row,column) {
      var cell = this.$refs["cell"+row+column][0];
      var tile = cell.className;
      if (tile!="tile9") { 
          //Checking if white tile on the right
          if (column<3) {
            if ( this.$refs["cell"+row+(column+1)][0].className=="tile9") {
              this.swapTiles("cell"+row+column,"cell"+row+(column+1));
              return;
            }
          }
          //Checking if white tile on the left
          if (column>1) {
            if ( this.$refs["cell"+row+(column-1)][0].className=="tile9") {
              this.swapTiles("cell"+row+column,"cell"+row+(column-1));
              return;
            }
          }
            //Checking if white tile is above
          if (row>1) {
            if ( this.$refs["cell"+(row-1)+column][0].className=="tile9") {
              this.swapTiles("cell"+row+column,"cell"+(row-1)+column);
              return;
            }
          }
          //Checking if white tile is below
          if (row<3) {
            if ( this.$refs["cell"+(row+1)+column][0].className=="tile9") {
              this.swapTiles("cell"+row+column,"cell"+(row+1)+column);
              return;
            }
          } 
      }
      
    }
  },
}
</script>
<style scoped src="@/assets/sliding_puzzle.css"></style>
<style scoped>

#parent !important {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

/* #child {
  width: 100px;
  height: 100px;
  background: silver;
  text-align: center;
} */
</style>
