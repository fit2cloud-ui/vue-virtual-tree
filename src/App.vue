<template>
  <div class="ve-tree" style="height: calc(500px)">
    <vue-virtual-tree
      ref="veTree"
      node-key="id"
      :data="treeData"
      :props="props"
      :minItemSize="30"
      :sizeDependencies="['children']"
      height="500px"
      show-checkbox
      isDynamic
      draggable
    >
      <div
        :style="{
          height: Math.random() * 100 + 'px'
        }"
        slot-scope="{ node }"
      >
        {{ node.label }}
      </div>
    </vue-virtual-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      props: {
        label: "name",
        children: "children"
      },
      treeData: []
    };
  },
  created() {
    const data = [],
      root = 8,
      children = 3,
      base = 1000;
    for (let i = 0; i < root; i++) {
      data.push({
        id: `${i}`,
        name: `test-${i}`,
        children: []
      });
      for (let j = 0; j < children; j++) {
        data[i].children.push({
          id: `${i}-${j}`,
          name: `test-${i}-${j}`,
          children: []
        });
        for (let k = 0; k < base; k++) {
          data[i].children[j].children.push({
            id: `${i}-${j}-${k}`,
            name: `test-${i}-${j}-${k}`
          });
        }
      }
    }
    this.treeData = data;
  }
};
</script>
