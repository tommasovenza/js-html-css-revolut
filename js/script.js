$(document).ready(
    function () {

        // all'evento mouseEnter sull'li con classe .with-dropdown i figli dello stesso con classe dropdown aggiungi classe open
        $('.with-dropdown').mouseenter(
            function () {
                $(this).children('.dropdown').toggleClass('open');
            }
        ); 

        // all'evento click sull'li con classe .with-dropdown i figli dello stesso con classe dropdown aggiungi classe open
        $('.with-dropdown').click(
            function () {
                $(this).children('.dropdown').removeClass('open');
            }
        );
        
        // all'evento mouseLeave sull'li con classe .with-dropdown i figli dello stesso con classe dropdown aggiungi classe open
        $('.with-dropdown').mouseleave(
            function () {
                $(this).children('.dropdown').removeClass('open');
            }
        );

    }
);