/*
 * @Descripttion: 背景水印
 * @Author: DXY
 * @Date: 2022-10-08 14:28:56
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-08 16:54:46
 */

/**
 * 思路：
 * 1、创建canvas画布，设置文字大小、颜色等
 * 2、通过canvas特性生成base64格式图片
 * 3、将其设置成背景图片，实现页面或组件水印效果
 * 期望使用：
 * <div v-waterMarker="{text:'版权所有',textColor:'rgba(180,180,180,0.4)'}"></div>
 */

import { Directive, DirectiveBinding } from "vue";

const addWaterMaker: Directive = (str: string, parentNode: any, font: any, textColor: any) => {
  let can = document.createElement("canvas");
  parentNode.appendChild(can);
  can.width = 210;
  can.height = 150;
  can.style.display = "none";
  let cans = can.getContext("2d") as CanvasRenderingContext2D;
  cans.rotate((-20 * Math.PI) / 180);
  cans.font = font || "16px Microsoft JhengHei";
  cans.fillStyle = textColor || "rgba(180,180,180,0.3)";
  cans.textAlign = "left";
  cans.textBaseline = "middle";
  cans.fillText(str, can.width / 10, can.height / 2);
  parentNode.style.backgroundImage = `url(${can.toDataURL("image/png")})`;
};
const waterMarker = {
  mounted(el: DirectiveBinding, binding: DirectiveBinding) {
    addWaterMaker(binding.value.text, el, binding.value.font, binding.value.textColor);
  },
};

export default waterMarker;
