<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-31 11:11:00
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-31 17:38:51
-->
<template>
  <base-dialog :title="adminId ? `编辑${titleName}` : `新增${titleName}`" @confirm="handleConfirm" @closed="handleClosed">
    <el-form
      ref="ruleFormRef"
      :rules="rules"
      :disabled="drawerData.isView"
      :model="drawerData.rowData"
      label-width="100px"
      label-suffix=" :"
      :hide-required-asterisk="drawerData.isView"
    >
      <el-form-item label="用户姓名" prop="username">
        <el-input v-model="drawerData.rowData!.username" placeholder="请填写用户姓名" clearable></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="drawerData.rowData!.gender" placeholder="请选择性别" clearable>
          <el-option v-for="item in genderType" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="身份证号" prop="idCard">
        <el-input v-model="drawerData.rowData!.idCard" placeholder="请填写身份证号" clearable></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="drawerData.rowData!.email" placeholder="请填写邮箱" clearable></el-input>
      </el-form-item>
    </el-form>
  </base-dialog>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { FormInstance } from "@/types/element-plus";
const props = withDefaults(
  defineProps<{
    adminId: number | null;
    titleName: string | null;
    isView: boolean;
  }>(),
  {
    adminId: null,
    titleName: null,
    isView: false,
  },
);
interface EmitsType {
  (e: "update:adminId", value: null): void;
  (e: "success"): void;
}
const emit = defineEmits<EmitsType>();
const drawerData = reactive({
  isView: false,
  rowData: {
    username: "",
    gender: "",
    idCard: "",
    email: "",
  },
});
const genderType = ref([
  { value: "1", label: "男" },
  { value: "2", label: "女" },
]);
const rules = reactive({
  username: [{ required: true, message: "请填写用户姓名", trigger: "change" }],
  gender: [{ required: true, message: "请选择性别", trigger: "change" }],
  idCard: [{ required: true, message: "请填写身份证号", trigger: "change" }],
  email: [{ required: true, message: "请填写邮箱", trigger: "change" }],
});

const ruleFormRef = ref<FormInstance | null>(null);
//确认/编辑/查看
const handleConfirm = async () => {
  const valid = await ruleFormRef.value?.validate();
  if (!valid) return false;
  if (props.adminId) {
    //编辑
  } else if (props.adminId && props.isView) {
    //查看
  } else {
  }
  emit("success");
};
const handleClosed = () => {
  emit("update:adminId", null);
  //清空表单验证、清空表单内容
  ruleFormRef.value?.resetFields();
  ruleFormRef.value?.clearValidate();
};
</script>
<style lang="scss" scoped></style>
