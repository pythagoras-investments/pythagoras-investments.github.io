// fn for bot harvest busting

$('a[data-mail]').on('click', function() {
        window.location = 'mailto:' + $(this).data('mail')+'@'+ $(this).data('domain')+'?subject='+$(this).data('subject');
});
