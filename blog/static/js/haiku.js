$(function(){
    $('.random').click(function() {
        let fiveStrArray = ["大きな", "美味しいね", "楽しいね"];
        let sevenStrArray = ["からくれないに", "紅葉踏み分け", "いなばの山の"];

        let num = Math.floor( Math.random() * fiveStrArray.length );

        $(this).prev('input[type="text"]').val(fiveStrArray[num]);
    });

    $('.randomSeven').click(function() {
        let sevenStrArray = ["からくれないに", "紅葉踏み分け", "いなばの山の"];

        let num = Math.floor( Math.random() * sevenStrArray.length );

        $(this).prev('input[type="text"]').val(sevenStrArray[num]);
    });

    $('.post').click(function() {
        let fiveWord1 = $('#fiveWord1').val();
        let sevenWord = $('#sevenWord').val();
        let fiveWord2 = $('#fiveWord2').val();
        let postHaiku = fiveWord1 + sevenWord + fiveWord2;

        if(!confirm('「'+postHaiku+'」を投降しますか？')){
            /* キャンセルの時の処理 */
            return false;
        }else{
            /*　OKの時の処理 */
            //location.href = "{% url 'haiku' %}";
            return true;
        }

    })
});