<template>
  <div>
    <van-row>
      <van-col span="5">
        <van-sidebar v-model="active" @change="onChange">
          <van-sidebar-item title="JAVA基础"/>
          <van-sidebar-item title="SPRING相关"/>
          <van-sidebar-item title="标签名称"/>
        </van-sidebar>
      </van-col>
      <van-col span="19">
        <van-collapse v-show="active==0" v-model="activeName" accordion>
          <van-collapse-item  title="JAVA基本数据类型有那些？" name="1">四类八种，整形（byte,short,int,long），浮点型（float,double），char类型，boolean类型</van-collapse-item>
          <van-collapse-item title="SPRING相关" name="2">技术无非就是那些开发它的人的共同灵魂。</van-collapse-item>
          <van-collapse-item title="标题3" name="3">在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。</van-collapse-item>
        </van-collapse>
        <van-collapse v-show="active==1" v-model="activeName" accordion>
          <van-collapse-item title="标题1" name="1">1代码是写出来给人看的，附带能在机器上运行。</van-collapse-item>
          <van-collapse-item title="标题2" name="2">技术无非就是那些开发它的人的共同灵魂。</van-collapse-item>
          <van-collapse-item title="标题3" name="3">在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。</van-collapse-item>
        </van-collapse>
      </van-col>
    </van-row>
  </div>
</template>
<script>
// import { showToast } from "vant";
export default {
  data() {
    return {
      activeName: "1",
      active: "0"
    };
  },
  methods: {
    onChange(index) {
        this.active=index;
      // showToast(index);
    }
  }
};
</script>
<style>
</style>
