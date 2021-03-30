window.addEventListener('load', function () {
    titleChange();
    function titleChange() {
        let title = $('.p_current a').text();
        $('._pre_title').text(title);
    }
    $('.categ').find('li').click(function () {
        console.log(1111);
        console.log($(this));
        $('.categ').find('li').removeClass('p_current');
        $(this).addClass('p_current');
        titleChange();

    })
})