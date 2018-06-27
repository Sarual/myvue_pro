export default {
  data() {
    return {
      // 所有的商品分类
      catelist: [],
      // 级联选择框的对应关系
      cascaderProps: {
        value: 'cat_id',
        label: 'cat_name',
        children: 'children'
      },
      // 选中的商品分类
      selectedCate: [],
      // 被选中的 tab 页签的名字
      activeName: 'first'
    }
  },
  created() {
    this.getCateList()
  },
  methods: {
    // 获取所有分类的数据
    async getCateList() {
      const { data: res } = await this.$http.get('categories?type=3')
      if (res.meta.status !== 200) return this.$message.error('获取分类数据失败！')
      this.catelist = res.data
    },
    // 每当分类选择框选择项发生变化，都会触发这个事件处理函数
    handleCateChange() {
      if (this.selectedCate.length !== 3) {
        this.selectedCate = []
      }
      console.log(this.selectedCate)
    },
    // 每当点击了不同的页签，都会触发这个函数
    handleTabClick() {
      // 只要发生了 tab 栏的切换，就立即打印当前被选中的 tab 栏 页签的 名称
      console.log(this.activeName)
    }
  }
}
