function count_path() {
  let maps = [
    [1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 1, 1, 1]
  ];

  let pathes = [[], [], [], [], []];

  for (let rowIndex = 0; rowIndex < maps.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < maps[rowIndex].length; columnIndex++) {
      if (!maps[rowIndex][columnIndex]) {
        pathes[rowIndex][columnIndex] = 0;
      }

      if (maps[rowIndex][columnIndex] == 1) {
        if(rowIndex == 0 && columnIndex == 0) {
          pathes[rowIndex][columnIndex] = 1;
        } else if(rowIndex > 0 && columnIndex == 0) {
          pathes[rowIndex][columnIndex] = pathes[rowIndex-1][columnIndex];
        } else if(rowIndex == 0 && columnIndex > 0) {
          pathes[rowIndex][columnIndex] = pathes[rowIndex][columnIndex-1];
        } else if(rowIndex > 0 && columnIndex > 0) {
          pathes[rowIndex][columnIndex] = pathes[rowIndex - 1][columnIndex] + pathes[rowIndex][columnIndex-1];
        }
      }
    }
  }


  console.log(pathes);
}

count_path();