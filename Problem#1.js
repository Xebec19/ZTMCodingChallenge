/*Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]*/
console.clear();
const room = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let clean = (arr) => {
  arr.sort(function(a,b){return a-b});
  for(var i = 0;i<=arr.length;i++)
    {
      for(var j = 0;j<=i;j++)
        {
          if(arr[i]===arr[i+1])
            {
              arr2[i][j]=arr[i];
              arr2[i][j+1]=arr[i+1];
            }
        }
    }
  console.log(arr);
};
clean(room);
