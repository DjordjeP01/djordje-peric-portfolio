           //----------CUSTOM CURSOR---------

           const cursorDot = document.querySelector("[data-cursor-dot]");

           function updateCursor(e) {
               const posX = e.clientX;
               const posY = e.clientY;
           
               cursorDot.animate({
                   left: `${posX}px`,
                   top: `${posY}px`
               }, { duration: 100, fill: "forwards" });
           }
           
           window.addEventListener("mousemove", updateCursor);
           
           // Additional logic for cursor on hover
           const interactiveElements = document.querySelectorAll('.main-btn, .faq, .view, .service-heading, .pre-footer-btn, .hero-pic, .aboutme-text, .mail, .footer-link-wrap, .service-svg');
           
           interactiveElements.forEach(element => {
               element.addEventListener("mouseenter", () => {
                   cursorDot.classList.add("hovered");
               });
           
               element.addEventListener("mouseleave", () => {
                   cursorDot.classList.remove("hovered");
               });
           });

           // ENABLE - DISABLE SCROLLING
        //    function disableScroll() {
        //         document.body.style.overflow = 'hidden';
        //     }
        
        //     function enableScroll() {
        //         document.body.style.overflow = '';
        //     }

        //     disableScroll();

           //---------------------------PRELOADER--------------------------------
        //    function startLoader() {
        //         let counterElement = document.querySelector(".counter");
        //         let overlay = document.querySelector(".overlay");
        //         let currentValue = 0;

        //         function updateCounter() {
        //             if(currentValue === 100) {
        //                 return;
        //             }

        //             currentValue += Math.floor(Math.random() * 10) + 1;

        //             if (currentValue > 100) {
        //                 currentValue = 100;
        //             }

        //             counterElement.textContent = currentValue;

        //             let delay = Math.floor(Math.random() * 200) + 50;
        //             setTimeout(updateCounter, delay);
        //         }

        //         updateCounter();
        //         setTimeout(hideCounterAndOverlay, 3500);
        //     }

        //     function hideCounterAndOverlay() {
        //         let counter = document.querySelector(".counter");
        //         let overlay = document.querySelector(".overlay");

        //         overlay.style.height = "0vh";
        //         counter.style.display = "none";

        //         enableScroll();
        //     }

        //     startLoader();


          // //-----------NAV BAR------------------
          const mainMenu = document.querySelector('.mainMenu');
          const closeMenu = document.querySelector('.closeMenu');
          const openMenu = document.querySelector('.openMenu');
          const menuLinks = document.querySelectorAll('.mainMenu li a');


          menuLinks.forEach(link => {
              link.addEventListener('click', () => {
                setTimeout(() => {
                  mainMenu.style.top = '-100%';
                }, 300);
              });
            });

          openMenu.addEventListener('click' , show);
          closeMenu.addEventListener('click', close);


          function show() {
               mainMenu.style.top = '0';
           }

          function close() {
              setTimeout(() => {
                mainMenu.style.top = '-100%';
              }, 500);
          }

          
          //----------MAGNETIC-BTN--------

            let btn = document.querySelector('#hero-btn');

            btn.onmousemove = e => {
                let x = e.offsetX;
                let y = e.offsetY;
            //    console.log(x,y);
                let btnW = btn.clientWidth;
                let btnH = btn.clientHeight;
            //    console.log(btnW,btnH);
            let transX = x - (btnW / 2);
            let transY = y - (btnH / 2);
            btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
            };

            btn.onmouseout = e => {
                btn.style.transform = `translateX(0px) translateY(0px)`;
            }

            //----------FAQ's-Open/Close--------

            const faqs = document.querySelectorAll(".faq");

            faqs.forEach(faq => {
                faq.addEventListener("click", () => {
                    faq.classList.toggle("active");
                });
            });


        

              //PROBA IMAGE RESPONZIVE E
        var image = document.getElementById('hero-picture');

        function updateImageSource() {
            if (window.innerWidth < 478) {
                image.src = 'slike/WEBP/SlikameneMobile.webp';
            } else {
                image.src = 'slike/WEBP/SlikaMene22.webp';
            }
        }

            updateImageSource();

            window.addEventListener('resize', updateImageSource);


            //Service text content
        function updateContent() {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 478) {
                document.getElementById('dynamicContent1').textContent = "I focuse on creating most unique, creative web deisgn for your business, that will go well with your marketing plan";
                document.getElementById('dynamicContent2').textContent = "I can bring web designs in life with the power of webflow, you could bring your own design, or you can hire me to do both";
                document.getElementById('dynamicContent3').textContent = "Optimize your online presence with my Website SEO service. Boost rankings, drive traffic, and maximize impact.";
            }

            else {
                document.getElementById('dynamicContent1').textContent = "I focuse on creating most unique web deisgn for your business.";
                document.getElementById('dynamicContent2').textContent = "I can bring web designs in life with the power of webflow.";
                document.getElementById('dynamicContent3').textContent = "Maximize online impact. SEO expertise for your website.";
            }
        }

        updateContent();

        window.addEventListener('resize' , updateContent);


            