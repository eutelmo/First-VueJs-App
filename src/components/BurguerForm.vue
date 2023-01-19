<template>
  <div>
    <p>component Message</p>
    <div>
      <form id="burger-form">
        <div id="input-container">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            v-model="name"
            placeholder="Your Name"
          />
        </div>

        <div id="input-container">
          <label for="bread">Pick your bread:</label>
          <select name="bread" id="bread" v-model="bread">
            <option value="">Pick your bread</option>
            <option value="bread">Bread1</option>
          </select>
        </div>

        <div id="input-container">
          <label for="meat">Pick your meat:</label>
          <select name="meat" id="meat" v-model="meat">
            <option value="">Pick your meat</option>
            <option value="meat">meat1</option>
          </select>
        </div>

        <div id="input-container">
          <label for="optional">Pick your optionals:</label>
          <div id="checkbox-container">
            <input
              type="checkbox"
              name="optional"
              v-model="optional"
              value="onion"
            />
            <span>Onion</span>
          </div>
        </div>

        <div id="input-container">
          <input type="submit" class="submit-btn" value="build my burguer" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "BurguerForm",
};
</script>

<style scoped>
#burger-form {
  max-width: 400px;
  margin: 0 auto;
}
#input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background: red;
}
label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}
input,
select {
  padding: 5px 10px;
  width: 300px;
}
#opcionais-container {
  flex-direction: row;
  flex-wrap: wrap;
}
#opcionais-title {
  width: 100%;
}
#checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}
#checkbox-container span,
.checkbox-container input {
  width: auto;
}
#checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}
.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}
.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>
