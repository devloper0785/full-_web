function calculateResult(){ 
// الحصول على قيم العناصر من الصفحة
  let num1 = document.getElementsByClassName("age")[0].value;
  let num2 = document.getElementsByClassName("tall")[0].value;
  let num3 = document.getElementsByClassName("heavy")[0].value;
  let Type = document.getElementsByClassName("type")[0].value;
// المعادلة
10*parseInt(num3) +6.25*parseInt(num2)-5*parseInt(num1)+5 //للرجال
10*parseInt(num3) +6.25*parseInt(num2)-5*parseInt(num1)-161//للنساء
}