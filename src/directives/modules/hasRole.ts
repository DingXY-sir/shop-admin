/*
 * @Descripttion: 按钮权限
 * @Author: DXY
 * @Date: 2022-11-21 10:11:45
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-21 13:19:48
 */
import { Directive, DirectiveBinding } from "vue";

const hasRole: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    // if(authStore.showMenuListGet)
    const auth = ["admin", "user"];
    if (binding.value && binding.value instanceof Array) {
      if (binding.value.length > 0) {
        const permissionRoles = binding.value;
        // 判断是否存在
        const hasPermission = auth.some(item => {
          return permissionRoles.includes(item);
        });
        if (!hasPermission) {
          return el.parentNode!.removeChild(el);
        }
      }
    }
  },
};

export default hasRole;
