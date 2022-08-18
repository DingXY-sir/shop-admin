<!--
 * @Descripttion: 登陆表单
 * @Author: DXY
 * @Date: 2022-08-15 14:28:46
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-18 10:33:48
-->
<template>
  <div class="login-form-container">
    <el-form ref="formRef" :model="loginForm" :rules="loginRules">
      <el-form-item prop="phone">
        <el-input v-model="loginForm.phone" placeholder="用户名：">
          <template #prefix>
            <el-icon><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" placeholder="密码：">
          <template #prefix>
            <el-icon><Unlock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <div class="flx-justify-between">
          <div class="code_ipt">
            <el-input
              v-model="loginForm.code"
              placeholder="验证码："
            ></el-input>
          </div>
          <div class="code_img">
            <el-image :src="loginForm.imgCode" @click="updateCode" />
          </div>
        </div>
      </el-form-item>
    </el-form>
    <div>
      <el-button @click="loginHandle(formRef)" :loading="loading"
        >登陆</el-button
      >
      <el-button @click="resetForm(formRef)">重置</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted } from "vue";
import type { ElForm } from "element-plus";
import { Unlock, User } from "@element-plus/icons-vue";
import { Login } from "@/api/interface/index";
import { getCode, getUserAuth, getRoleId, getLogin } from "@/api/modules/login";
import { Md5 } from "ts-md5";
import { useUserStore } from "@/store/modules/user";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
//FormInstance 获取表单实例类型
type FormInstance = InstanceType<typeof ElForm>;
const formRef = ref<FormInstance>();
const loginRules = reactive({
  phone: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
});
const loginForm = reactive<Login.ReqLoginForm>({
  phone: "",
  password: "",
  code: "",
  imgCode: "",
});

//验证码
const getCodeHandle = async () => {
  const { data } = await getCode();
  loginForm.imgCode = "data:image/png;base64," + data;
};
const updateCode = () => {
  getCodeHandle();
};

//登陆表单
const loading = ref<boolean>(false);
const router = useRouter();
const loginHandle = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (!valid) return;
    loading.value = true;
    try {
      //登陆逻辑
      const params = {
        ...loginForm,
        type: 0,
        password: Md5.hashStr(loginForm.password),
      };
      const res = await getUserAuth(params);
      const { roleId, userId } = res?.data?.data[0];
      const resRoleId = await getRoleId({ roleId, userId });
      const resLogin = await getLogin({
        ...loginForm,
        password: Md5.hashStr(loginForm.password),
      });
      //使用pinia储存token、jti
      const userStore = useUserStore();
      userStore.setUserToken({
        access_token: resLogin.data.data.access_token,
        jti: resLogin.data.data.jti,
      });
      ElMessage.success("登录成功！");
      router.push({ name: "home" });
    } finally {
      loading.value = false;
    }
  });
};

//重置表单
const resetForm = (formEl: FormInstance | undefined) => {
  // ElMessage.error("nihao");
};

onMounted(() => {
  getCodeHandle();
  document.onkeydown = (e: any) => {
    e = window.event || e;
    if (e.code === "Enter" || e.code === "enter" || e.code === "NumpadEnter") {
      if (loading.value) return;
      loginHandle(formRef.value);
    }
  };
});
</script>
<style lang="scss" scoped>
::v-deep .el-form-item__content {
  display: block !important;
}
.code_ipt {
  height: 32px;
  width: 200px;
  .el-input__wrapper {
    width: 100%;
    height: 100%;
  }
}
.code_img {
  height: 32px;
  width: 120px;
  cursor: pointer;
  .el-image {
    width: 100%;
    height: 100%;
  }
}
</style>
