let interval = 2200;
let a1 = 0;
let score = 0;
let num = 0;
function func(num) {
    if (num == a1) {
        interval -= 200;
        console.log(interval);
        console.log(score++);

    }
    $('.score_num').html(
        function (_, num) {
            if (num == 9) {
                alert('Победа');
                num = 0;
                interval = 0; //? программа вообще перестает работать дальше
            }
            return +num + 1; //?нужно обрабатывать разы клика, а не просто нажатие по любым квадратам
        })
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
setInterval(function () {
    a1 = getRandomInt(1, 10)
    $('#' + a1).fadeOut(interval / 2).fadeIn(interval / 2); //!может стать дробным

}, interval);

$("#1").click(function () {
    func(1);
});
$("#2").click(function () {
    func(2);
});
$("#3").click(function () {
    func(3);
});
$("#4").click(function () {
    func(4);
});
$("#5").click(function () {
    func(5);
});
$("#6").click(function () {
    func(6);
});
$("#7").click(function () {
    func(7);
});
$("#8").click(function () {
    func(8);
});
$("#9").click(function () {
    func(9);
});




