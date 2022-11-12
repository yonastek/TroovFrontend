<template>
  <span>
    <div class="form-group">
      <label for="edit-name">Name</label>
      <input
        class="form-control"
        id="edit-name"
        v-model="registerProduct.name"
        required
      />
    </div>

    <div class="form-group">
      <label for="edit-description">Description</label>
      <textarea
        class="form-control"
        id="edit-description"
        rows="3"
        v-model="registerProduct.description"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="edit-name">Location</label>
      <input
        class="form-control"
        id="edit-name"
        v-model="registerProduct.location"
        required
      />
    </div>
  </span>
</template>

<script>
export default {
  name: "ProductForm",
  props: ["registerProduct"],
};
</script>
