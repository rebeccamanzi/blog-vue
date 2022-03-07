<script>
export default {
  props: ['title', 'body', 'postId', 'comments']
}
</script>

<template>
  <div class="row">
    <div class="col s4 m12">
      <div class="card darken-1">
        <div class="card-content ">
          <span class="card-title deep-purple-text"> {{ title }} </span>
          <p>
            {{ body }}
          </p>
        </div>
        <div class="card-action deep-purple">
          <a class="white-text" :href="'/postDetails/' + postId" >See More</a>
        </div>
      </div>
    </div>
  </div>
</template>

