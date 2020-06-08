<template>
<div class="igb-audio-family-control-base-component">
    <div class="singer-progress">
        <audio :src="audioSrc" ref="player" id="musicMp3"></audio>
        <div class="progress-box"></div>
        <div class="progress-singer" :style="{width:totalProgress}"></div>
        <div class="progress-play" ref="playProgress" :style="{width:progress}">
            <span class="progress-btn" ref="btnProgress" :style="{float:btnProgress?'right':'left'}">{{currentTotalTime}}</span>
        </div>
        <div class="progress-time">{{totalTime}}</div>
    </div>
    <div class="progress-play-ml" :style="{width:progress}"></div>
    <div class="foo-controller">
        <!--歌曲信息-->
        <div class="singer-info">
            <img src="../../../assets/images/song-avatar.png" width="80" height="80" />
            <div>
                <h2>南方姑娘</h2>
                <a href="javascript:;">赵雷</a>
            </div>
        </div>
        <!--播放控制-->
        <div class="player-controller">
            <div class="contr contr-prev"><i></i></div>
            <div class="contr contr-play" :class="{'contr-pause':isPlay}" @click="playHandller"><i></i></div>
            <div class="contr contr-next"><i></i></div>
        </div>
        <!--音量控制-->
        <div class="volume-controller">
            <div class="contr contr-vom"><i></i></div>
            <div class="contr contr-vom-slider">
                <a-slider :min="0" :max="1" :step="0.1" :defaultValue="0.5" :tipFormatter="null" @change="volumeHandller" />
            </div>
        </div>
        <!--歌曲控制-->
        <div class="song-controller">
            <div class="contr contr-cc"><i></i><span>重唱</span></div>
            <div class="contr contr-ly"><i></i><span>录音</span></div>
            <div class="contr contr-sc"><i></i><span>收藏</span></div>
            <div class="contr contr-xh"><i></i><span>循环</span></div>
            <div class="contr contr-yd">
                <a-popover v-model="visible" trigger="click" placement="topRight" overlayClassName="order-ktv-popover">
                    <i></i><span>已点</span>
                    <p class="d">09</p>
                    <template slot="content">
                        <igb-order-list @share="btnShareHandller" @close="btnCloseHandller"></igb-order-list>
                    </template>
                </a-popover>
            </div>
        </div>
        <!--切换-->
        <div class="song-switch">
            <p class="btn-switch" :class="{'btn-switch-on':sw,'btn-switch-off':!sw}" @click="btnSwitch"></p>
            <span>{{sw?"伴唱":"原唱"}}</span>
        </div>
    </div>
</div>
</template>

<script>
import IgbPagesModalShareLayoutComponent from '../../../pages/modalShareLayout/index.vue'
export default {
  name: 'IgbAudioFamilyControlBaseComponent',
  data () {
    return {
      visible: false,
      isPlay: false,
      totalProgress: '80%',
      progress: '0%',
      btnProgress: false,
      btnWidth: 0,
      totalTime: '00:00',
      currentTotalTime: '00:00',
      audioSrc: require(`../../../assets/media/ChR47FvOAl6AUfeaAEOgDYbe6sw219.mp3`),
      sw: true,
      switchSize: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      let w = window.screen.width
      if (w < 1440) {
        this.switchSize = true
      }
      this.initPlayer()
    })
  },
  methods: {
    btnSwitch () {
      this.sw = !this.sw
    },
    btnCloseHandller () {
      this.visible = false
    },
    /**
         * 音量回调事件
         */
    volumeHandller (event) {
      const player = document.getElementById('musicMp3')
      player.volume = event
    },
    /**
         * 播放
         */
    playHandller () {
      this.isPlay = !this.isPlay
      const player = document.getElementById('musicMp3')
      if (this.isPlay) {
        player.play()
      } else {
        player.pause()
      }
    },
    /**
         * 获取播放时长
         */
    initPlayer () {
      const player = document.getElementById('musicMp3')
      // 初始化音频信息
      player.addEventListener('canplay', () => {
        let time = player.duration
        this.getPlayerTime(time)
      })
      // 音频正在播放
      player.addEventListener('timeupdate', () => {
        let musicTime = player.duration
        let currTime = player.currentTime
        let playWidth = this.$refs.playProgress.offsetWidth
        let btnWidth = this.$refs.btnProgress.offsetWidth
        let progress = (currTime / musicTime) * 100
        this.progress = `${progress}%`
        if (playWidth > btnWidth) {
          this.btnProgress = true
        }
        this.getPlayerTime(currTime, 'curr')
        if (this.totalTime === this.currentTotalTime) {
          this.isPlay = false
          this.btnProgress = false
          this.totalProgress = '0%'
          this.progress = '0%'
          this.currentTotalTime = '00:00'
        }
      })
    },
    /**
         * 获取播放时长
         */
    getPlayerTime (playTime, type = 'all') {
      let time = playTime

      // 计算分钟
      let minute = time / 60
      let minutes = parseInt(minute)
      if (minutes < 10) {
        minutes = `0${minutes}`
      }

      // 计算秒
      let second = time % 60
      let seconds = Math.round(second)
      if (seconds < 10) {
        seconds = `0${seconds}`
      }

      if (type === 'all') {
        this.totalTime = `${minutes}:${seconds}`
      } else {
        this.currentTotalTime = `${minutes}:${seconds}`
      }
    },
    btnShareHandller () {
      this.visible = false
      this.igbModal$({
        visible: true,
        wrapClassName: 'share-modal',
        width: 800,
        componentName: IgbPagesModalShareLayoutComponent,
        params: {},
        okHandller: (options, close) => {
          close()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.igb-audio-family-control-base-component {
    width: 100%;
    height: 100%;
    min-height: 100%;
    position: relative;

    .progress-play-ml {
        width: auto;
        height: calc(100% - 2px);
        position: absolute;
        left: 0px;
        bottom: 0px;
        z-index: -1;
        background: linear-gradient(90deg, rgba(240, 184, 58, 0) 0%, rgba(255, 127, 88, 1) 100%);
        opacity: 0.2;
    }

    .singer-progress {
        position: relative;
        width: 100%;
        height: 2px;
        margin-top: -2px;

        .progress-box {
            width: 100%;
            height: 2px;
            min-height: 2px;
            background: rgba(255, 255, 255, 1);
            opacity: 0.1;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 2000;
        }

        .progress-singer {
            width: 80%;
            height: 2px;
            min-height: 2px;
            background: rgba(255, 255, 255, 1);
            opacity: 0.2;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 2001;
        }

        .progress-play {
            width: 60%;
            height: 2px;
            min-height: 2px;
            background: linear-gradient(45deg, rgba(255, 181, 7, 1) 0%, rgba(255, 114, 81, 1) 100%);
            opacity: 1;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 2002;

            .progress-btn {
                width: auto;
                height: auto;
                min-height: auto;
                padding: 0px calc-attr(8);
                background: linear-gradient(45deg, rgba(255, 183, 4, 1) 0%, rgba(255, 114, 81, 1) 100%);
                opacity: 1;
                border-radius: 12px;
                text-align: center;
                font-size: calc-attr(12);
                font-family: 'PingFang-SC-Regular';
                color: rgba(34, 42, 55, 1);
                margin-top: calc-attr(-9);
                -webkit-border-radius: 12px;
                -moz-border-radius: 12px;
                -ms-border-radius: 12px;
                -o-border-radius: 12px;
            }
        }

        .progress-time {
            position: absolute;
            right: calc-attr(23);
            top: calc-attr(10);
            font-size:calc-attr(12);
            font-family: 'PingFang-SC-Regular';
            color: rgba(255, 255, 255, 1);
            opacity: 0.5;
        }
    }

    .foo-controller {
        display: flex;
        align-items: center;
        height: 100%;
        min-height: 100%;

        img {
            cursor: pointer;
        }

        /* 歌曲信息样式 */
        .singer-info,
        .player-controller,
        .volume-controller,
        .song-controller,
        .song-switch {
            display: flex;
            align-items: center;
            height: 100%;
            min-height: 100%;
        }

        .singer-info {
            width:calc-attr(388);

            img {
                border: 2px solid rgba(255, 255, 255, 0.09803921568627452);
                border-radius: 4px;
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                -ms-border-radius: 4px;
                -o-border-radius: 4px;
                margin-right:calc-attr(20);
                margin-left:calc-attr(40);

                &:hover {
                    border: 2px solid rgba(255, 255, 255, 0.2);
                }
            }

            h2 {
                max-width:calc-attr(200);
                height:calc-attr(25);
                line-height:calc-attr(25);
                font-size:calc-attr(18);
                font-family: 'PingFang-SC-Regular';
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                opacity: 0.8;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                cursor: default;
            }

            a {
                font-size:calc-attr(14);
                font-family: 'PingFang-SC-Regular';
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                opacity: 0.5;
                margin: 0px;
                padding: 0px;
            }
        }

        /* 播放控制 */
        .player-controller {
            width: auto;

            .contr {

                i {
                    display: block;
                    width:calc-attr(60);
                    height:calc-attr(60);
                    cursor: pointer;

                }
            }

            .contr-prev {
                margin-right:calc-attr(54);

                i {
                    width:calc-attr(17.39);
                    height:calc-attr(19.24);
                    background: url("../../../assets/images/p/play-left.png") no-repeat center;
                    background-size: 100%;

                    &:hover {
                        box-shadow: 0px 0px 18px rgba(255, 136, 56, 0.45);
                        background: rgba(255, 136, 56, .1) url("../../../assets/images/p/play-left-hover.png") no-repeat center;
                        background-size: 100%;
                    }
                }
            }

            .contr-play {
                position: relative;

                i {
                    background: url("../../../assets/images/p/play-start.png") no-repeat center;
                    background-size: 100%;

                    &:hover {
                        background: url("../../../assets/images/p/play-start-hover.png") no-repeat center;
                        background-size: 100%;

                        &::after {
                            content: " ";
                            border-radius: 50%;
                            display: block;
                            width:calc-attr(60);
                            height:calc-attr(60);
                            border: 1px solid transparent;
                            box-shadow: 0px 0px calc-attr(18) rgba(255, 136, 56, 0.45);
                            position: absolute;
                            top: 0px;
                            left: 0px;
                        }
                    }
                }
            }

            .contr-pause {
                border-radius:calc-attr(50);

                i {
                    background: url("../../../assets/images/p/play-end.png") no-repeat center;
                    background-size:calc-attr(60)calc-attr(60);

                    &:hover {
                        background: url("../../../assets/images/p/play-end-hover.png") no-repeat center;
                        background-size:calc-attr(60)calc-attr(60);
                    }
                }
            }

            .contr-next {
                margin-left:calc-attr(54);

                i {
                    width:calc-attr(17.39);
                    height:calc-attr(19.24);
                    background: url("../../../assets/images/p/play-right.png") no-repeat center;
                    background-size: 100%;

                    &:hover {
                        box-shadow: 0px 0px calc-attr(18) rgba(255, 136, 56, 0.45);
                        background: rgba(255, 136, 56, 0.1) url("../../../assets/images/p/play-right-hover.png") no-repeat center;
                        background-size: 100%;
                    }
                }
            }

        }

        /* 音量控制 */
        .volume-controller {
            .contr {
                i {
                    cursor: pointer;
                }
            }

            .contr-vom {
                margin-left:calc-attr(238);

                i {
                    display: block;
                    width:calc-attr(22.96);
                    height:calc-attr(23.33);
                    background: url("../../../assets/images/p/play-yinliang.png") no-repeat center;
                    background-size:calc-attr(22.96)calc-attr(23.33);

                    &:hover {
                        background: url("../../../assets/images/p/play-yinliang-hover.png") no-repeat center;
                        background-size:calc-attr(22.96)calc-attr(23.33);
                    }
                }
            }

            .contr-vom-slider {
                margin-left:calc-attr(11.3);

                .ant-slider {
                    width:calc-attr(144);
                }
            }
        }

        /* 歌曲控制 */
        .song-controller {
            margin-left:calc-attr(145);

            .contr {
                position: relative;
                cursor: pointer;

                i {
                    display: block;
                    height:calc-attr(27);
                }

                span {
                    display: block;
                    height:calc-attr(20);
                    line-height:calc-attr(20);
                    font-size:calc-attr(14);
                    color: rgba(255, 255, 255, .7);
                    margin-top:calc-attr(8);
                }

                .d {
                    width:calc-attr(24);
                    height:calc-attr(24);
                    line-height:calc-attr(24);
                    text-align: center;
                    position: absolute;
                    right:calc-attr(-15);
                    top:calc-attr(-15);
                    background: url("../../../assets/images/d.png") no-repeat center;
                    background-size: 100% 100%;
                    font-size:calc-attr(14);
                    font-family: Arial;
                    font-weight: 400;
                    font-style: normal !important;
                    color: rgba(255, 255, 255, 1);

                }
            }

            .contr-cc {
                padding-right:calc-attr(20);

                i {
                    width:calc-attr(24.82);
                    background: url("../../../assets/images/p/play-cc.png") no-repeat;
                    background-size: 100%;

                }

                &:hover {
                    i {
                        background: url("../../../assets/images/p/play-cc-h.png") no-repeat;
                        background-size: 100%;
                    }

                    span {
                        color: rgba(255, 128, 66, 1);
                    }
                }
            }

            .contr-ly {
                padding-right:calc-attr(20);

                i {
                    width:calc-attr(26.97);
                    background: url("../../../assets/images/p/play-ly.png") no-repeat;
                    background-size: 100%;
                }

                &:hover {
                    i {
                        background: url("../../../assets/images/p/play-ly-h.png") no-repeat;
                        background-size: 100%;
                    }

                    span {
                        color: rgba(255, 128, 66, 1);
                    }
                }
            }

            .contr-sc {
                padding-right:calc-attr(20);

                i {
                    width:calc-attr(27.35);
                    background: url("../../../assets/images/p/play-sc.png") no-repeat;
                    background-size: 100%;
                }

                &:hover {
                    i {
                        background: url("../../../assets/images/p/play-sc-h.png") no-repeat;
                        background-size: 100%;
                    }

                    span {
                        color: rgba(255, 128, 66, 1);
                    }
                }
            }

            .contr-xh {
                padding-right:calc-attr(20);

                i {
                    width:calc-attr(26.97);
                    background: url("../../../assets/images/p/play-xh.png") no-repeat;
                    background-size: 100%;
                }

                &:hover {
                    i {
                        background: url("../../../assets/images/p/play-xh-h.png") no-repeat;
                        background-size: 100%;
                    }

                    span {
                        color: rgba(255, 128, 66, 1);
                    }
                }
            }

            .contr-yd {

                >span {
                    padding: 0px;
                    margin: 0px;
                    height: auto;
                    line-height: auto;
                }

                i {
                    width:calc-attr(24.49);
                    background: url("../../../assets/images/p/play-yd.png") no-repeat;
                    background-size: 100%;
                }

                &:hover {
                    i {
                        background: url("../../../assets/images/p/play-yd-h.png") no-repeat;
                        background-size: 100%;
                    }

                    span {
                        color: rgba(255, 128, 66, 1);
                    }
                }
            }
        }

        /** 切换 */
        .song-switch {
            align-items: center;
            margin-left:calc-attr(70);

            &:hover {
                span {
                    color: rgba(255, 255, 255, .7);
                }
            }

            .btn-switch {
                width:calc-attr(48);
                height:calc-attr(24);
                margin: 0px;
                padding: 0px;
                cursor: pointer;
                border-radius:calc-attr(12);

                &.btn-switch-on {
                    background: url("../../../assets/images/p/btn-switch-on.png") no-repeat center;
                    background-size:calc-attr(48)calc-attr(24);

                    &:hover {
                        box-shadow: 0px 0px calc-attr(18) rgba(255, 136, 56, 0.16);
                        background: url("../../../assets/images/p/btn-switch-on-h.png") no-repeat center;
                        background-size:calc-attr(48)calc-attr(24);
                    }
                }

                &.btn-switch-off {
                    background: url("../../../assets/images/p/btn-switch-off.png") no-repeat center;
                    background-size:calc-attr(48)calc-attr(24);

                    &:hover {
                        box-shadow: 0px 0px calc-attr(18) rgba(255, 136, 56, 0.16);
                        background: url("../../../assets/images/p/btn-switch-off-h.png") no-repeat center;
                        background-size:calc-attr(48)calc-attr(24);
                    }
                }
            }

            span {
                height:calc-attr(24);
                line-height:calc-attr(24);
                font-size:calc-attr(16);
                color: rgba(255, 255, 255, .7);
                margin-left:calc-attr(14);
            }
        }
    }
}

// @media (max-width : 1680px) {
//     .igb-audio-family-control-base-component {
//         width: 100%;
//         height: 100%;
//         min-height: 100%;
//         position: relative;

//         .singer-progress {
//             position: relative;
//             width: 100%;
//             height: 2px;
//             margin-top: -1px;

//             .progress-box {
//                 width: 100%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: rgba(255, 255, 255, 1);
//                 opacity: 0.1;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2000;
//             }

//             .progress-singer {
//                 width: 80%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: rgba(255, 255, 255, 1);
//                 opacity: 0.2;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2001;
//             }

//             .progress-play {
//                 width: 60%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: linear-gradient(45deg, rgba(255, 181, 7, 1) 0%, rgba(255, 114, 81, 1) 100%);
//                 opacity: 1;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2002;

//                 .progress-btn {
//                     width: auto;
//                     height: auto;
//                     min-height: auto;
//                     padding: 0px 8px;
//                     background: linear-gradient(45deg, rgba(255, 183, 4, 1) 0%, rgba(255, 114, 81, 1) 100%);
//                     opacity: 1;
//                     border-radius: 12px;
//                     text-align: center;
//                     font-size: 12px;
//                     font-family: 'PingFang-SC-Regular';
//                     color: rgba(34, 42, 55, 1);
//                     margin-top: -9px;
//                     -webkit-border-radius: 12px;
//                     -moz-border-radius: 12px;
//                     -ms-border-radius: 12px;
//                     -o-border-radius: 12px;
//                 }
//             }

//             .progress-time {
//                 position: absolute;
//                 right: 10px;
//                 top: 10px;
//                 font-size: 12px;
//                 font-family: 'PingFang-SC-Regular';
//                 color: rgba(255, 255, 255, 1);
//                 opacity: 0.5;
//             }
//         }

//         .foo-controller {
//             display: flex;
//             align-items: center;
//             height: 100%;
//             min-height: 100%;

//             img {
//                 cursor: pointer;
//             }

//             /* 歌曲信息样式 */
//             .singer-info,
//             .player-controller,
//             .volume-controller,
//             .singer-controller {
//                 display: flex;
//                 align-items: center;
//                 height: 100%;
//                 min-height: 100%;
//             }

//             .singer-info {
//                 width: 20%;

//                 img {
//                     border: 2px solid #2C2734;
//                     border-radius: 4px;
//                     -webkit-border-radius: 4px;
//                     -moz-border-radius: 4px;
//                     -ms-border-radius: 4px;
//                     -o-border-radius: 4px;
//                     margin-right: 20px;
//                     margin-left: 40px;
//                 }

//                 h2 {
//                     max-width: 160px;
//                     height: 25px;
//                     line-height: 25px;
//                     font-size: 18px;
//                     font-family: 'PingFang-SC-Regular';
//                     font-weight: 400;
//                     color: rgba(255, 255, 255, 1);
//                     opacity: 0.8;
//                     overflow: hidden;
//                     text-overflow: ellipsis;
//                     white-space: nowrap;
//                 }

//                 p {
//                     font-size: 14px;
//                     font-family: 'PingFang-SC-Regular';
//                     font-weight: 400;
//                     color: rgba(255, 255, 255, 1);
//                     opacity: 0.5;
//                     margin: 0px;
//                     padding: 0px;
//                 }
//             }

//             /* 播放控制 */
//             .player-controller {
//                 justify-content: center;
//                 width: 20%;

//                 .player-pp {
//                     margin: 0px 40px;
//                 }
//             }

//             /* 音量控制 */
//             .volume-controller {
//                 justify-content: center;
//                 width: 20%;

//                 img {
//                     margin-right: 10px;
//                 }

//                 .ant-slider {
//                     width: 120px;
//                 }
//             }

//             /* 歌曲控制 */
//             .singer-controller {
//                 width: 40%;
//                 justify-content: center;

//                 div {
//                     width: 14%;
//                     text-align: center;
//                     cursor: pointer;

//                     img {
//                         display: block;
//                         width: 36px;
//                         height: 36px;
//                         margin: 0 auto;

//                         &.normal {
//                             display: block;
//                         }

//                         &.through {
//                             display: none;
//                         }
//                     }

//                     &:hover {
//                         img {
//                             &.normal {
//                                 display: none;
//                             }

//                             &.through {
//                                 display: block;
//                             }
//                         }

//                         span {
//                             color: rgba(255, 128, 66, 1);
//                         }
//                     }

//                     span {
//                         display: block;
//                         width: 100%;
//                         text-align: center;
//                         font-size: 14px;
//                         font-family: 'PingFang-SC-Regular';
//                         color: rgba(255, 255, 255, 1);
//                         opacity: 0.7;
//                     }

//                     &:last-child {
//                         width: 20%;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-end !important;

//                         span {
//                             width: auto !important;
//                             margin-left: 10px;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// @media (max-width : 1600px) {
//     .igb-audio-family-control-base-component {
//         width: 100%;
//         height: 100%;
//         min-height: 100%;
//         position: relative;

//         .singer-progress {
//             position: relative;
//             width: 100%;
//             height: 2px;
//             margin-top: -1px;

//             .progress-box {
//                 width: 100%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: rgba(255, 255, 255, 1);
//                 opacity: 0.1;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2000;
//             }

//             .progress-singer {
//                 width: 80%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: rgba(255, 255, 255, 1);
//                 opacity: 0.2;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2001;
//             }

//             .progress-play {
//                 width: 60%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: linear-gradient(45deg, rgba(255, 181, 7, 1) 0%, rgba(255, 114, 81, 1) 100%);
//                 opacity: 1;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2002;

//                 .progress-btn {
//                     width: auto;
//                     height: auto;
//                     min-height: auto;
//                     padding: 0px 8px;
//                     background: linear-gradient(45deg, rgba(255, 183, 4, 1) 0%, rgba(255, 114, 81, 1) 100%);
//                     opacity: 1;
//                     border-radius: 12px;
//                     text-align: center;
//                     font-size: 12px;
//                     font-family: 'PingFang-SC-Regular';
//                     color: rgba(34, 42, 55, 1);
//                     margin-top: -9px;
//                     -webkit-border-radius: 12px;
//                     -moz-border-radius: 12px;
//                     -ms-border-radius: 12px;
//                     -o-border-radius: 12px;
//                 }
//             }

//             .progress-time {
//                 position: absolute;
//                 right: 10px;
//                 top: 10px;
//                 font-size: 12px;
//                 font-family: 'PingFang-SC-Regular';
//                 color: rgba(255, 255, 255, 1);
//                 opacity: 0.5;
//             }
//         }

//         .foo-controller {
//             display: flex;
//             align-items: center;
//             height: 100%;
//             min-height: 100%;

//             img {
//                 cursor: pointer;
//             }

//             /* 歌曲信息样式 */
//             .singer-info,
//             .player-controller,
//             .volume-controller,
//             .singer-controller {
//                 display: flex;
//                 align-items: center;
//                 height: 100%;
//                 min-height: 100%;
//             }

//             .singer-info {
//                 width: 20%;

//                 img {
//                     border: 2px solid #2C2734;
//                     border-radius: 4px;
//                     -webkit-border-radius: 4px;
//                     -moz-border-radius: 4px;
//                     -ms-border-radius: 4px;
//                     -o-border-radius: 4px;
//                     margin-right: 20px;
//                     margin-left: 40px;
//                 }

//                 h2 {
//                     max-width: 160px;
//                     height: 25px;
//                     line-height: 25px;
//                     font-size: 18px;
//                     font-family: 'PingFang-SC-Regular';
//                     font-weight: 400;
//                     color: rgba(255, 255, 255, 1);
//                     opacity: 0.8;
//                     overflow: hidden;
//                     text-overflow: ellipsis;
//                     white-space: nowrap;
//                 }

//                 p {
//                     font-size: 14px;
//                     font-family: 'PingFang-SC-Regular';
//                     font-weight: 400;
//                     color: rgba(255, 255, 255, 1);
//                     opacity: 0.5;
//                     margin: 0px;
//                     padding: 0px;
//                 }
//             }

//             /* 播放控制 */
//             .player-controller {
//                 justify-content: center;
//                 width: 20%;

//                 .player-pp {
//                     margin: 0px 40px;
//                 }
//             }

//             /* 音量控制 */
//             .volume-controller {
//                 justify-content: center;
//                 width: 20%;

//                 img {
//                     margin-right: 10px;
//                 }

//                 .ant-slider {
//                     width: 120px;
//                 }
//             }

//             /* 歌曲控制 */
//             .singer-controller {
//                 width: 40%;
//                 justify-content: center;

//                 div {
//                     width: 14%;
//                     text-align: center;
//                     cursor: pointer;

//                     img {
//                         display: block;
//                         width: 36px;
//                         height: 36px;
//                         margin: 0 auto;

//                         &.normal {
//                             display: block;
//                         }

//                         &.through {
//                             display: none;
//                         }
//                     }

//                     &:hover {
//                         img {
//                             &.normal {
//                                 display: none;
//                             }

//                             &.through {
//                                 display: block;
//                             }
//                         }

//                         span {
//                             color: rgba(255, 128, 66, 1);
//                         }
//                     }

//                     span {
//                         display: block;
//                         width: 100%;
//                         text-align: center;
//                         font-size: 14px;
//                         font-family: 'PingFang-SC-Regular';
//                         color: rgba(255, 255, 255, 1);
//                         opacity: 0.7;
//                     }

//                     &:last-child {
//                         width: 20%;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-end !important;

//                         span {
//                             width: auto !important;
//                             margin-left: 10px;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// @media (max-width : 1440px) {
//     .igb-audio-family-control-base-component {
//         width: 100%;
//         height: 100%;
//         min-height: 100%;
//         position: relative;

//         .singer-progress {
//             position: relative;
//             width: 100%;
//             height: 2px;
//             margin-top: -1px;

//             .progress-box {
//                 width: 100%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: rgba(255, 255, 255, 1);
//                 opacity: 0.1;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2000;
//             }

//             .progress-singer {
//                 width: 80%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: rgba(255, 255, 255, 1);
//                 opacity: 0.2;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2001;
//             }

//             .progress-play {
//                 width: 60%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: linear-gradient(45deg, rgba(255, 181, 7, 1) 0%, rgba(255, 114, 81, 1) 100%);
//                 opacity: 1;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2002;

//                 .progress-btn {
//                     width: auto;
//                     height: auto;
//                     min-height: auto;
//                     padding: 0px 8px;
//                     background: linear-gradient(45deg, rgba(255, 183, 4, 1) 0%, rgba(255, 114, 81, 1) 100%);
//                     opacity: 1;
//                     border-radius: 12px;
//                     text-align: center;
//                     font-size: 12px;
//                     font-family: 'PingFang-SC-Regular';
//                     color: rgba(34, 42, 55, 1);
//                     margin-top: -9px;
//                     -webkit-border-radius: 12px;
//                     -moz-border-radius: 12px;
//                     -ms-border-radius: 12px;
//                     -o-border-radius: 12px;
//                 }
//             }

//             .progress-time {
//                 position: absolute;
//                 right: 10px;
//                 top: 10px;
//                 font-size: 12px;
//                 font-family: 'PingFang-SC-Regular';
//                 color: rgba(255, 255, 255, 1);
//                 opacity: 0.5;
//             }
//         }

//         .foo-controller {
//             display: flex;
//             align-items: center;
//             height: 100%;
//             min-height: 100%;

//             img {
//                 cursor: pointer;
//             }

//             /* 歌曲信息样式 */
//             .singer-info,
//             .player-controller,
//             .volume-controller,
//             .singer-controller {
//                 display: flex;
//                 align-items: center;
//                 height: 100%;
//                 min-height: 100%;
//             }

//             .singer-info {
//                 width: 20%;

//                 img {
//                     border: 2px solid #2C2734;
//                     border-radius: 4px;
//                     -webkit-border-radius: 4px;
//                     -moz-border-radius: 4px;
//                     -ms-border-radius: 4px;
//                     -o-border-radius: 4px;
//                     margin-right: 20px;
//                     margin-left: 40px;
//                 }

//                 h2 {
//                     max-width: 100px;
//                     height: 25px;
//                     line-height: 25px;
//                     font-size: 18px;
//                     font-family: 'PingFang-SC-Regular';
//                     font-weight: 400;
//                     color: rgba(255, 255, 255, 1);
//                     opacity: 0.8;
//                     overflow: hidden;
//                     text-overflow: ellipsis;
//                     white-space: nowrap;
//                 }

//                 p {
//                     font-size: 14px;
//                     font-family: 'PingFang-SC-Regular';
//                     font-weight: 400;
//                     color: rgba(255, 255, 255, 1);
//                     opacity: 0.5;
//                     margin: 0px;
//                     padding: 0px;
//                 }
//             }

//             /* 播放控制 */
//             .player-controller {
//                 justify-content: center;
//                 width: 20%;

//                 .player-pp {
//                     margin: 0px 40px;
//                 }
//             }

//             /* 音量控制 */
//             .volume-controller {
//                 justify-content: center;
//                 width: 20%;

//                 img {
//                     margin-right: 10px;
//                 }

//                 .ant-slider {
//                     width: 120px;
//                 }
//             }

//             /* 歌曲控制 */
//             .singer-controller {
//                 width: 40%;
//                 justify-content: center;

//                 div {
//                     width: 14%;
//                     text-align: center;
//                     cursor: pointer;

//                     img {
//                         display: block;
//                         width: 36px;
//                         height: 36px;
//                         margin: 0 auto;

//                         &.normal {
//                             display: block;
//                         }

//                         &.through {
//                             display: none;
//                         }
//                     }

//                     &:hover {
//                         img {
//                             &.normal {
//                                 display: none;
//                             }

//                             &.through {
//                                 display: block;
//                             }
//                         }

//                         span {
//                             color: rgba(255, 128, 66, 1);
//                         }
//                     }

//                     span {
//                         display: block;
//                         width: 100%;
//                         text-align: center;
//                         font-size: 14px;
//                         font-family: 'PingFang-SC-Regular';
//                         color: rgba(255, 255, 255, 1);
//                         opacity: 0.7;
//                     }

//                     &:last-child {
//                         width: 20%;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-end !important;

//                         span {
//                             width: auto !important;
//                             margin-left: 10px;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// @media (max-width : 1366px) {
//     .igb-audio-family-control-base-component {
//         width: 100%;
//         height: 100%;
//         min-height: 100%;
//         position: relative;

//         .singer-progress {
//             position: relative;
//             width: 100%;
//             height: 2px;
//             margin-top: -1px;

//             .progress-box {
//                 width: 100%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: rgba(255, 255, 255, 1);
//                 opacity: 0.1;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2000;
//             }

//             .progress-singer {
//                 width: 80%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: rgba(255, 255, 255, 1);
//                 opacity: 0.2;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2001;
//             }

//             .progress-play {
//                 width: 60%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: linear-gradient(45deg, rgba(255, 181, 7, 1) 0%, rgba(255, 114, 81, 1) 100%);
//                 opacity: 1;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2002;

//                 .progress-btn {
//                     width: auto;
//                     height: auto;
//                     min-height: auto;
//                     padding: 0px 8px;
//                     background: linear-gradient(45deg, rgba(255, 183, 4, 1) 0%, rgba(255, 114, 81, 1) 100%);
//                     opacity: 1;
//                     border-radius: 12px;
//                     text-align: center;
//                     font-size: 12px;
//                     font-family: 'PingFang-SC-Regular';
//                     color: rgba(34, 42, 55, 1);
//                     margin-top: -9px;
//                     -webkit-border-radius: 12px;
//                     -moz-border-radius: 12px;
//                     -ms-border-radius: 12px;
//                     -o-border-radius: 12px;
//                 }
//             }

//             .progress-time {
//                 position: absolute;
//                 right: 10px;
//                 top: 10px;
//                 font-size: 12px;
//                 font-family: 'PingFang-SC-Regular';
//                 color: rgba(255, 255, 255, 1);
//                 opacity: 0.5;
//             }
//         }

//         .foo-controller {
//             display: flex;
//             align-items: center;
//             height: 100%;
//             min-height: 100%;

//             img {
//                 cursor: pointer;
//             }

//             /* 歌曲信息样式 */
//             .singer-info,
//             .player-controller,
//             .volume-controller,
//             .singer-controller {
//                 display: flex;
//                 align-items: center;
//                 height: 100%;
//                 min-height: 100%;
//             }

//             .singer-info {
//                 width: 20%;

//                 img {
//                     border: 2px solid #2C2734;
//                     border-radius: 4px;
//                     -webkit-border-radius: 4px;
//                     -moz-border-radius: 4px;
//                     -ms-border-radius: 4px;
//                     -o-border-radius: 4px;
//                     margin-right: 20px;
//                     margin-left: 40px;
//                 }

//                 h2 {
//                     max-width: 100px;
//                     height: 25px;
//                     line-height: 25px;
//                     font-size: 18px;
//                     font-family: 'PingFang-SC-Regular';
//                     font-weight: 400;
//                     color: rgba(255, 255, 255, 1);
//                     opacity: 0.8;
//                     overflow: hidden;
//                     text-overflow: ellipsis;
//                     white-space: nowrap;
//                 }

//                 p {
//                     font-size: 14px;
//                     font-family: 'PingFang-SC-Regular';
//                     font-weight: 400;
//                     color: rgba(255, 255, 255, 1);
//                     opacity: 0.5;
//                     margin: 0px;
//                     padding: 0px;
//                 }
//             }

//             /* 播放控制 */
//             .player-controller {
//                 justify-content: center;
//                 width: 20%;

//                 .player-pp {
//                     margin: 0px 40px;
//                 }
//             }

//             /* 音量控制 */
//             .volume-controller {
//                 justify-content: center;
//                 width: 20%;

//                 img {
//                     margin-right: 10px;
//                 }

//                 .ant-slider {
//                     width: 120px;
//                 }
//             }

//             /* 歌曲控制 */
//             .singer-controller {
//                 width: 40%;
//                 justify-content: center;

//                 div {
//                     width: 14%;
//                     text-align: center;
//                     cursor: pointer;

//                     img {
//                         display: block;
//                         width: 36px;
//                         height: 36px;
//                         margin: 0 auto;

//                         &.normal {
//                             display: block;
//                         }

//                         &.through {
//                             display: none;
//                         }
//                     }

//                     &:hover {
//                         img {
//                             &.normal {
//                                 display: none;
//                             }

//                             &.through {
//                                 display: block;
//                             }
//                         }

//                         span {
//                             color: rgba(255, 128, 66, 1);
//                         }
//                     }

//                     span {
//                         display: block;
//                         width: 100%;
//                         text-align: center;
//                         font-size: 14px;
//                         font-family: 'PingFang-SC-Regular';
//                         color: rgba(255, 255, 255, 1);
//                         opacity: 0.7;
//                     }

//                     &:last-child {
//                         width: 20%;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-end !important;

//                         span {
//                             width: auto !important;
//                             margin-left: 10px;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// @media (max-width : 1280px) {
//     .igb-audio-family-control-base-component {
//         width: 100%;
//         height: 100%;
//         min-height: 100%;
//         position: relative;

//         .singer-progress {
//             position: relative;
//             width: 100%;
//             height: 2px;
//             margin-top: -1px;

//             .progress-box {
//                 width: 100%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: rgba(255, 255, 255, 1);
//                 opacity: 0.1;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2000;
//             }

//             .progress-singer {
//                 width: 80%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: rgba(255, 255, 255, 1);
//                 opacity: 0.2;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2001;
//             }

//             .progress-play {
//                 width: 60%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: linear-gradient(45deg, rgba(255, 181, 7, 1) 0%, rgba(255, 114, 81, 1) 100%);
//                 opacity: 1;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2002;

//                 .progress-btn {
//                     width: auto;
//                     height: auto;
//                     min-height: auto;
//                     padding: 0px 8px;
//                     background: linear-gradient(45deg, rgba(255, 183, 4, 1) 0%, rgba(255, 114, 81, 1) 100%);
//                     opacity: 1;
//                     border-radius: 12px;
//                     text-align: center;
//                     font-size: 12px;
//                     font-family: 'PingFang-SC-Regular';
//                     color: rgba(34, 42, 55, 1);
//                     margin-top: -9px;
//                     -webkit-border-radius: 12px;
//                     -moz-border-radius: 12px;
//                     -ms-border-radius: 12px;
//                     -o-border-radius: 12px;
//                 }
//             }

//             .progress-time {
//                 position: absolute;
//                 right: 10px;
//                 top: 10px;
//                 font-size: 12px;
//                 font-family: 'PingFang-SC-Regular';
//                 color: rgba(255, 255, 255, 1);
//                 opacity: 0.5;
//             }
//         }

//         .foo-controller {
//             display: flex;
//             align-items: center;
//             height: 100%;
//             min-height: 100%;

//             img {
//                 cursor: pointer;
//             }

//             /* 歌曲信息样式 */
//             .singer-info,
//             .player-controller,
//             .volume-controller,
//             .singer-controller {
//                 display: flex;
//                 align-items: center;
//                 height: 100%;
//                 min-height: 100%;
//             }

//             .singer-info {
//                 width: 20%;

//                 img {
//                     border: 2px solid #2C2734;
//                     border-radius: 4px;
//                     -webkit-border-radius: 4px;
//                     -moz-border-radius: 4px;
//                     -ms-border-radius: 4px;
//                     -o-border-radius: 4px;
//                     margin-right: 20px;
//                     margin-left: 40px;
//                 }

//                 h2 {
//                     max-width: 80px;
//                     height: 19px;
//                     line-height: 19px;
//                     font-size: 16px;
//                     font-family: 'PingFang-SC-Regular';
//                     font-weight: 400;
//                     color: rgba(255, 255, 255, 1);
//                     opacity: 0.8;
//                     overflow: hidden;
//                     text-overflow: ellipsis;
//                     white-space: nowrap;
//                 }

//                 p {
//                     font-size: 14px;
//                     font-family: 'PingFang-SC-Regular';
//                     font-weight: 400;
//                     color: rgba(255, 255, 255, 1);
//                     opacity: 0.5;
//                     margin: 0px;
//                     padding: 0px;
//                 }
//             }

//             /* 播放控制 */
//             .player-controller {
//                 justify-content: center;
//                 width: 20%;

//                 .player-pp {
//                     margin: 0px 25px;

//                     img {
//                         width: 50px;
//                         height: 50px;
//                     }
//                 }
//             }

//             /* 音量控制 */
//             .volume-controller {
//                 justify-content: center;
//                 width: 20%;

//                 img {
//                     margin-right: 10px;
//                 }

//                 .ant-slider {
//                     width: 90px;
//                 }
//             }

//             /* 歌曲控制 */
//             .singer-controller {
//                 width: 40%;
//                 justify-content: center;

//                 div {
//                     width: 15.5%;
//                     text-align: center;
//                     cursor: pointer;

//                     img {
//                         display: block;
//                         width: 30px;
//                         height: 30px;
//                         margin: 0 auto;

//                         &.normal {
//                             display: block;
//                         }

//                         &.through {
//                             display: none;
//                         }
//                     }

//                     &:hover {
//                         img {
//                             &.normal {
//                                 display: none;
//                             }

//                             &.through {
//                                 display: block;
//                             }
//                         }

//                         span {
//                             color: rgba(255, 128, 66, 1);
//                         }
//                     }

//                     span {
//                         display: block;
//                         width: 100%;
//                         text-align: center;
//                         font-size: 12px;
//                         font-family: 'PingFang-SC-Regular';
//                         color: rgba(255, 255, 255, 1);
//                         opacity: 0.7;
//                     }

//                     &:last-child {
//                         width: 20%;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-end !important;

//                         span {
//                             width: auto !important;
//                             margin-left: 10px;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// @media (max-width : 1024px) {
//     .igb-audio-family-control-base-component {
//         width: 100%;
//         height: 100%;
//         min-height: 100%;
//         position: relative;

//         .singer-progress {
//             position: relative;
//             width: 100%;
//             height: 2px;
//             margin-top: -1px;

//             .progress-box {
//                 width: 100%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: rgba(255, 255, 255, 1);
//                 opacity: 0.1;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2000;
//             }

//             .progress-singer {
//                 width: 80%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: rgba(255, 255, 255, 1);
//                 opacity: 0.2;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2001;
//             }

//             .progress-play {
//                 width: 60%;
//                 height: 2px;
//                 min-height: 2px;
//                 background: linear-gradient(45deg, rgba(255, 181, 7, 1) 0%, rgba(255, 114, 81, 1) 100%);
//                 opacity: 1;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 z-index: 2002;

//                 .progress-btn {
//                     width: auto;
//                     height: auto;
//                     min-height: auto;
//                     padding: 0px 8px;
//                     background: linear-gradient(45deg, rgba(255, 183, 4, 1) 0%, rgba(255, 114, 81, 1) 100%);
//                     opacity: 1;
//                     border-radius: 12px;
//                     text-align: center;
//                     font-size: 12px;
//                     font-family: 'PingFang-SC-Regular';
//                     color: rgba(34, 42, 55, 1);
//                     margin-top: -9px;
//                     -webkit-border-radius: 12px;
//                     -moz-border-radius: 12px;
//                     -ms-border-radius: 12px;
//                     -o-border-radius: 12px;
//                 }
//             }

//             .progress-time {
//                 position: absolute;
//                 right: 10px;
//                 top: 10px;
//                 font-size: 12px;
//                 font-family: 'PingFang-SC-Regular';
//                 color: rgba(255, 255, 255, 1);
//                 opacity: 0.5;
//             }
//         }

//         .foo-controller {
//             display: flex;
//             align-items: center;
//             height: 100%;
//             min-height: 100%;

//             img {
//                 cursor: pointer;
//             }

//             /* 歌曲信息样式 */
//             .singer-info,
//             .player-controller,
//             .volume-controller,
//             .singer-controller {
//                 display: flex;
//                 align-items: center;
//                 height: 100%;
//                 min-height: 100%;
//             }

//             .singer-info {
//                 width: 20%;

//                 img {
//                     border: 2px solid #2C2734;
//                     border-radius: 4px;
//                     -webkit-border-radius: 4px;
//                     -moz-border-radius: 4px;
//                     -ms-border-radius: 4px;
//                     -o-border-radius: 4px;
//                     margin-right: 10px;
//                     margin-left: 35px;
//                     width: 60px;
//                     height: 60px;
//                 }

//                 h2 {
//                     max-width: 50px;
//                     height: 19px;
//                     line-height: 19px;
//                     font-size: 14px;
//                     font-family: 'PingFang-SC-Regular';
//                     font-weight: 400;
//                     color: rgba(255, 255, 255, 1);
//                     opacity: 0.8;
//                     overflow: hidden;
//                     text-overflow: ellipsis;
//                     white-space: nowrap;
//                 }

//                 p {
//                     font-size: 12px;
//                     font-family: 'PingFang-SC-Regular';
//                     font-weight: 400;
//                     color: rgba(255, 255, 255, 1);
//                     opacity: 0.5;
//                     margin: 0px;
//                     padding: 0px;
//                 }
//             }

//             /* 播放控制 */
//             .player-controller {
//                 justify-content: center;
//                 width: 18%;

//                 .player-prev,
//                 .player-next {
//                     img {
//                         width: 15px;
//                         height: 16px;
//                     }
//                 }

//                 .player-pp {
//                     margin: 0px 20px;

//                     img {
//                         width: 40px;
//                         height: 40px;
//                     }
//                 }
//             }

//             /* 音量控制 */
//             .volume-controller {
//                 justify-content: center;
//                 width: 15%;

//                 img {
//                     margin-right: 5px;
//                 }

//                 .ant-slider {
//                     width: 70px;
//                 }
//             }

//             /* 歌曲控制 */
//             .singer-controller {

//                 width: 45%;
//                 justify-content: center;

//                 div {
//                     width: 15.5%;
//                     text-align: center;
//                     cursor: pointer;

//                     img {
//                         display: block;
//                         width: 25px;
//                         height: 25px;
//                         margin: 0 auto;

//                         &.normal {
//                             display: block;
//                         }

//                         &.through {
//                             display: none;
//                         }
//                     }

//                     &:hover {
//                         img {
//                             &.normal {
//                                 display: none;
//                             }

//                             &.through {
//                                 display: block;
//                             }
//                         }

//                         span {
//                             color: rgba(255, 128, 66, 1);
//                         }
//                     }

//                     span {
//                         display: block;
//                         width: 100%;
//                         text-align: center;
//                         font-size: 12px;
//                         font-family: 'PingFang-SC-Regular';
//                         color: rgba(255, 255, 255, 1);
//                         opacity: 0.7;
//                     }

//                     &:last-child {
//                         width: 20%;
//                         display: flex;
//                         align-items: center;
//                         justify-content: flex-end !important;

//                         span {
//                             width: auto !important;
//                             margin-left: 10px;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
</style>
