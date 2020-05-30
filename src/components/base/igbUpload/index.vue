<template>
<div class="igb-upload-base-component">
    <div class="igb-upload-box" :style="{width:`${width}px`,height:`${height}px`,margin:center?'0px auto':'0px'}">
        <input type="file" name="uploadFile" id="uploadFile" class="file" @change="changeHandller($event);" />
        <div class="btn-bg" v-if="!imgSrc">
            <img src="../../../assets/images/bg-upload.png" />
        </div>
        <span class="btn-txt" v-if="!imgSrc">{{uploadText}}</span>
        <div class="result" v-if="imgSrc">
            <img :src="imgSrc" :width="imgWidth" :height="imgHeight" />
            <div class="result-footer" v-if="showResetText">
                {{resetText}}
            </div>
        </div>
    </div>
</div>
</template>

<script>
import utilService from "../../../ddd/util.service";
export default {
    name: "IgbUploadBaseComponent",
    props: {
        width: {
            type: Number,
            default: 144
        },
        height: {
            type: Number,
            default: 144
        },
        center: {
            type: Boolean,
            default: false
        },
        uploadText: {
            type: String,
            default: "上传图片"
        },
        resetText: {
            type: String,
            default: "更换封面图片"
        },
        showResetText: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            imgSrc: "",
            imgWidth: 0,
            imgHeight: 0
        }
    },
    mounted() {},
    methods: {
        /**
         * 文件上传
         */
        changeHandller($event) {
            let fileList = $event.target.files;
            let file = fileList[0];
            const r = new FileReader();
            r.readAsDataURL(file);
            r.onload = (e) => {
                this.imgSrc = e.target.result;
                const image = new Image();
                image.src = this.imgSrc;
                image.onload = (e) => {
                    utilService.igbDrawImage(image, this.width, this.height);
                    console.log(image.width, image.height);
                    this.imgWidth = image.width;
                    this.imgHeight = image.height;
                };

            };
        }
    }
}
</script>

<style lang="scss" scoped>
.igb-upload-base-component {
    .igb-upload-box {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        background: rgba(0, 0, 0, .1);
        border: 1px solid rgba(255, 255, 255, .1);
        border-radius: 4px;

        cursor: pointer;

        overflow: hidden;
        position: relative;

        .file {
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 50000;
            width: 100%;
            height: 100%;
            min-height: 100%;
            opacity: 0;
            cursor: pointer;
        }

        .btn-bg,
        .btn-txt {
            width: 100%;
            height: 50%;
            display: block;
            text-align: center;

            img {
                width: 38px;
                height: 38px;
                opacity: .8;
            }
        }

        .btn-bg {
            display: flex;
            align-items: flex-end;
            justify-content: center;
        }

        .btn-txt {
            padding-top: 10px;
            font-size: 12px;
            font-family: 'PingFang-SC-Regular';
            font-weight: 400;
            color: rgba(255, 255, 255, .5);
        }

        .result {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            .result-footer {
                position: absolute;
                left: 0px;
                bottom: 0px;
                width: 100%;
                height: 36px;
                line-height: 36px;
                background: transparent url("../../../assets/images/result-bg.png") no-repeat center;
                background-size: cover;

                font-size: 14px;
                font-weight: 400;
                color: rgba(255, 255, 255, .7);

                text-align: center;
            }
        }

        &:hover {
            border-color: rgba(255, 255, 255, .2);

            .btn-bg {
                img {
                    opacity: 1;
                }
            }
        }
    }
}
</style>
