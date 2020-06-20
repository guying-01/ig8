/*
 * @Author: gy
 * @Date: 2020-05-28 10:35:22
 * @LastEditors: gy
 * @LastEditTime: 2020-06-20 10:15:00
 */
import { igbAntDesignInstall } from './ant/index'
// ============================
import { igbSwiperBaseInstall } from './base/igbSwiper/index'
import { igbAudioFamilyControlBaseInstall } from './base/igbAudioFamilyControl/index'
import { igbAudioKtvControlBaseInstall } from './base/igbAudioKtvControl/index'
import { igbSingerListBaseInstall } from './base/igbSingerList/index'
import { igbSongListBaseInstall } from './base/igbSongList/index'
import { igbSongCardListBaseInstall } from './base/igbSongCardList/index'
import { igbSongTableListBaseInstall } from './base/igbSongTableList/index'
import { igbLettersBaseInstall } from './base/igbLetters/index'
import { igbLineBaseInstall } from './base/igbLine/index'
import { igbTabsBaseInstall } from './base/igbTabs/index'
import { igbPopoverBaseInstall } from './base/igbPopover/index'
import { igbPageMainBaseInstall } from './base/igbPageMain/index'
import { igbUploadBaseInstall } from './base/igbUpload/index'
import { igbRadioBlockBaseInstall } from './base/igbRadioBlock/index'
import { igbModifyAvatarBaseInstall } from './base/igbModifyAvatar/index'
import { igbKeyBoardBaseInstall } from './base/igbKeyBoard/index'
import { igbKeyBoardLetterBaseInstall } from './base/igbKeyBoardLetter/index'
import { igbKeyBoardDigitalBaseInstall } from './base/igbKeyBoardDigital/index'
import { igbKeyBoardHandwritingBaseInstall } from './base/igbKeyBoardHandwriting/index'
import { igbCheckBoxBaseInstall } from './base/igbCheckBox/index'
import { igbTagBaseInstall } from './base/igbTag/index'
import { igbOrderListBaseInstall } from './base/igbOrderList/index'
// ============================
import { igbModalToolInstall } from './tools/igbModal/index'
import { igbPopoverToolInstall } from './tools/igbPopover/index'
/**
 * 注册组件
 * @param {*} Vue
 */
export const IgbComponentInstall = Vue => {
  // ant
  igbAntDesignInstall(Vue)
  // 基础组件
  igbSwiperBaseInstall(Vue)
  igbAudioFamilyControlBaseInstall(Vue)
  igbAudioKtvControlBaseInstall(Vue)
  igbSingerListBaseInstall(Vue)
  igbSongListBaseInstall(Vue)
  igbSongCardListBaseInstall(Vue)
  igbSongTableListBaseInstall(Vue)
  igbLettersBaseInstall(Vue)
  igbLineBaseInstall(Vue)
  igbTabsBaseInstall(Vue)
  igbPopoverBaseInstall(Vue)
  igbPageMainBaseInstall(Vue)
  igbUploadBaseInstall(Vue)
  igbRadioBlockBaseInstall(Vue)
  igbModifyAvatarBaseInstall(Vue)
  igbKeyBoardBaseInstall(Vue)
  igbKeyBoardLetterBaseInstall(Vue)
  igbKeyBoardDigitalBaseInstall(Vue)
  igbKeyBoardHandwritingBaseInstall(Vue)
  igbCheckBoxBaseInstall(Vue)
  igbTagBaseInstall(Vue)
  igbOrderListBaseInstall(Vue)

  igbModalToolInstall(Vue)
  igbPopoverToolInstall(Vue)
}
