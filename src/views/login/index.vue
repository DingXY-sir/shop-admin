<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-15 13:53:50
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-14 11:33:29
-->
<template>
  <div class="login-container">
    <div class="login-box flx-center">
      <div class="login-content flx-justify-around">
        <div>
          <img class="login-left" src="@/assets/images/login_left0.png" alt="" />
        </div>
        <div>
          <div class="login-right">
            <h3>后台管理系统</h3>
            <login-form />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "./components/LoginForm.vue";
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
