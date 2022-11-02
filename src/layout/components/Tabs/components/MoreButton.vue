<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-11-02 15:57:28
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-02 16:55:38
-->
<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-button size="small" type="primary">
        {{ $t("tabs.more") }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </el-button>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <el-icon><Refresh /></el-icon>{{ $t("tabs.refresh") }}
        </el-dropdown-item>
        <el-dropdown-item>
          <el-icon><FullScreen /></el-icon>{{ $t("tabs.maximize") }}
        </el-dropdown-item>
        <el-dropdown-item divided>
          <el-icon><Remove /></el-icon>{{ $t("tabs.closeCurrent") }}
        </el-dropdown-item>
        <el-dropdown-item>
          <el-icon><CircleClose /></el-icon>{{ $t("tabs.closeOther") }}
        </el-dropdown-item>
        <el-dropdown-item>
          <el-icon><FolderDelete /></el-icon>{{ $t("tabs.closeAll") }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped></style>
