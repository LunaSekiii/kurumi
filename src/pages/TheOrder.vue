<template>
	<v-row no-gutters class="order-view">
		<v-col cols="2">
			<MenuNav
				:menus="Object.keys(menuList)"
				:switchMenu="switchMenu"
				:currentMenu="currentMenu"
			/>
		</v-col>
		<v-col cols="7">
			<TheMenu
				:menu="menuList[currentMenu] || []"
				:extra="extraList[currentMenu] || []"
		/></v-col>
		<v-col cols="3"> <TheCart /> </v-col>
	</v-row>
</template>

<script>
import MenuNav from "@/components/MenuNav";
import TheMenu from "@/components/TheMenu";
import TheCart from "@/components/TheCart";
export default {
	name: "TheOrder",
	mounted() {
		this.currentMenu = Object.keys(this.menuList)[0];
	},
	data() {
		return {
			currentMenu: "",
			menuList: {
				项目1: [
					{
						name: "商品1",
						price: { 大: 20, 中: 15, 小: 10 },
						extra: ["附加1", "附加2"],
						remarks: ["备注1", "备注2"],
					},
					{
						name: "商品2",
						price: { 大: 21, 中: 16, 小: 13 },
						extra: ["附加2"],
						remarks: ["备注2"],
					},
					{
						name: "商品3",
						price: { 大: 16, 中: 13, 小: 8 },
						extra: ["附加1"],
						remarks: ["备注2"],
					},
					{
						name: "商品4",
						price: { 大: 16, 中: 13, 小: 8 },
						extra: ["附加1"],
						remarks: ["备注2"],
					},
				],
				项目2: [
					{
						name: "商品1",
						price: { 大: 10, 小: 8 },
						extra: ["附加1", "附加3"],
						remarks: ["备注1", "备注2"],
					},
					{
						name: "商品2",
						price: { 大: 13, 中: 12, 小: 11 },
						extra: ["附加2"],
						remarks: ["备注2"],
					},
					{
						name: "商品3",
						price: { 大: 14, 中: 13, 小: 2 },
						extra: ["附加3"],
						remarks: ["备注2"],
					},
				],
			},
			extraList: {
				项目1: [
					{ name: "附加1", price: 5 },
					{ name: "附加2", price: 6 },
				],
				项目2: [
					{ name: "附加1", price: 5 },
					{ name: "附加2", price: 6 },
					{ name: "附加3", price: 7 },
				],
			},
		};
	},
	methods: {
		switchMenu(menuName) {
			this.currentMenu = menuName;
		},
	},
	components: { MenuNav, TheMenu, TheCart },
};
</script>

<style lang="less" scoped>
div {
	// outline: solid;
}
.order-view {
	width: 100%;
	height: 100%;
}
</style>
