<template>
  <div>

    <!-- 面包屑导航条 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>参数列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <!-- 警告提示 -->
      <el-alert title="注意：只允许为第三级分类设置相关参数！" type="warning" :closable="false" show-icon>
      </el-alert>
      <!-- 分类选择区域 -->
      <el-row>
        <el-col>
          选择商品分类：
          <el-cascader expand-trigger="hover" :options="catelist" :props="cascaderProps" v-model="selectedCate" @change="handleCateChange">
          </el-cascader>
        </el-col>
      </el-row>
      <!-- tabs 区域 -->
      <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <el-tab-pane label="动态参数" name="first">
          <el-button type="primary" size="mini" :disabled="this.selectedCate.length === 3 ? false : true">添加参数</el-button>
        </el-tab-pane>
        <el-tab-pane label="静态属性" name="second">
          <el-button type="primary" size="mini" :disabled="this.selectedCate.length === 3 ? false : true">添加属性</el-button>
        </el-tab-pane>
      </el-tabs>
    </el-card>

  </div>
</template>

<script>
import mix from './Params-mixins.js'
export default {
  mixins: [mix]
}
</script>

<style lang="less" scoped>
.el-row {
  margin: 15px 0;
}
</style>
