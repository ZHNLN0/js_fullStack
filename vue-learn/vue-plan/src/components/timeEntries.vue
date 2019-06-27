<template>
  <div>
    <router-link
      class="btn btn-primary"
      v-if="$route.path !== '/timeEntries/logTime'"
      to="/timeEntries/logTime"
    >创建</router-link>
    <div v-if="$route.path == '/timeEntries/logTime'">
      <h3>创建</h3>
    </div>
    <hr>
    <router-view></router-view>
    <div class="list-group">
      <p v-show="!lists.length"> 
        <strong>还没有任何计划</strong>
      </p>
      <div class="list-group">
        <a class="list-group-item" v-for="(plan,index) in lists" :key="index">
          <div class="row">
            <div class="col-sm-2 user-details">
              <img :src="plan.avatar" class="avatar img-circle img-responsive">
              <p class="text-center">
                <strong>{{ plan.name }}</strong>
              </p>
            </div>

            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i>
                {{ plan.totalTime }}
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{ plan.date }}
              </p>
            </div>

            <div class="col-sm-7 comment-section">
              <p>{{ plan.comment }}</p>
            </div>

            <div class="col-sm-1">
              <button class="btn btn-xs btn-danger delete-button" @click="deletePlan(index)">X</button>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'lists'
    ])
  },
};
</script>

<style>
.avatar {
  height: 75px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
.user-details {
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
  margin: -10px 0;
}
.time-block {
  padding: 10px;
}
.comment-section {
  padding: 20px;
}
</style>
