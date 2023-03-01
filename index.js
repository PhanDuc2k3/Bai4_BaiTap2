function SoNhoNhat(arr){
    let min= arr[0];
    for (let i=0;i<3;i++){
        for (let j=1;j<3;j++){
            if (arr[i]>arr[j]){
                min=arr[j];
            }
        }
    }
    return min;
}

function SoLonNhat(arr){
    let max = arr[0];
    for (let i=0;i<3;i++){
        for (let j=1;j<3;j++){
            if (arr[i]<arr[j]){
                max=arr[j];
            }
        }
    }
    return max;
}

function Check_Ham(arr1,arr2){
    if (SoNhoNhat(arr1)>SoNhoNhat(arr2)&&SoLonNhat(arr1)<SoLonNhat(arr2)){
        console.log("True");
    }
    else{
        console.log("False");
    }
}

let arr1= [1,2,3];
let arr2 = [2,6,8];
console.log(arr1);
console.log(arr2);
Check_Ham(arr1,arr2);