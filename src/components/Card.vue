<script>
export default {
  props: ['title', 'body', 'postId', 'comments']
}
</script>

<template>
  <div class="row">
    <div class="col s4 m12">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title"> {{ title }} </span>
          <p>
            {{ body }}
          </p>
        </div>
        <div class="card-action">
          <!-- :href="'/postDetails/' + postId"  -->
          <a :href="'/postDetails/' + postId" >See More</a>
        </div>
      </div>
    </div>
  </div>
</template>

