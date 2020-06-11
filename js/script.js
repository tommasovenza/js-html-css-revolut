$(document).ready(
    function () {

        // all'evento mouseEnter sull'li con classe .with-dropdown i figli dello stesso con classe dropdown aggiungi classe open
        $('.with-dropdown').mouseenter(
            function () {
                $(this).children('.dropdown').addClass('open');
            }
        ); 

        // all'evento click sull'li con classe .with-dropdown i figli dello stesso con classe dropdown aggiungi classe open
        $('.with-dropdown').click(
            function () {
                $(this).children('.dropdown').toggleClass('open');
            }
        );
        
        // all'evento mouseLeave sull'li con classe .with-dropdown i figli dello stesso con classe dropdown aggiungi classe open
        $('.with-dropdown').mouseleave(
            function () {
                $(this).children('.dropdown').removeClass('open');
            }
        );
        
        
        // all'evento mouseenter la freccia di fontawesome si gira 
        $('.fa-chevron-down').mouseenter(
            function() {
                $(this).toggleClass('fa-chevron-up');
            }
        );
        
        $('.fa-chevron-down').mouseleave(
            function() {
                $(this).toggleClass('fa-chevron-up');
            }
        );
        

    }
);