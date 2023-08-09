# vue-virtual-tree

## 介绍

一款基于 vue2.x，同时支持少量数据或大量数据、多种功能和虚拟滚动（支持固定节点高度和动态节点高度）的树组件。

基于[element-ui](https://element.eleme.cn/#/zh-CN/component/tree)(License:MIT)中抽取的 tree 样式和功能，结合[vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller)(License:MIT)所做的树组件。

## v1.0 功能列表 [![npm](https://img.shields.io/npm/v/@fit2cloud/vue-virtual-tree.svg)](https://www.npmjs.com/package/@fit2cloud/vue-virtual-tree)

- 大数据量支持虚拟滚动（支持固定节点高度和动态节点高度）
- 基本树形数据的展示
- 支持 checkbox 选择
- 支持懒加载
- 默认展开和默认选中
- 禁用节点
- 通过多种方式选中节点和获取选中的节点信息
- 支持自定义节点内容
- 支持节点过滤
- 非虚拟滚动下，支持手风琴模式
- 非懒加载时，支持节点拖拽

## 特点

- 支持虚拟滚动
- 不仅支持大数据量的树形数据展示，还支持数据的操作和更改
- 不仅支持固定高度的子 item 的虚拟滚动，还支持子 item 动态高度的虚拟滚动

## 安装

```
npm install @fit2cloud/vue-virtual-tree
```

或

```
yarn add @fit2cloud/vue-virtual-tree
```

## 引入

### 全局引入

在 `main.js` 文件中引入：

```JS
import Vue from "vue";
import VueVirtualTree from "@fit2cloud/vue-virtual-tree";
// 样式文件，可以根据需要自定义样式或主题
import "@fit2cloud/vue-virtual-tree/src/assets/index.scss"

Vue.use(VueVirtualTree)
```

### 组件引入

在组件中引入：

```JS
import VueVirtualTree from "@fit2cloud/vue-virtual-tree";
// 样式文件，可以根据需要自定义样式或主题
import "@fit2cloud/vue-virtual-tree/src/assets/index.scss"

export default {
  components: {
    VueVirtualTree
  }
}
```

## 使用:

:warning: 在使用虚拟滚动时，必须设置 `node-key`。

```html
<template>
  <div class="ve-tree" style="height:calc(100vh - 20px)">
    <!-- 不使用虚拟滚动时只需去掉height参数即可 -->
    <vue-virtual-tree
      ref="veTree"
      node-key="id"
      height="calc(100vh - 20px)"
      :data="treeData"
      :props="props"
    ></vue-virtual-tree>
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
```

## 在项目中改变 SCSS 变量

通过新建一个样式文件，如：`ve-tree-var.scss`，写入以下内容：

```JS
/* 改变主题色变量 */
$--color-primary: #ea5404;

/* 改变 icon 字体路径变量，必需 */
$--font-path: "~@fit2cloud/vue-virtual-tree/src/assets/fonts";

@import "@fit2cloud/vue-virtual-tree/src/assets/index.scss";
```

:warning: 需要注意的是，覆盖字体路径变量是必需的，将其赋值为 @fit2cloud/vue-virtual-tree 中 icon 图标所在的相对路径即可。

然后在 `main.js` 中直接引入以上样式文件即可：

```JS
import Vue from 'vue'
import VueVirtualTree from "@fit2cloud/vue-virtual-tree";
import "./css/ve-tree-var.scss"

Vue.use(VueVirtualTree)
```

## 其它属性和方法

**来自[element-ui 官方文档](https://element.eleme.cn/#/zh-CN/component/tree)**<br />
**需要使用虚拟滚动时，增加 `height` 属性即可，如：**

```html
<vue-virtual-tree
  :data="data"
  height="calc(100vh - 20px)"
  :props="defaultProps"
  @node-click="handleNodeClick"
></vue-virtual-tree>

<!-- 默认开启固定高度模式，子item动态高度模式需要手动开启，如下：isDynamic为true开启，配合minItemSize设置第一次渲染时的子item最小高度 -->
<vue-virtual-tree
  :data="data"
  height="calc(100vh - 20px)"
  :props="defaultProps"
  @node-click="handleNodeClick"
  :minItemSize="50"
  isDynamic
></vue-virtual-tree>
```

**[快速查看示例和 api](./element-ui-tree.zh-CN.md)**

### License & Copyright

Copyright (c) 2014-2023 飞致云 FIT2CLOUD, All rights reserved.

Licensed under The GNU General Public License version 3 (GPLv3) (the "License"); you may not use this file except in
compliance with the License. You may obtain a copy of the License at

https://www.gnu.org/licenses/gpl-3.0.html

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "
AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
language governing permissions and limitations under the License.
