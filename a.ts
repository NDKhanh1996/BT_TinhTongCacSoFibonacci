let arr: number[] = [0,1]

function DQ(): void{
    let c = arr[arr.length - 2]+arr[arr.length - 1];
    arr.push(c)
if (arr.length < 10){
    DQ()
}
}
DQ()
console.log(arr )

let sum = 0
arr.forEach((e)=> {
    sum+= e
})

console.log(sum)
