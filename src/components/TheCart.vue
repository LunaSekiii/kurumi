<template>
	<div class="cart">
		<v-list class="cart-list">
			<transition-group name="cartItem">
				<v-list-item
					@click="openItem()"
					three-line
					v-for="item in cartItems"
					:key="
						item.item.name +
						'$' +
						item.price +
						'$' +
						item.extra.toString() +
						'$' +
						item.remark.toString()
					"
				>
					<CartItem @changeCount="changeCountInItem" :item="item" />
				</v-list-item>
			</transition-group>
		</v-list>
		<v-btn color="primary" class="settle-btn" @click="settle">
			￥{{ totalPrice }} 结算
		</v-btn>
	</div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
	name: "TheCart",
	data() {
		return {
			cartItems: [],
		};
	},
	mounted() {
		this.$bus.$on("addItemToCart", this.addItem);
	},
	methods: {
		addItem(newItem) {
			let isExist = false;
			this.cartItems.forEach((item) => {
				if (
					item.item.name +
						"$" +
						item.price +
						"$" +
						item.extra.toString() +
						"$" +
						item.remark.toString() ===
					newItem.item.name +
						"$" +
						newItem.price +
						"$" +
						newItem.extra.toString() +
						"$" +
						newItem.remark.toString()
				) {
					item.count += newItem.count;
					isExist = true;
				}
			});
			if (!isExist) this.cartItems.push(newItem);
		},
		openItem() {
			alert("open item");
		},
		changeCountInItem(v, item) {
			this.cartItems.forEach((i, index) => {
				if (i === item) {
					if (v === 0) {
						alert("删除?");
						this.cartItems.splice(index, 1);
					}
					i.count = v;
				}
			});
		},
		settle() {
			// 这个位置和electron通信，传递订单信息
			// 使用时间戳作为订单ID
			const time = new Date();
			let order = {
				time: time.toJSON(),
				list: this.cartItems,
				price: this.totalPrice,
			};
			order;
		},
		extraIsActive(i, extra) {
			var isExist = false;
			this.cartItems[i].extra.forEach((value) => {
				if (extra === value) isExist = true;
			});
			return isExist;
		},
		itemPrice(i) {
			return (
				((this.cartItems[i].item.price[this.cartItems[i].price] || 0) +
					this.cartItems[i].allExtra.reduce(
						(totalExtraPrice, extra) => {
							if (this.extraIsActive(i, extra.name))
								return totalExtraPrice + extra.price;
							return totalExtraPrice;
						},
						0
					)) *
				this.cartItems[i].count
			);
		},
	},
	computed: {
		totalPrice() {
			let price = 0;
			for (let i = 0; i < this.cartItems.length; i++) {
				price += this.itemPrice(i);
			}
			return price;
		},
	},
	components: { CartItem },
};
</script>

<style lang="less" scoped>
.cart {
	width: 100%;
	height: 100%;
	max-height: calc(100vh - 60px);
}
.cart-list {
	width: 100%;
	height: 80%;
	overflow-x: hidden;
	overflow-y: auto;
}
.settle-btn {
	width: 90% !important;
	height: 18% !important;
	margin: auto !important;
	padding: 30px 0px !important;
	font-size: 2rem;
}

.cartItem-enter-from,
.cartItem-leave-to {
	opacity: 0;
	transform: translateX(1000px);
}
.cartItem-leave-active,
.cartItem-enter-active {
	transition: all 1s ease;
}
</style>
