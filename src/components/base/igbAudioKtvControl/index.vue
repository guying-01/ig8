<template>
  <div class="igb-audio-ktv-control-base-component">
    <div class="singer-progress">
      <audio :src="audioSrc" ref="player" id="musicMp3"></audio>
      <div class="progress-box"></div>
      <div class="progress-singer" :style="{ width: totalProgress }"></div>
      <div
        class="progress-play"
        ref="playProgress"
        :style="{ width: progress }"
      >
        <span
          class="progress-btn"
          ref="btnProgress"
          :style="{ float: btnProgress ? 'right' : 'left' }"
          >{{ currentTotalTime }}</span
        >
      </div>
      <div class="progress-time">{{ totalTime }}</div>
    </div>
    <div class="progress-play-ml" :style="{ width: progress }"></div>
    <div class="foo-controller">
      <!--歌曲信息-->
      <div class="singer-info">
        <img
          src="../../../assets/images/song-avatar.png"
          width="80"
          height="80"
        />
        <div>
          <h2>南方姑娘</h2>
          <a href="javascript:;">赵雷</a>
        </div>
      </div>
      <!--播放控制-->
      <div class="player-controller">
        <div
          class="contr contr-play"
          :class="{ 'contr-pause': isPlay }"
          @click="playHandller"
        >
          <i></i><span>播放</span>
        </div>
        <div class="contr contr-reset"><i></i><span>重唱</span></div>
        <div class="contr contr-cut"><i></i><span>切歌</span></div>
      </div>
      <!--音量控制-->
      <div class="volume-controller">
        <div class="contr contr-nov"><i></i><span>静音</span></div>
        <div class="contr contr-ova">
          <a-tooltip placement="top" overlayClassName="tip-vom tip-voma">
            <template slot="title">
              <div class="vom-box"></div>
              <div class="vom-b"></div>
            </template>
            <i></i><span>音增</span>
          </a-tooltip>
        </div>
        <div class="contr contr-ovd">
          <a-tooltip placement="top" overlayClassName="tip-vom tip-vomd">
            <template slot="title">
              <div class="vom-box"></div>
              <div class="vom-b"></div>
            </template>
            <i></i><span>音减</span>
          </a-tooltip>
        </div>
      </div>
      <!--歌曲控制-->
      <div class="song-controller">
        <div class="contr contr-ly"><i></i><span>录音</span></div>
        <div class="contr contr-sc"><i></i><span>收藏</span></div>
        <div class="contr contr-qf"><i></i><span>气氛</span></div>
        <div class="contr contr-yd">
          <a-popover
            v-model="visible"
            trigger="click"
            placement="topRight"
            overlayClassName="order-ktv-popover"
          >
            <i></i><span>已点</span>
            <p class="d">09</p>
            <template slot="content">
              <igb-order-list
                @share="btnShareHandller"
                @close="btnCloseHandller"
              ></igb-order-list>
            </template>
          </a-popover>
        </div>
      </div>
      <!--切换-->
      <div class="song-switch">
        <p
          class="btn-switch"
          :class="{ 'btn-switch-on': sw, 'btn-switch-off': !sw }"
          @click="btnSwitch"
        ></p>
        <span>{{ sw ? "伴唱" : "原唱" }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import IgbPagesModalShareLayoutComponent from '../../../pages/modalShareLayout/index.vue'
export default {
  name: 'IgbAudioKtvControlBaseComponent',
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
    btnShareHandller (event) {
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
.igb-audio-ktv-control-base-component {
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
    background: linear-gradient(
      90deg,
      rgba(240, 184, 58, 0) 0%,
      rgba(255, 127, 88, 1) 100%
    );
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
      background: linear-gradient(
        45deg,
        rgba(255, 181, 7, 1) 0%,
        rgba(255, 114, 81, 1) 100%
      );
      opacity: 1;
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 2002;

      .progress-btn {
        width: auto;
        height: auto;
        min-height: auto;
        padding: 0px 8px;
        background: linear-gradient(
          45deg,
          rgba(255, 183, 4, 1) 0%,
          rgba(255, 114, 81, 1) 100%
        );
        opacity: 1;
        border-radius: 12px;
        text-align: center;
        font-size: 12px;
        font-family: "PingFang-SC-Regular";
        color: rgba(34, 42, 55, 1);
        margin-top: -9px;
        -webkit-border-radius: 12px;
        -moz-border-radius: 12px;
        -ms-border-radius: 12px;
        -o-border-radius: 12px;
      }
    }

    .progress-time {
      position: absolute;
      right: 23px;
      top: 10px;
      font-size: 12px;
      font-family: "PingFang-SC-Regular";
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
      width: 515px;

      img {
        border: 2px solid rgba(255, 255, 255, 0.09803921568627452);
        border-radius: 4px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -ms-border-radius: 4px;
        -o-border-radius: 4px;
        margin-right: 20px;
        margin-left: 40px;

        &:hover {
          border: 2px solid rgba(255, 255, 255, 0.2);
        }
      }

      h2 {
        max-width: 200px;
        height: 25px;
        line-height: 25px;
        font-size: 18px;
        font-family: "PingFang-SC-Regular";
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        opacity: 0.8;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: default;
      }

      a {
        font-size: 14px;
        font-family: "PingFang-SC-Regular";
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        opacity: 0.5;
        margin: 0px;
        padding: 0px;
      }
    }

    /* 播放控制 */
    .player-controller {
      .contr {
        width: 40px;
        margin-right: 45px;
        cursor: pointer;

        &:last-child {
          margin-right: 0px;
        }

        i {
          display: block;
          margin: 0 auto;
        }

        span {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 153, 37, 1);
          padding-top: 9px;
        }

        &:hover {
          span {
            color: rgba(229, 87, 18, 1);
          }
        }
      }

      .contr-play {
        i {
          width: 19.77px;
          height: 27px;
          background: url("../../../assets/images/k/k-play.png") no-repeat
            center center;
          background-size: 100%;
        }

        &:hover {
          i {
            background: url("../../../assets/images/k/k-play-h.png") no-repeat
              center center;
            background-size: 100%;
          }
        }
      }

      .contr-pause {
        i {
          width: 19.77px;
          height: 27px;
          background: url("../../../assets/images/k/k-pause.png") no-repeat
            center center;
          background-size: 100%;
        }

        &:hover {
          i {
            background: url("../../../assets/images/k/k-pause.png") no-repeat
              center center;
            background-size: 100%;
          }
        }
      }

      .contr-reset {
        i {
          width: 24.82px;
          height: 27px;
          background: url("../../../assets/images/k/k-reset.png") no-repeat
            center;
          background-size: 100%;
        }

        &:hover {
          i {
            background: url("../../../assets/images/k/k-reset-h.png") no-repeat
              center center;
            background-size: 100%;
          }
        }
      }

      .contr-cut {
        i {
          width: 21.87px;
          height: 27px;
          background: url("../../../assets/images/k/k-cut.png") no-repeat center;
          background-size: 100%;
        }

        &:hover {
          i {
            background: url("../../../assets/images/k/k-cut-h.png") no-repeat
              center center;
            background-size: 100%;
          }
        }
      }
    }

    /* 音量控制 */
    .volume-controller {
      margin-left: 120px;

      .contr {
        width: 40px;
        margin-right: 45px;
        cursor: pointer;

        &:last-child {
          margin-right: 0px;
        }

        i {
          display: block;
          margin: 0 auto;
        }

        span {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 153, 37, 1);
          padding-top: 9px;
        }

        &:hover {
          span {
            color: rgba(229, 87, 18, 1);
          }
        }
      }

      .contr-nov {
        i {
          width: 26.44px;
          height: 27px;
          background: url("../../../assets/images/k/k-nov.png") no-repeat center
            center;
          background-size: 100%;
        }

        &:hover {
          i {
            background: url("../../../assets/images/k/k-nov-h.png") no-repeat
              center center;
            background-size: 100%;
          }
        }
      }

      .contr-ova {
        > span {
          padding: 0px !important;
        }

        i {
          width: 30.85px;
          height: 27px;
          background: url("../../../assets/images/k/k-ova.png") no-repeat center;
          background-size: 100%;
        }

        &:hover {
          i {
            background: url("../../../assets/images/k/k-ova-h.png") no-repeat
              center center;
            background-size: 100%;
          }
        }
      }

      .contr-ovd {
        > span {
          padding: 0px !important;
        }

        i {
          width: 30.85px;
          height: 27px;
          background: url("../../../assets/images/k/k-ovd.png") no-repeat center;
          background-size: 100%;
        }

        &:hover {
          i {
            background: url("../../../assets/images/k/k-ovd-h.png") no-repeat
              center center;
            background-size: 100%;
          }
        }
      }
    }

    /* 歌曲控制 */
    .song-controller {
      margin-left: 120px;

      .contr {
        width: 40px;
        margin-right: 45px;
        position: relative;
        cursor: pointer;

        .d {
          width: 24px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          position: absolute;
          right: -15px;
          top: -15px;
          background: url("../../../assets/images/d.png") no-repeat center;
          background-size: 100% 100%;
          font-size: 14px;
          font-family: Arial;
          font-weight: 400;
          font-style: normal !important;
          color: rgba(255, 255, 255, 1);
        }

        &:last-child {
          margin-right: 0px;
        }

        i {
          display: block;
          margin: 0 auto;
        }

        span {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 153, 37, 1);
          padding-top: 9px;
        }

        &:hover {
          span {
            color: rgba(229, 87, 18, 1);
          }
        }
      }

      .contr-ly {
        i {
          width: 26.97px;
          height: 27px;
          background: url("../../../assets/images/k/k-ly.png") no-repeat center
            center;
          background-size: 100%;
        }

        &:hover {
          i {
            background: url("../../../assets/images/k/k-ly-h.png") no-repeat
              center center;
            background-size: 100%;
          }
        }
      }

      .contr-sc {
        i {
          width: 27.35px;
          height: 27px;
          background: url("../../../assets/images/k/k-sc.png") no-repeat center;
          background-size: 100%;
        }

        &:hover {
          i {
            background: url("../../../assets/images/k/k-sc-h.png") no-repeat
              center center;
            background-size: 100%;
          }
        }
      }

      .contr-qf {
        i {
          width: 27.09px;
          height: 27px;
          background: url("../../../assets/images/k/k-qf.png") no-repeat center;
          background-size: 100%;
        }

        &:hover {
          i {
            background: url("../../../assets/images/k/k-qf-h.png") no-repeat
              center center;
            background-size: 100%;
          }
        }
      }

      .contr-yd {
        > span {
          padding: 0px !important;
        }

        i {
          width: 24.49px;
          height: 27px;
          background: url("../../../assets/images/k/k-yd.png") no-repeat center;
          background-size: 100%;
        }

        &:hover {
          i {
            background: url("../../../assets/images/k/k-yd-h.png") no-repeat
              center center;
            background-size: 100%;
          }
        }
      }
    }

    .song-switch {
      align-items: center;
      margin-left: 70px;

      &:hover {
        span {
          color: rgba(255, 255, 255, 0.7);
        }
      }

      .btn-switch {
        width: 48px;
        height: 24px;
        margin: 0px;
        padding: 0px;
        cursor: pointer;
        border-radius: 12px;

        &.btn-switch-on {
          background: url("../../../assets/images/p/btn-switch-on.png")
            no-repeat center;
          background-size: 48px 24px;

          &:hover {
            box-shadow: 0px 0px 18px rgba(255, 136, 56, 0.16);
            background: url("../../../assets/images/p/btn-switch-on-h.png")
              no-repeat center;
            background-size: 48px 24px;
          }
        }

        &.btn-switch-off {
          background: url("../../../assets/images/p/btn-switch-off.png")
            no-repeat center;
          background-size: 48px 24px;

          &:hover {
            box-shadow: 0px 0px 18px rgba(255, 136, 56, 0.16);
            background: url("../../../assets/images/p/btn-switch-off-h.png")
              no-repeat center;
            background-size: 48px 24px;
          }
        }
      }

      span {
        width: 40px;
        height: 24px;
        line-height: 24px;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.7);
        margin-left: 14px;
      }
    }
  }
}
</style>
