<!--
 * @Descripttion: header栏头像
 * @Author: DXY
 * @Date: 2022-08-18 14:21:52
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-14 11:01:24
-->
<template>
  <div class="avatar-container flx-items-center">
    <span class="user_name">{{ userName }}</span>
    <el-dropdown>
      <div class="avatar">
        <img :src="avatar" alt="" />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人资料</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item divided @click="logout"> 退出登录 </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import { useUserStore } from "@/store/modules/user";
import { ElMessageBox } from "element-plus";
const avatar = new URL("../../../../assets/images/avatar.gif", import.meta.url).href;
const userStore = useUserStore();
const userName = computed((): string => userStore.user.username);
const logout = () => {
  // 退出登录
  ElMessageBox.confirm("您是否确认退出登录?", "温馨提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {});
};
</script>
<style lang="scss" scoped>
.user_name {
  margin-right: 10px;
  font-size: 15px;
  color: #000000bf;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
