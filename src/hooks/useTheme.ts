/*
 * @Descripttion:切换主题
 * @Author: DXY
 * @Date: 2022-10-10 17:10:44
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-13 13:37:18
 */
import { computed, onBeforeMount } from "vue";
import { ElMessage } from "element-plus";
import { useGlobalState } from "@/store/index";
import { DEFAULT_COLOR } from "@/config/config";
import { getDarkColor, getLightColor } from "@/utils/theme";

export const useTheme = () => {
  const globalState = useGlobalState();
  const themeConfig = computed(() => globalState.themeConfig);
  // * 修改主题
  const changePrimary = (val: string) => {
    if (!val) {
      val = DEFAULT_COLOR;
      ElMessage({ message: `主题已经重置为${DEFAULT_COLOR}`, type: "success" });
    }
    globalState.setThemeConfig({ ...themeConfig.value, primary: val });

    document.documentElement.style.setProperty(
      "--el-color-primary",
      themeConfig.value.primary
    );
    //颜色变浅
    for (let i = 1; i <= 9; i++) {
      document.documentElement.style.setProperty(
        `--el-color-primary-light-${i}`,
        `${getLightColor(themeConfig.value.primary, i / 10)}`
      );
    }
  };

  onBeforeMount(() => {
    //挂载前设置主题
    changePrimary(themeConfig.value.primary);
  });

  return {
    changePrimary,
  };
};
