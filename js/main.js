let loader = document.querySelector(".loader");
setTimeout(function() {
    loader.classList.add("hide")
}, 1000);


window.onload = () => {
    const onTop = {
        init: function() {
            this.btnOnTop()
        },
        btnOnTop: function() {
            window.addEventListener("scroll", () => {
                const btnTop = document.querySelector(".ontop");
                if (window.scrollY > 200) {
                    btnTop.classList.add("show")
                } else {
                    btnTop.classList.remove("show")
                }
            })
        },
    }
    onTop.init();
    const ripple = {
        init: function() {
            this.effectRipple()
        },
        effectRipple: function() {
            $(".banner").ripples();
        }
    }
    ripple.init()
    const menu = {
        init: function() {
            this.fixedMenu();
            this.clickHambeger();
        },
        fixedMenu: function() {
            window.addEventListener("scroll", () => {
                const nav = document.querySelector(".nav");
                if (scrollY > 100) {
                    nav.classList.add("active")
                } else {
                    nav.classList.remove("active")
                }
            })
        },
        clickHambeger: function() {
            const hambeger = document.querySelector(".hambeger");
            const navMenu = document.querySelector(".menu__nav");
            hambeger.addEventListener("click", () => {
                navMenu.classList.toggle("active")
            })
        }
    }
    menu.init()
    const lastest = {
        init: function() {
            this.popUp()
        },
        popUp: function() {
            const control = document.querySelector(".control__lastest");
            const imgControl = document.querySelector(".img__control");
            const infoBtn = document.querySelector(".infoBtn");
            const leftBtn = document.querySelector(".leftBtn");
            const rightBtn = document.querySelector(".rightBtn");
            const closeBtn = document.querySelector(".closeBtn");
            const items = document.querySelectorAll(".items__lastest img");

            items.forEach((item, info) => item.addEventListener("click", (item) => {
                    var x = item.target.src;
                    imgControl.src = x;
                    control.classList.add("active")
                    rightBtn.addEventListener("click", () => {
                            info++;
                            info %= items.length,
                                x = items[info].src,
                                imgControl.src = x;
                            infoBtn.innerHTML = `${info+1} / ${items.length}`
                        }),
                        leftBtn.addEventListener("click", () => {
                            if (info < 1) {
                                return;
                            }
                            info--;
                            info %= items.length;
                            x = items[info].src,
                                imgControl.src = x;
                            infoBtn.innerHTML = `${info+1} / ${items.length}`

                        })

                })),
                closeBtn.addEventListener("click", () => {
                    control.classList.remove("active")
                })
        }
    }
    lastest.init();
    const team = {
        init: function() {
            this.grabSlide(".team")
        },
        grabSlide: function(e) {
            const slide = document.querySelector(e);
            const wrapTeam = document.querySelector(".wrap__team");
            const items = document.querySelectorAll(".item__team");
            let size = items[0].offsetWidth;
            let flag = false;
            let removeStartX;
            let moveScrollLeft;

            function slideItem() {
                index = Math.round(wrapTeam.scrollLeft / size);
                wrapTeam.scrollLeft = index * size;
                wrapTeam.style.scrollBehavior = "smooth";
            }
            wrapTeam.addEventListener('mousedown', (e) => {
                flag = true;
                removeStartX = e.pageX - wrapTeam.offsetLeft; //this value will take x at first
                moveScrollLeft = wrapTeam.scrollLeft; //this value will take scroll left at first
                wrapTeam.style.scrollBehavior = 'unset';
                wrapTeam.style.transition = 'scroll 4s linear;';
            })
            wrapTeam.addEventListener("mousemove", (e) => {
                if (!flag) return;
                e.preventDefault();
                const x = e.pageX - removeStartX;
                const wall = x - removeStartX
                wrapTeam.scrollLeft = moveScrollLeft - wall;
            })
            wrapTeam.addEventListener("mouseleave", () => {
                slideItem()
            })
            wrapTeam.addEventListener("mouseup", () => {
                    flag = false;
                    slideItem()
                })
                // const grabSlide = document.querySelector(e);
                // const wrap = document.querySelector(".wrap__team");
                // const items = document.querySelectorAll(".item__team");

            // let isDown = false;
            // let startX;
            // let scrollLeft;
            // let size = items[0].offsetWidth; //lấy chiều rộng của mỗi phần tử 
            // function slideItem() {
            //     index = Math.round(wrap.scrollLeft / size);
            //     wrap.style.scrollBehavior = "smooth";
            //     wrap.scrollLeft = size * index;

            // }
            // wrap.addEventListener('mousedown', (e) => {
            //     isDown = true;
            //     startX = e.pageX - wrap.offsetLeft; //this value will take x at first
            //     scrollLeft = wrap.scrollLeft; //this value will take scroll left at first
            //     wrap.style.scrollBehavior = 'unset';
            // })
            // wrap.addEventListener('mouseleave', () => {
            //     isDown = false;
            //     slideItem();
            // })
            // wrap.addEventListener('mouseup', () => {
            //     isDown = false;
            //     slideItem();
            // })
            // wrap.addEventListener('mousemove', (e) => {
            //     if (!isDown) return;
            //     e.preventDefault();
            //     //transfrom slide by grab and move left right
            //     const x = e.pageX - wrap.offsetLeft;
            //     const walk = x - startX;
            //     wrap.scrollLeft = scrollLeft - walk;
            // })
        }
    }
    team.init();
}