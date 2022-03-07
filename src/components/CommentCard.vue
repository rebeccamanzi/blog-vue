<script>
export default {
  props: ["userName", "userEmail", "body", "userStatus"],
};
</script>

<template>
  
    <div class="col s12">
      <div class="card horizontal">
        <div class="card-stacked">
          <div class="card-content">
            <p class="body">
              {{ body }}
            </p>
            <p class="user"> <span class="blue-text text-darken-2">{{ userName }} </span> | {{ userEmail }} </p>
          </div>
        </div>
      </div>
    </div>
  
</template>

<style>
p.body {
    font-size: 1.2rem;
}

</style>

