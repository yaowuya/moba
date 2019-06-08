<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}分类</h1>
    <el-form ref="form" :model="form" label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="form.name" placeholder="名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "CategoryEdit",
    props: {
      id: {}
    },
    data() {
      return {
        form: {},
        parents: []
      }
    },
    methods: {
      async save() {
        let res
        if(this.id){
           res = await this.$http.put(`/category/update/${this.id}`, this.form)
        }else{
          res = await this.$http.post("/category/create", this.form)
        }
        this.$router.push("/category/list")
        this.$message({
          type: "success",
          message: "保存成功"
        })

      },
      async fetch() {
        const res = await this.$http.get(`/category/list/${this.id}`)
        this.form = res.data
      }
    },
    created() {
      this.id && this.fetch()
    }
  }
</script>

<style scoped>

</style>
