           //----------CUSTOM CURSOR---------

           const cursorDot = document.querySelector("[data-cursor-dot]");

           if (cursorDot) {
               let mouseX = 0;
               let mouseY = 0;
               let cursorX = 0;
               let cursorY = 0;
               
               // Create cursor text element if it doesn't exist
               if (!cursorDot.querySelector('.cursor-text')) {
                   const cursorText = document.createElement('span');
                   cursorText.classList.add('cursor-text');
                   cursorText.textContent = 'View';
                   cursorDot.appendChild(cursorText);
               }
               
               // Track mouse position
               function updateCursor(e) {
                   mouseX = e.clientX;
                   mouseY = e.clientY;
               }
               
               // Smooth cursor animation (laggy effect)
               function animateCursor() {
                   cursorX += (mouseX - cursorX) * 0.15;
                   cursorY += (mouseY - cursorY) * 0.15;
                   
                   cursorDot.style.left = cursorX + 'px';
                   cursorDot.style.top = cursorY + 'px';
                   
                   requestAnimationFrame(animateCursor);
               }
               
               window.addEventListener("mousemove", updateCursor);
               animateCursor();
               
               // Regular hover elements
               const interactiveElements = document.querySelectorAll('.main-btn, .faq, .service-heading, .pre-footer-btn, .hero-pic, .aboutme-text, .mail, .footer-link-wrap, .service-svg, .logo, #footer-logo, nav .logo, a[href="#hero-section"]');
               
               interactiveElements.forEach(element => {
                   element.addEventListener("mouseenter", () => {
                       cursorDot.classList.remove("project-hover");
                       cursorDot.classList.add("hovered");
                   });
               
                   element.addEventListener("mouseleave", () => {
                       cursorDot.classList.remove("hovered");
                   });
               });
               
               // Logo links hover (works with both #hero-section and index.html#hero-section)
               const logoLinks = document.querySelectorAll('a[href*="#hero-section"], a[href*="hero-section"]');
               logoLinks.forEach(link => {
                   link.addEventListener("mouseenter", () => {
                       cursorDot.classList.remove("project-hover");
                       cursorDot.classList.add("hovered");
                   });
               
                   link.addEventListener("mouseleave", () => {
                       cursorDot.classList.remove("hovered");
                   });
               });
               
               // Project item hover - transform cursor into "View" circle
               const projectItems = document.querySelectorAll('.item');
               
               projectItems.forEach(item => {
                   item.addEventListener("mouseenter", () => {
                       cursorDot.classList.remove("hovered");
                       cursorDot.classList.add("project-hover");
                   });
               
                   item.addEventListener("mouseleave", () => {
                       cursorDot.classList.remove("project-hover");
                   });
               });
               
               // Click effect
               document.addEventListener("mousedown", () => {
                   cursorDot.classList.add("click");
               });
               
               document.addEventListener("mouseup", () => {
                   cursorDot.classList.remove("click");
               });
           }

           //---------------------------PRELOADER--------------------------------
           
           // Disable scrolling during preloader
           function disableScroll() {
               document.body.style.overflow = 'hidden';
           }
           
           function enableScroll() {
               document.body.style.overflow = '';
           }
           
           // Start preloader
           function startPreloader() {
               disableScroll();
               
               const counterElement = document.querySelector(".counter");
               const overlay = document.querySelector(".overlay");
               let currentValue = 0;
               
               if (!counterElement || !overlay) {
                   enableScroll();
                   return;
               }
               
               // Counter animation function
               function updateCounter() {
                   if (currentValue >= 100) {
                       // Wait 0.5s when counter reaches 100, then slide overlay up
                       setTimeout(() => {
                           overlay.style.transform = 'translateY(-100%)';
                           overlay.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                           
                           // Remove overlay after animation
                           setTimeout(() => {
                               overlay.style.display = 'none';
                               enableScroll();
                           }, 1500);
                       }, 300);
                       return;
                   }
                   
                   // Increment counter
                   currentValue += Math.floor(Math.random() * 5) + 1;
                   
                   if (currentValue > 100) {
                       currentValue = 100;
                   }
                   
                   counterElement.textContent = currentValue;
                   
                   // Random delay for smoother animation
                   const delay = Math.floor(Math.random() * 50) + 20;
                   setTimeout(updateCounter, delay);
               }
               
               // Start counter animation
               updateCounter();
           }
           
           // Start preloader when page loads
           window.addEventListener('load', startPreloader);


          // //-----------NAV BAR SCROLL HIDE/SHOW------------------
          let lastScrollTop = 0;
          const header = document.querySelector('header');
          let ticking = false;
          
          function handleScroll() {
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              
              if (scrollTop > lastScrollTop && scrollTop > 100) {
                  // Scrolling down - hide navbar
                  header.classList.add('hidden');
              } else {
                  // Scrolling up - show navbar
                  header.classList.remove('hidden');
              }
              
              lastScrollTop = scrollTop;
              ticking = false;
          }
          
          window.addEventListener('scroll', () => {
              if (!ticking) {
                  window.requestAnimationFrame(handleScroll);
                  ticking = true;
              }
          }, { passive: true });

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

            //----------ABOUTME TEXT WORD-BY-WORD REVEAL ANIMATION WITH GSAP--------
            
            window.addEventListener("load", () => {
                console.log("Window loaded");

                // Check if GSAP and ScrollTrigger are loaded
                if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
                    console.error("GSAP or ScrollTrigger not loaded");
                    return;
                }

                // Register ScrollTrigger plugin
                gsap.registerPlugin(ScrollTrigger);

                // Check if SplitType is loaded
                if (typeof SplitType === 'undefined') {
                    console.error("SplitType not loaded");
                    return;
                }

                // Initialize SplitType for text-split elements
                try {
                    let typeSplit = new SplitType("[text-split]", {
                        types: "words, chars",
                        tagName: "span"
                    });

                    console.log("SplitType initialized", typeSplit);
                } catch (error) {
                    console.error("Error initializing SplitType:", error);
                    return;
                }

                // Avoid flash of unstyled content
                gsap.set("[text-split]", { opacity: 1 });

                // Iterate over elements with scrub-each-word attribute
                document.querySelectorAll("[scrub-each-word]").forEach(element => {
                    console.log("Creating timeline for element", element);

                    const words = element.querySelectorAll(".word");
                    
                    if (words.length === 0) {
                        console.warn("No words found in element", element);
                        return;
                    }

                    // Set initial opacity for words
                    gsap.set(words, { opacity: 0.2 });

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: element,
                            start: "top 80%",
                            end: "top 20%",
                            scrub: 1, // Smooth scrubbing
                            markers: false
                        }
                    });

                    tl.to(words, { 
                        opacity: 1, 
                        duration: 1, 
                        ease: "power2.out", 
                        stagger: { 
                            each: 0.03,
                            from: "start"
                        } 
                    });

                    console.log("Timeline created for element", element);
                });

                // Refresh ScrollTrigger to ensure all elements are recognized
                ScrollTrigger.refresh();
            });


            