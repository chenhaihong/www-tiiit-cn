<template>
  <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="24">
          <h2>地图lite</h2>
          <br />
          <p>
            一个地图小程序，用的 uni + uniCloud 技术栈，主要提供了以下的功能：
          </p>
          <ol>
            <li>路线规划、公交地跌换乘方案</li>
            <li>地点信息及周边信息查询</li>
            <li>天气预报</li>
          </ol>
          <br />
          <h3>访问</h3>
          <ul>
            <li>微信小程序搜索：地图lite</li>
            <li>支付宝小程序搜索：地图lite</li>
            <li>h5: <a target="_blank" href="https://map.tiiit.cn/">https://map.tiiit.cn/</a></li>
          </ul>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.name {
  padding: 2px 6px;
  color: #666;
  background: #f3f3f3;
  border-radius: 6px;
}
</style>
