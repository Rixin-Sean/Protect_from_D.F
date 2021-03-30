(function () {
    let al = document.querySelector('.move_l');
    let rl = document.querySelector('.move_r');
    let focus = document.querySelector('.focus');
    let ul = document.querySelector('.focus>ul');
    let focus_li = document.querySelectorAll('.focus>ul li');
    let focus_ol = document.querySelector('.circles');
    let img_x = focus.offsetWidth;


    focus.addEventListener('mouseenter', function () {
        al.style.display = 'block';
        rl.style.display = 'block';
        clearInterval(timer1);
        timer1 = null;
    })
    focus.addEventListener('mouseleave', function () {
        al.style.display = 'none';
        rl.style.display = 'none';
        timer1 = setInterval(function () {
            rl.click();
        }, 2000)
    })

    for (let i = 0; i < focus_li.length; i++) {
        let li_c = document.createElement('li');
        li_c.setAttribute('index', i);
        focus_ol.appendChild(li_c);
    }

    let num = 0;
    let circles = 0;
    let cl = document.querySelectorAll('.circles li');
    cl[0].className = 'current';
    for (let i = 0; i < cl.length; i++) {
        cl[i].addEventListener('click', function () {
            for (let j = 0; j < cl.length; j++) {
                cl[j].className = '';
            }
            this.className = 'current';
            let index = this.getAttribute('index')

            animate(ul, -img_x * index);
            num = i;
            circles = i;
        })
    }

    let first_li = focus_li[0].cloneNode(true);
    ul.appendChild(first_li);

    let flag = true;
    rl.addEventListener('click', function () {
        clearInterval(timer1);
        if (flag) {
            flag = false;
            if (num == focus_li.length) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -img_x * num, function () {
                flag = true;
            });

            if (circles == focus_li.length - 1) {
                circles = -1;
            }
            circles++;
            for (let i = 0; i < cl.length; i++) {
                cl[i].className = '';
            }
            cl[circles].className = 'current';
        }
    })

    al.addEventListener('click', function () {
        clearInterval(timer1);
        if (flag) {
            flag = false;
            if (num == 0) {
                ul.style.left = -img_x * focus_li.length;
                num = focus_li.length;
            }
            num--;
            animate(ul, -img_x * num, function () {
                flag = true;
            });
            if (circles == 0) {
                circles = focus_li.length;
            }
            circles--;
            for (let i = 0; i < cl.length; i++) {
                cl[i].className = '';
            }
            cl[circles].className = 'current';
        }
    })

    let timer1 = setInterval(function () {
        rl.click();
    }, 3500)



})()