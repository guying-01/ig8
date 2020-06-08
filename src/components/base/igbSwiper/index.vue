<template>
<div class="igb-swiper-base-component">
    <div id="certify">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img class="swiper-img" src="../../../assets/images/banner1.png" />
                </div>
                <div class="swiper-slide">
                    <img class="swiper-img" src="../../../assets/images/banner2.png" />
                </div>
                <div class="swiper-slide">
                    <img class="swiper-img" src="../../../assets/images/banner3.png" />
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</div>
</template>

<script>
export default {
  name: 'IgbSwiperBaseComponent',
  mounted () {
    new Swiper('#certify .swiper-container', {
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      loopedSlides: 5,
      autoplay: 3000,
      prevButton: '.swiper-button-prev',
      nextButton: '.swiper-button-next',
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplayDisableOnInteraction: false,
      onProgress: function (swiper, progress) {
        for (let i = 0; i < swiper.slides.length; i++) {
          let slide = swiper.slides.eq(i)
          let slideProgress = swiper.slides[i].progress
          let modify = 1
          if (Math.abs(slideProgress) > 1) {
            modify = (Math.abs(slideProgress) - 1) * 0.3 + 1
          }
          /**
                     * zoom为缩放
                     */

          let zoom = 100

          let translate = slideProgress * modify * zoom + 'px'
          let scale = 1 - Math.abs(slideProgress) / 5
          let zIndex = 999 - Math.abs(Math.round(10 * slideProgress))
          slide.transform('translateX(' + translate + ') scale(' + scale + ')')
          slide.css('zIndex', zIndex)
          slide.css('opacity', 1)
          if (Math.abs(slideProgress) > 3) {
            slide.css('opacity', 0)
          }
        }
      },
      onSetTransition: function (swiper, transition) {
        for (let i = 0; i < swiper.slides.length; i++) {
          let slide = swiper.slides.eq(i)
          slide.transition(transition)
        }
      },
      // 处理分页器bug
      onSlideChangeStart: function (swiper) {
        if (swiper.activeIndex == 4) {
          swiper.bullets.eq(9).addClass('swiper-pagination-bullet-active')
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.igb-swiper-base-component {
    #certify {
        position: relative;
        width: 100%;
        height: calc-attr(358);
        margin: 0 auto;
        overflow: hidden;

        .swiper-container {
            .swiper-wrapper {

                .swiper-slide {
                    overflow: hidden;
                    width: calc-attr(800);
                    height: calc-attr(344.5);
                    background: transparent;
                    top: calc-attr(-12) !important;

                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }

                    &.swiper-slide-active {
                        height: calc-attr(322) !important;
                        top: 0px !important;

                        img {
                            display: block;
                            width: 100%;
                            height: 100%;
                        }
                    }

                }
            }
        }

        .swiper-pagination {
            width: 100%;
            bottom: 0px;
        }

        .swiper-button-prev,
        .swiper-button-next{
            top: calc-attr(159);
        }

        .swiper-button-prev {
            left: 0px;
            z-index: 2000;
            width: calc-attr(48);
            height: calc-attr(48);
            background: rgba(33, 45, 60, 0.8) url("../../../assets/images/swiper-left.png") no-repeat center;
            background-size: 100%;

            &:hover {
                background: rgba(33, 45, 60, 0.8) url("../../../assets/images/swiper-left-hover.png") no-repeat center;
                background-size: 100%;
            }
        }

        .swiper-button-next {
            right: 0px;
            width: calc-attr(48);
            height: calc-attr(48);
            background: rgba(33, 45, 60, 0.8) url("../../../assets/images/swiper-right.png") no-repeat center;
            background-size: 100%;

            &:hover {
                background: rgba(33, 45, 60, 0.8) url("../../../assets/images/swiper-right-hover.png") no-repeat center;
                background-size: 100%;
            }
        }
    }
}
</style>
