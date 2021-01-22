// Bài 1

function TimNT(){
    let ngto = []
    let arr=prompt("Nhập dãy số:").split(",")
    let check=[]
    for(let i=0;i<arr.length;i++)
    {
        check[i]=0
        if (arr[i]<=2){
    
        }
        else{
        for(let j=2;j<Math.sqrt(arr[i])+1;j++)
            {
                if (arr[i]%j==0)
                {
                check[i]++                
                }            
            }      
        }
    }
    for(let i=0;i<arr.length;i++)
    {
        if(check[i]==0)
        ngto.push(arr[i])
    }
   console.log("những số nguyên tố là "+ngto)
   alert("những số nguyên tố là "+ngto)

}
console.log("Bài 1")
TimNT()


// Bài 2
console.log("Bài 2:")
let diem = []
let A=0
let B=0
let C=0
let D=0
let F=0

let n=prompt("Bài 2: Nhập số lượng sinh viên: ")
for (let i=0;i<n;i++)
{
    let diemTp=prompt("Điểm thành phần: ")
    let diemCk=prompt("Điểm cuối kì: ")
    diem.push(diemTp*0.4+diemCk*0.6)
    if (diem[i]>=8)
    A++
    else if (diem[i]>=7)
    B++
    else if (diem[i]>=6)
    C++
    else if (diem[i]>=4)
    D++
    else F++
}
let xs = (B/n)*100

console.log("Xác suất để 1 sv được B là: "+xs+"%")
console.log("Có "+ A + " sinh viên được A")
console.log("Có "+ F + " sinh viên bị trượt")