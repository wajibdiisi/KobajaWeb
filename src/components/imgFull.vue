<template>
   <div class="backdrop-confirm" @click.self="closeConfirm">
    <div class="modal-container">
      <div class="text-center">
       <slot></slot>
        <button class="btn btn-confirm-back" @click="closeConfirm">
          Close
        </button>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    closeConfirm() {
      this.$emit("close");
    },
    submitBooklet() {
      this.$emit("submit");
    },
  },
};
</script>

<style>
.custom-icon {
  margin: 5px 29px;
  color: #ed7d2b;
}
.modal-container {
  margin: auto;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  overflow: auto;
  width: 100vw;
  height: 100vh;
}
.backdrop-confirm {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 10;
}
.btn-confirm-submit {
  background-color: #ed7d2b;
  margin: 10px;
  color: white;
}
.btn-confirm-submit:hover {
  border: 2px #ed7d2b solid;
  background-color: white;
}
.btn-confirm-back {
  border: 2px #ed7d2b solid;
  margin: 10px;
  color: #ed7d2b ;
}
.btn-confirm-back:hover {
  background-color: #ed7d2b;
  color: white;
}
.icon {
  margin: 0 auto;
}
</style>