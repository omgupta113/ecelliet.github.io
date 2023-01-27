function say(a){
    var n=a.length;
    let word='';
    for(let i = 0;n>i;i++){
        word = word + a[i];
        console.log(word);
    }
}
while(true){
    var a="innovation";
    say(a);
    var b="incubation";
    say(b);
    var c="ideation";
    say(c);
}