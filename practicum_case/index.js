function oddishOrEvenish(num){
    var sum=0;
    while(num){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    console.log(sum);
    //Tek-çift sonucu icin mod alınır

    if(sum % 2 == 0) {
        console.log("Even");
    }
    
    else {
        console.log("Odd");
    }
}
//ornek olması icin 3 farklı sayı ile fonksiyon cagırıldı
oddishOrEvenish(43);
oddishOrEvenish(373);
oddishOrEvenish(4433);