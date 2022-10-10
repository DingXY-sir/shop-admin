import { computed } from "vue";
import { ElMessage } from "element-plus";
/*
 * @Descripttion:切换主题
 * @Author: DXY
 * @Date: 2022-10-10 17:10:44
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-10 17:57:56
 */
import { useGlobalState } from "@/store/index";
import { DEFAULT_COLOR } from "@/config/config";

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
    console.log(document.images);
    document.documentElement.style.setProperty(
      "--el-color-primary",
      themeConfig.value.primary
    );
  };

  return {
    changePrimary,
  };
};
