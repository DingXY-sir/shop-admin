/*
 * @Descripttion:防抖指令
 * @Author: DXY
 * @Date: 2022-10-08 16:46:19
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-09 11:37:10
 */
import { Directive, DirectiveBinding } from "vue";

interface ElType extends HTMLElement {
  __handleClick__: () => any;
}

const debounce: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    if (typeof binding.value !== "function") {
      throw "callback must be a function";
    }
    let timer: ReturnType<typeof setTimeout> | null = null; // ReturnType返回setTimeout实例
    el.__handleClick__ = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        binding.value();
      }, 500);
    };
    el.addEventListener("click", el.__handleClick__);
  },
  beforeUnmount(el: ElType) {
    el.removeEventListener("click", el.__handleClick__);
  },
};

export default debounce;
